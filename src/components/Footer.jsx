import { dataPesantren } from "../datas/data";
import { InstagramIcon } from "./Icon";


export const Footer = () => (
    <footer className="bg-red-800 text-white">
        <div className="container mx-auto px-6 py-8">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-lg font-bold mb-2">{dataPesantren.nama}</h3>
                    <p className="text-red-200">{dataPesantren.lokasi}</p>
                    <p className="text-red-200">Email: {dataPesantren.email}</p>
                    <p className="text-red-200">Telp: {dataPesantren.kontak}</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Tautan Cepat</h3>
                    <ul className="text-red-200">
                        <li><a href="#/profil" className="hover:text-yellow-300">Pendaftaran</a></li>
                        <li><a href="#/profil" className="hover:text-yellow-300">Donasi & Wakaf</a></li>
                        <li><a href="#/kegiatan" className="hover:text-yellow-300">Galeri</a></li>
                        <li><a href="#/profil" className="hover:text-yellow-300">Kontak Kami</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Ikuti Kami</h3>
                    <p className="text-red-200 mb-3">Dapatkan update terbaru dari kegiatan kami melalui media sosial.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href={dataPesantren.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-red-200 hover:text-yellow-300">
                            <InstagramIcon className="w-6 h-6" />
                            <span className="sr-only">Instagram Pesantren</span>
                        </a>
                        <a href={dataPesantren.socialMedia.pimpinanInstagram} target="_blank" rel="noopener noreferrer" className="text-red-200 hover:text-yellow-300">
                            <InstagramIcon className="w-6 h-6" />
                            <span className="sr-only">Instagram Pimpinan</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-red-700 text-center text-red-300 text-sm">
                <p>&copy; {new Date().getFullYear()} {dataPesantren.nama}. All rights reserved.</p>
            </div>
        </div>
    </footer>
);