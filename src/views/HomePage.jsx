// --- Komponen Halaman (Tidak berubah) ---
import { BuildingIcon, CalendarDaysIcon, SchoolIcon } from '../components/Icon';
import { dataKajian, dataKegiatan, dataPesantren } from '../datas/data';



export const HomePage = ({ navigateTo }) => (
    <div>
        <div className="relative bg-red-500 text-white py-20 sm:py-32">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">Selamat Datang di</h1>
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-300 mb-6 animate-fade-in-up">{dataPesantren.nama}</h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">{dataPesantren.visi}</p>
                <button onClick={() => navigateTo('profil')} className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                    Mengenal Kami
                </button>
            </div>
        </div>
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <BuildingIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Lembaga Terpercaya</h3>
                        <p className="text-gray-600">Pusat pendidikan Al-Qur'an dan Bahasa Arab di Jakarta Selatan.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <CalendarDaysIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Program Beragam</h3>
                        <p className="text-gray-600">Menyediakan kelas reguler, intensif, dauroh, online, dan offline.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <SchoolIcon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Visi Jelas</h3>
                        <p className="text-gray-600">Mencetak kader da'i dan penghafal Al-Qur'an yang mahir berbahasa Arab.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-2 text-red-800">Program Unggulan</h2>
                <p className="text-center text-gray-600 mb-10">Beberapa program utama yang kami tawarkan.</p>
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-red-100">
                    <div className="p-8">
                        <div className="tracking-wide text-sm text-red-600 font-semibold">{dataKegiatan[0].nama}</div>
                        <h3 className="block mt-1 text-2xl leading-tight font-bold text-black">Fokus Penguasaan Bahasa Arab</h3>
                        <p className="mt-4 text-gray-500">{dataKegiatan[0].deskripsi}</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button onClick={() => navigateTo('kegiatan')} className="text-red-600 font-semibold hover:underline">
                        Lihat Semua Program &rarr;
                    </button>
                </div>
            </div>
        </div>
    </div>
);