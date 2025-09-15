import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "./Icon";
import { Link, Route, useLocation } from "react-router-dom";
import { PageNotFoundPage } from "../views/PageNotFoundPage";

export const Navbar = ({ navigateTo, currentPage1, showAdminLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { to: "/", id: "home", text: "Beranda", view: true },
    {
      to: "/tentang-kami",
      id: "tentang-kami",
      text: "Tentang Kami",
      view: true,
    },
    { to: "/kegiatan", id: "kegiatan", text: "Program", view: true },
    { to: "/info-kajian", id: "info-kajian", text: "Info Kajian", view: true },
    {
      to: "/lapak-markaz",
      id: "lapak-markaz",
      text: "Lapak Markaz",
      view: true,
    },
    { to: "/admin", id: "admin", text: "Admin", view: showAdminLink },
  ];

  const handleClickNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const path = location.pathname;
  var currentPage = path.split("/")[1];
  console.log("Nilai:", currentPage);

  console.log("====================================");
  console.log(`navigate to : ${navigateTo}`);
  console.log(`current page : ${currentPage}`);
  console.log(`show admin : ${showAdminLink}`);
  console.log("====================================");

  navLinks.forEach((link) => {
    console.log("Current id:", link.id);
    console.log("Current to:", link.to);
    console.log("current page:", currentPage);
    if (currentPage === "") {
      currentPage = "home";
    }
    if (link.id === currentPage) {
      console.log("Current Page:", link);
    }

    if (currentPage != link.id) {
      return (
        <Route
          key={link.id}
          path={link.to}
          element={<PageNotFoundPage/>}
        ></Route>
      );
    }
  });

  useEffect(() => {
    document.title = `Markazul Lughoh | ${
      currentPage.charAt(0).toUpperCase() + currentPage.slice(1)
    }`;
    window.scrollTo(0, 0);
    // console.log("currentPage  : ", currentPage);
  }, [currentPage]);

  const linkClasses = (pageId) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      currentPage === pageId
        ? "bg-red-700 text-white"
        : "text-gray-700 hover:bg-red-600 hover:text-white"
    }`;
  const mobileLinkClasses = (pageId) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      currentPage === pageId
        ? "bg-red-700 text-white"
        : "text-gray-700 hover:bg-red-600 hover:text-white"
    }`;
  return (
    <nav className="bg-white backdrop-blur-md shadow-md bg-transparent sticky top-0 z-40">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to={"/"}
              onClick={() => navigateTo("home")}
              className="flex items-center space-x-3"
            >
              <img
                src="/logo_markaz.png"
                alt="Logo Markazul Lughoh"
                className="h-38 w-48"
              />
              {/* <span className="text-xl font-bold text-red-800 hidden sm:block">Markazul Lughoh</span> */}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(
                (link) =>
                  link.view && (
                    <Link
                      to={link.to}
                      key={link.id}
                      onClick={() => navigateTo(link.id)}
                      className={linkClasses(link.id)}
                    >
                      {link.text}
                    </Link>
                  )
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleClickNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-red-600 focus:outline-none"
            >
              <span className="sr-only">Buka menu</span>
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(
              (link) =>
                link.view && (
                  <Link
                    to={link.to}
                    key={link.id}
                    onClick={() => {
                      navigateTo(link.id);
                      setIsMenuOpen(false);
                    }}
                    className={mobileLinkClasses(link.id) + " w-full text-left"}
                  >
                    {link.text}
                  </Link>
                )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
