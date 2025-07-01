import { StarIcon } from "lucide-react";
import { XIcon } from "./Icon";
import { useState } from "react";

export const LapakDetailModal = ({ product, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % product.gambar.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + product.gambar.length) % product.gambar.length
        );
    };

    // Function to open Google Maps
    const openGoogleMaps = () => {
        if (product.latitude && product.longitude) {
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${product.latitude},${product.longitude}`;
            window.open(mapUrl, '_blank');
        } else {
            // You can replace this with a custom modal message if preferred
            console.warn("Koordinat lokasi tidak tersedia untuk produk ini.");
            alert("Koordinat lokasi tidak tersedia."); // Using alert for simplicity, consider custom modal
        }
    };

    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 focus:outline-none z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    {/* Image Slider Section */}
                    <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        {product.gambar && product.gambar.length > 0 ? (
                            <>
                                <img 
                                    src={product.gambar[currentImageIndex]} 
                                    alt={`Product image ${currentImageIndex + 1}`} 
                                    className="w-full h-full object-contain" // Use object-contain to prevent cropping
                                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/000000?text=Gambar+Tidak+Tersedia"; }}
                                />
                                {product.gambar.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 focus:outline-none"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 focus:outline-none"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </>
                        ) : (
                            <p className="text-gray-500">Tidak ada gambar tersedia.</p>
                        )}
                    </div>

                    {/* Product Details Section */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.nama}</h2>
                            <p className="text-2xl font-extrabold text-blue-600 mb-4">Rp{product.harga.toLocaleString('id-ID')}</p>
                            
                            <div className="mb-4 text-gray-700">
                                <p><strong className="font-semibold">Kategori:</strong> {product.kategori}</p>
                                <p><strong className="font-semibold">Subkategori:</strong> {product.subkategori}</p>
                                <p><strong className="font-semibold">Terjual:</strong> {product.terjual}</p>
                                <p className="flex items-center">
                                    <strong className="font-semibold mr-1">Rating:</strong> {product.rating}
                                    <svg className="w-5 h-5 ml-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                                    </svg>
                                </p>
                                <p><strong className="font-semibold">Penjual:</strong> {product.penjual}</p>
                                <p><strong className="font-semibold">Lokasi:</strong> {product.lokasi}</p>
                                <p>
  <strong className="font-semibold">Hubungi:</strong>{" "}
  {/* Menggunakan Anchor <a> tag untuk link */}
  <a
    // Format URL WhatsApp API
    // Ganti 'nomorHP' dengan {product.no_hp}
    // Hapus karakter non-angka seperti spasi, tanda kurung, atau strip dari nomor HP jika ada
    href={`https://wa.me/${product.no_hp?.replace(/\D/g, '')}`} 
    target="_blank" // Membuka link di tab/jendela baru
    rel="noopener noreferrer" // Praktik keamanan yang baik untuk target="_blank"
    className="text-blue-600 hover:underline" // Tambahkan styling Tailwind untuk link
  >
    {product.no_hp}
  </a>
</p>
                            </div>
                            <p className="text-gray-800 mb-4">{product.description}</p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            
                            {product.latitude && product.longitude && (
                                <button
                                    onClick={openGoogleMaps}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    Lihat Lokasi di Google Maps
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
