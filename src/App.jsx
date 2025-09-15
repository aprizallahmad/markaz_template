import React, { useState, useEffect, useRef, use } from "react";
import { HomePage } from "./views/HomePage";
import {
  dataKajian,
  dataKegiatan,
  dataPesantren,
  strukturOrganisasi,
} from "./datas/data";
import { KajianPage } from "./views/KajianPage";
import { ProfilPage } from "./views/ProfilePage";
import { KegiatanPage } from "./views/KegiatanPage";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/ChatBot";
import { AdminPage } from "./views/AdminPage";
import { LapakPage } from "./views/LapakPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageNotFoundPage } from "./views/PageNotFoundPage";

// --- Komponen Utama Aplikasi ---
export default function App() {
  const [articles, setArticles] = useState();
  const [currentPage, setCurrentPage] = useState("home");
  const [showAdminLink, setShowAdminLink] = useState(false);

  const handleLogout = () => {
    setShowAdminLink(false);
    setCurrentPage("home");
  };

  // useEffect(() => {
  //   document.title = `Markazul Lughoh | ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)
  //     }`;
  //   window.scrollTo(0, 0);
  //   // console.log("currentPage  : ", currentPage);

  //   if (currentPage == "home") getArticles();
  // }, [currentPage]);

  // async function getArticles() {
  //   // const { data } = await supabase
  //   //     .from('instruments').select()
  //   // .select(
  //   //     `*,
  //   //     guru (*),
  //   //     mata_pelajaran (*)`
  //   // )
  //   // console.log("getArticles articles data : ", data);
  //   // setArticles(data)
  // }
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "tentang-kami":
        return (
          <ProfilPage
            dataPesantren={dataPesantren}
            strukturOrganisasi={strukturOrganisasi}
          />
        );
      case "info-kajian":
        return <KajianPage dataKajian={dataKajian} />;
      case "kegiatan":
        return <KegiatanPage dataKegiatan={dataKegiatan} />;
      case "lapak":
        return <LapakPage navigateTo={navigateTo} />;
      case "admin":
        return showAdminLink ? (
          <AdminPage handleLogout={handleLogout} />
        ) : (
          <HomePage
            navigateTo={navigateTo}
            dataKegiatan={dataKegiatan}
            dataPesantren={dataPesantren}
          />
        );
      case "home":
      default:
        return (
          <HomePage
            navigateTo={navigateTo}
            dataKegiatan={dataKegiatan}
            dataPesantren={dataPesantren}
          />
        );
    }
  };
  return (
    <Router>
      <div className="bg-white font-sans flex flex-col min-h-screen">
        <Navbar
          navigateTo={navigateTo}
          currentPage={currentPage}
          showAdminLink={showAdminLink}
        />
        {/* <main className="flex-grow">{renderPage()}</main> */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  navigateTo={navigateTo}
                  dataKegiatan={dataKegiatan}
                  dataPesantren={dataPesantren}
                />
              }
            />
            <Route
              path="/tentang-kami"
              element={
                <ProfilPage
                  dataPesantren={dataPesantren}
                  strukturOrganisasi={strukturOrganisasi}
                />
              }
            />
            <Route
              path="/info-kajian"
              element={<KajianPage dataKajian={dataKajian} />}
            />
            <Route
              path="/kegiatan"
              element={<KegiatanPage dataKegiatan={dataKegiatan} />}
            />
            <Route
              path="/lapak-markaz"
              element={<LapakPage navigateTo={navigateTo} />}
            />
            <Route
              path="/admin"
              element={
                showAdminLink ? (
                  <AdminPage handleLogout={handleLogout} />
                ) : (
                  <HomePage
                    navigateTo={navigateTo}
                    dataKegiatan={dataKegiatan}
                    dataPesantren={dataPesantren}
                  />
                )
              }
            />
            <Route path="*" element={<PageNotFoundPage />} />
          </Routes>
        </main>
        <Footer dataPesantren={dataPesantren} />
        <Chatbot
          setShowAdminLink={setShowAdminLink}
          dataPesantren={dataPesantren}
        />
      </div>
    </Router>
  );
}
