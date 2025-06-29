export const KajianPage = ({dataKajian}) => (
    <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-2 text-red-800">Info Kajian & Program</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Jadwal bersifat fleksibel. Untuk informasi terbaru dan pendaftaran, silakan hubungi kontak kami.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dataKajian.map((kajian, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-l-4 border-red-500">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{kajian.tema}</h2>
                            <p className="text-red-700 font-semibold mb-4">{kajian.pemateri}</p>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p><span className="font-semibold">Hari/Tgl:</span> {kajian.tanggal || kajian.hari}</p>
                                <p><span className="font-semibold">Waktu:</span> {kajian.waktu}</p>
                                <p><span className="font-semibold">Tempat:</span> {kajian.lokasi}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);