
export const KegiatanPage = ({dataKegiatan}) => (
    <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-2 text-red-800">Program & Kegiatan</h1>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Kami menyediakan berbagai program yang dirancang untuk memenuhi kebutuhan umat dalam mempelajari Al-Qur'an dan Bahasa Arab.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dataKegiatan.map((kegiatan, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                        <img src={kegiatan.gambar} alt={kegiatan.nama} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{kegiatan.nama}</h2>
                            <p className="text-gray-600 leading-relaxed">{kegiatan.deskripsi}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);