import { useState } from "react";
import { MenuIcon, XIcon } from "./Icon";

export const Navbar = ({ navigateTo, currentPage, showAdminLink }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { id: 'home', text: 'Beranda', view: true },
        { id: 'profil', text: 'Profil', view: true },
        { id: 'kegiatan', text: 'Program', view: true },
        { id: 'kajian', text: 'Info Kajian', view: true },
        { id: 'admin', text: 'Admin', view: showAdminLink }
    ];

    const handleClickNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const linkClasses = (pageId) => `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${currentPage === pageId ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-red-600 hover:text-white'}`;
    const mobileLinkClasses = (pageId) => `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${currentPage === pageId ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-red-600 hover:text-white'}`;
    return (
        <nav className="bg-white backdrop-blur-md shadow-md bg-transparent sticky top-0 z-40">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <button onClick={() => navigateTo('home')} className="flex items-center space-x-3">
                            <img src="../src/assets/logo_markaz_copy.png" alt="Logo Markazul Lughoh" className="h-28 w-48" />
                            {/* <span className="text-xl font-bold text-red-800 hidden sm:block">Markazul Lughoh</span> */}
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => (
                                link.view &&
                                <button key={link.id} onClick={() => navigateTo(link.id)} className={linkClasses(link.id)}>
                                    {link.text}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={handleClickNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-red-600 focus:outline-none">
                            <span className="sr-only">Buka menu</span>
                            {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            link.view &&
                            <button key={link.id} onClick={() => { navigateTo(link.id); setIsMenuOpen(false); }} className={mobileLinkClasses(link.id) + ' w-full text-left'}>
                                {link.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};