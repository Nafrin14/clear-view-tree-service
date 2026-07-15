import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo1.webp";

function Navbar() {
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
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 md:py-4">
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
      </div>
    </header>
  );
}

export default Navbar;