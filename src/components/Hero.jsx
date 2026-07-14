import heroImage from "../assets/images/hero.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Clear View Tree Service"
        width="1920"
        height="1080"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
     <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">
        <span className="inline-block bg-green-600 px-5 py-2 rounded-full text-sm font-semibold mb-6">
          Professional Tree Care Services
        </span>

       <h1 className="max-w-2xl text-5xl md:text-7xl font-extrabold leading-tight text-white">
          Safe & Reliable Tree Services in Syracuse
        </h1>

       <p className="mt-8 max-w-xl text-lg md:text-xl text-gray-200 leading-9">
          Clear View Tree Service provides professional tree removal,
          tree trimming, stump grinding and emergency tree services with
          safety, quality and customer satisfaction.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold transition"
          >
            Get Free Estimate
          </Link>

         <a
  href="tel:+13150000000"
  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-800 transition"
>
  Call Now
</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;