import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaAward,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

import aboutImage from "../assets/images/about-team.webp";

function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative">
          <img
            src={aboutImage}
            alt="Clear View Tree Service Team"
            className="rounded-3xl shadow-2xl"
            loading="lazy"
          />

          <div className="absolute -bottom-8 -right-8 bg-green-700 text-white rounded-2xl px-8 py-6 shadow-xl">
           <p className="text-4xl font-bold">15+</p>
<p>Years Experience</p>
          </div>
        </div>

        <div>
          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            ABOUT US
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight">
            Professional Tree Care You Can Trust
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Clear View Tree Service provides professional tree removal,
            trimming, stump grinding, land clearing and emergency tree
            services. Our experienced team is committed to delivering
            safe, affordable and reliable solutions for every customer.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">

            <div className="flex gap-4">
              <FaShieldAlt className="text-3xl text-green-700 mt-1" />
              <div>
               <h3 className="font-bold">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Complete protection for your property.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaClock className="text-3xl text-green-700 mt-1" />
              <div>
               <h3 className="font-bold">24/7 Emergency</h3>
                <p className="text-gray-600">
                  Fast emergency response.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaAward className="text-3xl text-green-700 mt-1" />
              <div>
               <h3 className="font-bold">Experienced Team</h3>
                <p className="text-gray-600">
                  Skilled tree care professionals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaCheckCircle className="text-3xl text-green-700 mt-1" />
              <div>
               <h3 className="font-bold">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Quality work on every project.
                </p>
              </div>
            </div>

          </div>

          <Link
            to="/about"
            className="inline-block mt-10 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold transition"
          >
            Learn More About Us
          </Link>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;