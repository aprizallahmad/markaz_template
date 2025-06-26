import { dataPesantren } from "../datas/data";


export const ProfilPage = () => (
    <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-center mb-12 text-red-800">Profil Markazul Lughoh</h1>
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-bold text-red-700 mb-4">Sejarah & Cita-Cita</h2>
                <p className="text-gray-700 leading-relaxed">{dataPesantren.sejarah}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-red-700 mb-4">Visi</h2>
                    <p className="text-gray-700 leading-relaxed">{dataPesantren.visi}</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-red-700 mb-4">Misi</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                        {dataPesantren.misi.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-700 mb-4">Pimpinan</h2>
                <img src="https://placehold.co/150x150/e0e0e0/333333?text=Foto" alt="Foto Pimpinan" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-200" />
                <h3 className="text-xl font-semibold text-gray-800">{dataPesantren.pimpinan}</h3>
                <p className="text-red-600">Pimpinan & Pengasuh Utama</p>
            </div>
        </div>
    </div>
);