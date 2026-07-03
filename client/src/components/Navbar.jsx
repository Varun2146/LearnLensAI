import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-slate-700 bg-slate-900/90 dark:bg-slate-900">

      <div className="container-custom flex items-center justify-between h-16">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-blue-500"
        >
          LearnLens AI
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-slate-300 hover:text-blue-400 transition"
          >
            Home
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-slate-800 hover:bg-slate-700 rounded-full p-3 transition"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-white" />
            )}
          </button>

        </div>

        {/* Mobile Controls */}

        <div className="flex md:hidden items-center gap-3">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-slate-800 rounded-full p-2"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-white" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-slate-800 rounded-lg p-2"
          >
            {menuOpen ? (
              <FaTimes className="text-white text-xl" />
            ) : (
              <FaBars className="text-white text-xl" />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden border-t border-slate-700 bg-slate-900 px-6 py-5">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-slate-300 hover:text-blue-400"
          >
            🏠 Home
          </Link>

        </div>

      )}

    </nav>
  );
}