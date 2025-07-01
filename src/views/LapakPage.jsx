import { useCallback, useEffect, useRef, useState } from "react";
import { kategoriLapak, lapakData } from "../datas/dummy";
import { Heart, HeartIcon, SearchIcon, StarIcon } from "lucide-react";
import { LapakDetailModal } from "../components/LapakDetailModal";
import { LoginModal } from "../components/LoginModal";


export const LapakPage = ({ navigateTo }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [selectedSubcategory, setSelectedSubcategory] = useState('Semua');
    const [selectedDetail, setSelectedDetail] = useState(null);
    const [sortBy, setSortBy] = useState('Terlaris');
    const [like, setLike] = useState(false);
    const [likedItems, setLikedItems] = useState(new Set()); // Menggunakan Set untuk menyimpan ID item yang disukai
    const [showLoginModal, setShowLoginModal] = useState(false); // State to control login modal visibility
    const [products, setProducts] = useState([]); // State to store product data
    const [loading, setLoading] = useState(false); // State to manage loading status
    const [hasMore, setHasMore] = useState(true); // State to check if there's more data to load
    const [page, setPage] = useState(0); // State to manage current page for infinite scroll
    const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product for modal
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    // Ref for the sentinel element (the div at the bottom)
    const sentinelRef = useRef(null);
    // Ref to store the IntersectionObserver instance
    const observerInstanceRef = useRef(null);

    // Function to simulate fetching product data
    const fetchProducts = useCallback(async () => {
        if (loading || !hasMore) return; // Prevent multiple fetches or if no more data
        setLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Generate mock data with the new structure
        const newProducts = Array.from({ length: 12 }, (_, i) => {
            const id = page * 12 + i;
            const isJasa = Math.random() < 0.5;
            const category = isJasa ? 'Jasa' : 'Dagang';
            const subcategory = isJasa ? 'Elektronik' : 'Makanan';
            const seller = isJasa ? 'AC Dingin Selalu' : 'Dapur Ummi';
            const location = ['Jakarta Selatan', 'Jakarta Timur', 'Jakarta Pusat', 'Bekasi'][Math.floor(Math.random() * 4)];
            const price = Math.floor(Math.random() * 500000) + 50000; // Random price between 50,000 and 550,000
            const sold = Math.floor(Math.random() * 200) + 10; // Random sold count
            const rating = (Math.random() * 2 + 3).toFixed(1); // Random rating between 3.0 and 5.0

            return {
                id: id,
                nama: `${isJasa ? 'Jasa ' : 'Produk '} ${category} ${id + 1}`,
                harga: price,
                kategori: category,
                subkategori: subcategory,
                terjual: sold,
                rating: parseFloat(rating),
                penjual: seller,
                lokasi: location,
                latitude: -6.2615 + (Math.random() * 0.1 - 0.05), // Mock latitude
                longitude: 106.8106 + (Math.random() * 0.1 - 0.05), // Mock longitude
                gambar: [
                    `https://placehold.co/600x400/${Math.floor(Math.random() * 16777215).toString(16)}/ffffff?text=${category}+${id + 1}+Gambar+1`,
                    `https://placehold.co/600x400/${Math.floor(Math.random() * 16777215).toString(16)}/ffffff?text=${category}+${id + 1}+Gambar+2`,
                    `https://placehold.co/600x400/${Math.floor(Math.random() * 16777215).toString(16)}/ffffff?text=${category}+${id + 1}+Gambar+3`
                ],
                color: ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-orange-500'][Math.floor(Math.random() * 6)]
            };
        });

        setProducts(prevProducts => [...prevProducts, ...newProducts]);
        setPage(prevPage => prevPage + 1);
        setLoading(false);

        // Simulate no more data after a few pages
        if (page >= 3) { // For demonstration, stop after 4 pages (48 items)
            setHasMore(false);
        }
    }, [loading, hasMore, page]);

    // Function to handle product card click
    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    // Effect for initial data load
    useEffect(() => {
        fetchProducts();
    }, []); // Run only once on component mount

    // Effect for infinite scroll using Intersection Observer
    useEffect(() => {
        const currentSentinel = sentinelRef.current;
        const currentObserverInstance = observerInstanceRef.current;

        // Disconnect previous observer if it exists
        if (currentObserverInstance) {
            currentObserverInstance.disconnect();
        }

        if (!currentSentinel || loading || !hasMore) {
            // No sentinel element yet, or no more data to load, or currently loading
            return;
        }

        // Create a new Intersection Observer
        const newObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore && !loading) {
                fetchProducts();
            }
        }, { threshold: 0.5 });

        // Store the new observer instance in the ref
        observerInstanceRef.current = newObserver;

        // Observe the sentinel element
        newObserver.observe(currentSentinel);

        // Cleanup function
        return () => {
            if (observerInstanceRef.current) {
                observerInstanceRef.current.disconnect();
            }
        };
    }, [fetchProducts, loading, hasMore]); // Dependencies: fetchProducts, loading, hasMore. sentinelRef.current is not a dependency because it's a DOM element, and we only care about its initial presence.

    const filteredData = lapakData
        .filter(item => item.nama.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(item => selectedCategory === 'Semua' || item.kategori === selectedCategory)
        .filter(item => selectedSubcategory === 'Semua' || item.subkategori === selectedSubcategory)
        .sort((a, b) => {
            if (sortBy === 'Terlaris') {
                return b.terjual - a.terjual;
            }
            // Tambahkan logika sorting lain jika perlu
            return 0;
        });

    const likeFunction = (item) => {
        // Check if an access token exists in local storage
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            // If no access token, show the login modal
            setShowLoginModal(true);
            return; // Stop the function here
        }

        // If access token exists, proceed with like/unlike logic
        const newLikedItems = new Set(likedItems); // Create a new Set to avoid direct state mutation

        if (newLikedItems.has(item.id)) {
            // If item is already liked, remove it
            newLikedItems.delete(item.id);
        } else {
            // If item is not liked, add it
            newLikedItems.add(item.id);
        }
        setLikedItems(newLikedItems); // Update the state with the new Set
    };

    const handleLoginSuccess = () => {
        // After successful login, you might want to re-check the liked status
        // or simply close the modal and let the user try liking again.
        // For this example, we just close the modal.
        setShowLoginModal(false);
        // You could also trigger a re-render or re-fetch liked items if they are user-specific from a backend.
    };


    return (
        <div className="">
            {setSelectedDetail && (
                <LapakDetailModal
                    detail={selectedDetail}
                    onClose={() => setSelectedDetail(null)}
                />
            )}
            {showLoginModal && (
                <LoginModal
                    onClose={() => setShowLoginModal(false)}
                    onLoginSuccess={handleLoginSuccess}
                    navigateTo={navigateTo} // Pass navigateTo if you want the modal to handle navigation after login
                />
            )}
            <div className="bg-gray-100 flex flex-col lg:flex-row gap-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar Filter */}
                        <aside className="w-full md:w-1/4 lg:w-1/5">
                            <div className="bg-white  p-4 rounded-lg shadow-md">
                                <h3 className="font-bold text-lg mb-4 ">Kategori</h3>
                                <ul>
                                    <li className="mb-2">
                                        <button onClick={() => { setSelectedCategory('Semua'); setSelectedSubcategory('Semua'); }} className={`w-full text-left px-2 py-1 rounded ${selectedCategory === 'Semua' ? 'text-red-600 font-bold' : 'dark:text-gray-300'}`}>Semua</button>
                                    </li>
                                    {Object.keys(kategoriLapak).map(kat => (
                                        <li key={kat} className="mb-2">
                                            <button onClick={() => { setSelectedCategory(kat); setSelectedSubcategory('Semua'); }} className={`w-full text-left px-2 py-1 rounded ${selectedCategory === kat ? 'text-red-600 font-bold' : 'dark:text-gray-300'}`}>{kat}</button>
                                            {selectedCategory === kat && (
                                                <ul className="pl-4 mt-1 border-l-2 border-red-200">
                                                    {kategoriLapak[kat].map(sub => (
                                                        <li key={sub}>
                                                            <button onClick={() => setSelectedSubcategory(sub)} className={`w-full text-left px-2 py-1 text-sm rounded ${selectedSubcategory === sub ? 'text-red-600 font-bold' : 'dark:text-gray-400'}`}>{sub}</button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Konten Utama */}
                        <section className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                            <main className="relative w-full md:w-fulllg:w-full">
                                <div className="mb-4">
                                    <div className="relative">
                                        <input type="text" placeholder="Cari di Lapak Markaz..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border  rounded-full bg-white " />
                                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between bg-white  p-3 rounded-lg shadow-sm mb-6">
                                    <p className="text-sm text-gray-600 ">{filteredData.length} produk ditampilkan</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600 ">Urutkan:</span>
                                        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-sm border-gray-300 rounded-md bg-white focus:ring-red-500 focus:border-red-500">
                                            <option>Paling Sesuai</option>
                                            <option>Terlaris</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {filteredData.map(product => (
                                        // <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
                                        <div key={product.id} product={product} onClick={() => handleProductClick(product)}
                                            className="rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                       
                                        >
                                            <img src={product.gambar?.[0]} alt={product.nama} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h4 className="text-md font-semibold text-gray-800  h-12">{product.nama}</h4>
                                                <p className="text-lg font-bold text-red-600  mt-2">Rp{product.harga.toLocaleString('id-ID')}</p>
                                                <div className="text-sm text-gray-500  mt-2">
                                                    <p>{product.lokasi}</p>
                                                    <div className="flex items-center mt-1"
                                                    // 
                                                    >
                                                        {likedItems.has(product.id) ? (
                                                            <Heart
                                                                className="w-4 h-4 text-red-400 cursor-pointer"
                                                                fill="currentColor"
                                                                stroke="red"
                                                                strokeWidth="0"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    likeFunction(product);
                                                                }}
                                                            />
                                                        ) : (
                                                            <Heart
                                                                className="w-4 h-4 text-gray-400 cursor-pointer"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                color="gray"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    likeFunction(product);
                                                                }}
                                                            />
                                                        )}
                                                        <span className="ml-1">{product.rating} | Disukai {product.terjual}+</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-700  mt-2 font-medium">{product.penjual}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {loading && (
                                    <div className="flex justify-center items-center py-8">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                        <p className="ml-4 text-lg text-gray-600">Memuat lebih banyak produk...</p>
                                    </div>
                                )}

                                {/* Sentinel element for Intersection Observer */}
                                {!loading && hasMore && (
                                    <div ref={sentinelRef} className="h-1 bg-transparent"></div>
                                )}

                                {/* Message when no more products */}
                                {!hasMore && products.length > 0 && (
                                    <div className="text-center py-8 text-gray-600 text-lg">
                                        Semua produk telah dimuat.
                                    </div>
                                )}
                                {!hasMore && products.length === 0 && (
                                    <div className="text-center py-8 text-gray-600 text-lg">
                                        Tidak ada produk yang ditemukan.
                                    </div>
                                )}
                                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredData.map(item => (
                                    <div key={item.id} className="rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 "
                                        onClick={() => setSelectedDetail(item)}
                                    >
                                        <img src={item.gambar?.[0]} alt={item.nama} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h4 className="text-md font-semibold text-gray-800  h-12">{item.nama}</h4>
                                            <p className="text-lg font-bold text-red-600  mt-2">Rp{item.harga.toLocaleString('id-ID')}</p>
                                            <div className="text-sm text-gray-500  mt-2">
                                                <p>{item.lokasi}</p>
                                                <div className="flex items-center mt-1"
                                                // 
                                                >
                                                    {likedItems.has(item.id) ? (
                                                        <Heart
                                                            className="w-4 h-4 text-red-400 cursor-pointer"
                                                            fill="currentColor"
                                                            stroke="red"
                                                            strokeWidth="0"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                likeFunction(item);
                                                            }}
                                                        />
                                                    ) : (
                                                        <Heart
                                                            className="w-4 h-4 text-gray-400 cursor-pointer"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            color="gray"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                likeFunction(item);
                                                            }}
                                                        />
                                                    )}
                                                    <span className="ml-1">{item.rating} | Disukai {item.terjual}+</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-700  mt-2 font-medium">{item.penjual}</p>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                            </main>
                        </section>
                        {/* Product Detail Modal */}
                        {isModalOpen && selectedProduct && (
                            <LapakDetailModal product={selectedProduct} onClose={closeModal} />
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};