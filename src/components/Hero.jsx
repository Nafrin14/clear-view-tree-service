import heroImage from "../assets/images/hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background Image */}
      <img
  src={heroImage}
  alt="Professional tree service in Syracuse"
  width="1280"
  height="720"
  loading="eager"
  fetchPriority="high"
  decoding="async"
  className="absolute inset-0 h-full w-full object-cover"
/>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <span className="mb-6 inline-block rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white">
          Professional Tree Care Services
        </span>

        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Safe & Reliable Tree Services in Syracuse
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-9 text-gray-200 md:text-xl">
          Clear View Tree Service provides professional tree removal, tree
          trimming, stump grinding and emergency tree services with safety,
          quality and customer satisfaction.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
          >
            Get Free Estimate
          </Link>

          <a
            href="tel:+13150000000"
            className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-800"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;