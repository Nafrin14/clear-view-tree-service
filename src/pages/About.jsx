import MainLayout from "../layouts/MainLayout";
import aboutHero from "../assets/images/about-hero.webp";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  const highlights = [
    "Licensed & Insured",
    "Free Estimates",
    "24/7 Emergency Service",
    "Customer Satisfaction",
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative flex h-[45vh] min-h-[430px] items-center overflow-hidden md:h-[50vh]">
        <img
          src={aboutHero}
          alt="Clear View Tree Service professionals"
          width="1536"
          height="1024"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 text-white">
          <span className="inline-block rounded-full bg-green-600 px-5 py-2 text-sm font-semibold uppercase tracking-wide">
            About Clear View Tree Service
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Professional Tree Care Experts
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Dedicated to providing safe, reliable, and affordable tree
            services with experienced professionals and excellent customer
            care.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-green-700">
              Our Story
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              Dedicated to Safe & Professional Tree Care
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Clear View Tree Service has proudly served homeowners and
              businesses throughout Syracuse with reliable tree care
              solutions. Our experienced team is committed to protecting your
              property while improving the beauty and health of your landscape.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Whether you need tree removal, trimming, stump grinding,
              emergency services, or land clearing, we complete every project
              with safety, professionalism, and attention to detail.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 font-medium text-gray-800"
                >
                  <FaCheckCircle className="shrink-0 text-xl text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="group overflow-hidden rounded-3xl shadow-xl">
            <img
              src={aboutHero}
              alt="Clear View Tree Service team working"
              width="1536"
              height="1024"
              loading="lazy"
              className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[380px] lg:h-[430px]"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default About;