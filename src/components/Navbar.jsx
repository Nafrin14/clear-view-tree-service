import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/logo1.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `relative py-2 px-1 font-medium text-sm lg:text-base transition-colors duration-300
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full
    after:bg-green-600 after:transition-all after:duration-300
    ${
      isActive
        ? "text-green-700 after:w-full"
        : "text-gray-600 after:w-0 hover:text-green-700 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 md:py-1">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group transition-transform hover:scale-[1.02]">
          <img
            src={logo}
            alt="Clear View Tree Service"
            width="96"
            height="96"
            className="h-24 w-24 object-contain drop-shadow-sm transition-transform duration-300 group-hover:rotate-3"
          />

          <div className="flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-green-800 tracking-tight">
              Clear View Tree Service
            </h1>
            <p className="mt-0.5 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
              Professional Tree Care
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* CTA Button */}
       <Link
  to="/contact"
  className="hidden items-center justify-center rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-700/30 active:translate-y-0 md:inline-flex"
>
  Free Estimate
</Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-gray-700 hover:text-green-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] border-t border-gray-100 bg-white/95 backdrop-blur-md shadow-md" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          <NavLink to="/" end className="text-gray-800 font-medium hover:text-green-700" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="text-gray-800 font-medium hover:text-green-700" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" className="text-gray-800 font-medium hover:text-green-700" onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/blog" className="text-gray-800 font-medium hover:text-green-700" onClick={closeMenu}>
            Blog
          </NavLink>
          <NavLink to="/contact" className="text-gray-800 font-medium hover:text-green-700" onClick={closeMenu}>
            Contact
          </NavLink>
          <div className="pt-2">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-green-800"
              onClick={closeMenu}
            >
              Free Estimate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;