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
          <Link to="/" className="text-2xl font-bold text-green-300">
            Clear View Tree Service
          </Link>

          <p className="mt-5 leading-8 text-gray-200">
            Professional tree removal, trimming, stump grinding, emergency
            tree service, and land clearing in Syracuse and nearby areas.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-green-700"
            >
              <FaFacebookF aria-hidden="true" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-green-700"
            >
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Quick Links</h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-200">
            <Link to="/" className="transition hover:text-green-300">
              Home
            </Link>
            <Link to="/about" className="transition hover:text-green-300">
              About
            </Link>
            <Link to="/services" className="transition hover:text-green-300">
              Services
            </Link>
            <Link to="/blog" className="transition hover:text-green-300">
              Blog
            </Link>
            <Link to="/contact" className="transition hover:text-green-300">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Our Services</h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-200">
            <span>Tree Removal</span>
            <span>Tree Trimming</span>
            <span>Stump Grinding</span>
            <span>Emergency Tree Service</span>
            <span>Land Clearing</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Contact Us</h3>

          <div className="mt-6 space-y-5 text-gray-200">
            <a
              href="tel:+13158649003"
              className="flex items-start gap-3 transition hover:text-green-300"
            >
              <FaPhoneAlt
                aria-hidden="true"
                className="mt-1 shrink-0 text-green-300"
              />
              <span>315-864-9003</span>
            </a>

            <a
              href="mailto:info@clearviewtreeservice.com"
              className="flex items-start gap-3 transition hover:text-green-300"
            >
              <FaEnvelope
                aria-hidden="true"
                className="mt-1 shrink-0 text-green-300"
              />
              <span> </span>
            </a>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt
                aria-hidden="true"
                className="mt-1 shrink-0 text-green-300"
              />
              <span>Syracuse, New York</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-200 md:flex-row">
          <p>
            © {new Date().getFullYear()} Clear View Tree Service. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-gray-200 transition hover:text-green-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-200 transition hover:text-green-300"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;