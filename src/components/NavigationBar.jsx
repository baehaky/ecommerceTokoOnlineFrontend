import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LogoNavbar from "../assets/putrihomecooking.png";
import Footer from "./Footer";

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white w-full z-20 top-0 border-b shadow-lg border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse md:w-[350px] "
          >
            <img src={LogoNavbar} className="h-14 md:h-20" alt="Logo" />
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap flex flex-col">
              Putri Home Cooking
              <span className="h-[2px] bg-rose-600 "></span>
              <span className="text-xs text-rose-700 font-normal">
                Usaha Mikro Kecil Menengah (UMKM) <br /> Kuliner Desa Legok,
                Tangerang, Banten
              </span>
            </span>
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Mobile menu */}
          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } md:hidden w-full flex-col mt-4`}
          >
            <hr />
            <NavLink
              to="/"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-rose-800 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                  : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="menu"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-rose-800 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                  : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="about"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-rose-800 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                  : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
              }
            >
              About
            </NavLink>
            <NavLink
              to="contact"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-rose-800 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                  : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
              }
            >
              Contact
            </NavLink>
            <button
              type="button"
              className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Sign-Up
            </button>
          </div>

          {/* Desktop menu */}
          <div className="items-center justify-center hidden w-full md:flex md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-rose-800 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                      : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="menu"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-rose-800 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                      : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-rose-800 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                      : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-rose-800 font-bold underline rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                      : " block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0"
                  }
                >
                  Help
                </NavLink>
              </li>
              <li></li>
            </ul>
            <button
              type="button"
              className="text-white bg-rose-700 hover:bg-rose-800 font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign-Up
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer/>
    </>
  );
}
