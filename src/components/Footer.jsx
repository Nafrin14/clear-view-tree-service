import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="text-2xl font-bold text-green-400">
            Clear View Tree Service
          </Link>

          <p className="mt-5 leading-8 text-gray-400">
            Professional tree removal, trimming, stump grinding, emergency
            tree service, and land clearing in Syracuse and nearby areas.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-700"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-700"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-400">
            <Link to="/" className="transition hover:text-green-400">
              Home
            </Link>
            <Link to="/about" className="transition hover:text-green-400">
              About
            </Link>
            <Link to="/services" className="transition hover:text-green-400">
              Services
            </Link>
            <Link to="/blog" className="transition hover:text-green-400">
              Blog
            </Link>
            <Link to="/contact" className="transition hover:text-green-400">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Our Services</h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-400">
            <span>Tree Removal</span>
            <span>Tree Trimming</span>
            <span>Stump Grinding</span>
            <span>Emergency Tree Service</span>
            <span>Land Clearing</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>

          <div className="mt-6 space-y-5 text-gray-400">
            <a
              href="tel:+13150000000"
              className="flex items-start gap-3 transition hover:text-green-400"
            >
              <FaPhoneAlt className="mt-1 text-green-400" />
              <span>315-864-9003</span>
            </a>

            <a
              href="mailto:info@clearviewtreeservice.com"
              className="flex items-start gap-3 transition hover:text-green-400"
            >
              <FaEnvelope className="mt-1 text-green-400" />
              <span>info@clearviewtreeservice.com</span>
            </a>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-green-400" />
              <span>Syracuse, New York</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Clear View Tree Service. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="transition hover:text-green-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-green-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;