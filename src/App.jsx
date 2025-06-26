import React, { useState, useEffect, useRef, use } from 'react';
import { supabase } from '../utils/supabase';
// Hapus: import { GoogleGenerativeAI } from "@google/generative-ai";
import { 
    MenuIcon, 
    XIcon, 
    BuildingIcon, 
    CalendarDaysIcon, 
    SchoolIcon, 
    MessageCircleIcon, 
    SendIcon, 
    InstagramIcon, 
    PaperclipIcon, 
    FileTextIcon, 
    LogOutIcon,
    BookTextIcon, 
    PlusCircleIcon,
    EditIcon,
    Trash2Icon,
    UsersIcon,
    GraduationCapIcon,
    NewspaperIcon

} from './components/Icon';
import {HomePage} from './views/HomePage';
import { dataKajian, dataKegiatan, dataPesantren } from './datas/data';
import { KajianPage } from './views/KajianPage';
import { ProfilPage } from './views/ProfilePage';
import { KegiatanPage } from './views/KegiatanPage';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/ChatBot';
import { AdminPage } from './views/AdminPage';


// --- Komponen Utama Aplikasi ---
export default function App() {
    const [articles, setArticles] = useState()
    const [currentPage, setCurrentPage] = useState('home');
    const [showAdminLink, setShowAdminLink] = useState(false);

    const handleLogout = () => {
        setShowAdminLink(false);
        setCurrentPage('home');
      };

    useEffect(() => {
        document.title = `Markazul Lughoh | ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`;
        window.scrollTo(0, 0);
        console.log("currentPage  : ", currentPage);

        if (currentPage == 'home') getArticles()
    }, [currentPage]);

    async function getArticles() {
        const { data } = await supabase
            .from('instruments').select()
        // .select(
        //     `*, 
        //     guru (*), 
        //     mata_pelajaran (*)`
        // )
        console.log("getArticles articles data : ", data);

        setArticles(data)
    }
    const navigateTo = (page) => {
        setCurrentPage(page);
    };



    const renderPage = () => {
        switch (currentPage) {
            case 'profil':
                return <ProfilPage />;
            case 'kajian':
                return <KajianPage />;
            case 'kegiatan':
                return <KegiatanPage />;
            case 'admin':
                return showAdminLink ? <AdminPage handleLogout={handleLogout} /> : <HomePage navigateTo={navigateTo}  />;
            case 'home':
            default:
                return <HomePage navigateTo={navigateTo} />;
        }
    };
    return (
        <div className="bg-white font-sans">
            <Navbar navigateTo={navigateTo} currentPage={currentPage} showAdminLink={showAdminLink} />
            <main>
                {renderPage()}
            </main>
            <Footer />
            <Chatbot setShowAdminLink={setShowAdminLink} />
        </div>
    );
}
