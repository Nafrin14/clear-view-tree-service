import MainLayout from "../layouts/MainLayout";
import servicesHero from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import emergencyTree from "../assets/images/emergency-tree.webp";
import landClearing from "../assets/images/land-clearing.webp";
import stormCleanup from "../assets/images/storm-cleanup.webp";

const services = [
  {
    title: "Tree Removal",
    image: servicesHero,
    description:
      "Safe and efficient removal of hazardous, damaged, or unwanted trees.",
  },
  {
    title: "Tree Trimming",
    image: treeTrimming,
    description:
      "Professional trimming to improve the health, safety, and appearance of your trees.",
  },
  {
    title: "Stump Grinding",
    image: stumpGrinding,
    description:
      "Complete stump grinding services for a clean and attractive landscape.",
  },
  {
    title: "Emergency Tree Service",
    image: emergencyTree,
    description:
      "24/7 emergency tree removal and storm damage response when you need it most.",
  },
  {
    title: "Land Clearing",
    image: landClearing,
    description:
      "Efficient land clearing for residential and commercial properties.",
  },
  {
    title: "Storm Cleanup",
    image: stormCleanup,
    description:
      "Fast cleanup of fallen trees, branches, and debris after severe storms.",
  },
];

function Services() {
  return (
    <MainLayout>
      {/* Services Hero Section */}
      <section className="relative flex h-[45vh] min-h-[430px] items-center overflow-hidden md:h-[50vh]">
        <img
          src={servicesHero}
          alt="Professional tree services in Syracuse"
          width="1536"
          height="1024"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 text-white">
          <span className="inline-block rounded-full bg-green-600 px-5 py-2 text-sm font-semibold uppercase tracking-wide">
            Our Tree Services
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Safe & Reliable Tree Care Services
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Professional tree removal, trimming, stump grinding, emergency
            service, land clearing, and storm cleanup throughout Syracuse.
          </p>
        </div>
      </section>
      {/* Services Section */}
<section className="bg-white pt-16 pb-4 md:pt-20 md:pb-6">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-green-700">
        What We Offer
      </span>

      <h2 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">
        Professional Tree Care Services
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
        We provide reliable, safe, and affordable tree care solutions for
        residential and commercial properties throughout Syracuse.
      </p>
    </div>
<div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service) => (
   <div
  key={service.title}
  className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
      <img
        src={service.image}
        alt={service.title}
        width="1536"
        height="1024"
        loading="lazy"
        className="h-64 w-full object-cover"
      />

     <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {service.title}
        </h3>

       <p className="mt-4 flex-1 leading-7 text-gray-600">
  {service.description}
</p>

       <button
  type="button"
  className="mt-6 self-start rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-700"
>
  Learn More
</button>
      </div>
    </div>
  ))}
</div>
  </div>
</section>
{/* Our Process Section */}
<section className="bg-gray-50 pt-8 pb-16 md:pt-10 md:pb-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="text-center">
      <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-green-700">
        Our Process
      </span>

      <h2 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">
        Simple & Hassle-Free Tree Service
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
        From your first call to the final cleanup, we make every step easy,
        safe, and stress-free.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-3">
      {/* Step 1 */}
      <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
          1
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Request a Free Estimate
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Contact our team to schedule a free estimate. We assess your tree
          care needs and provide a clear, honest quote.
        </p>
      </div>

      {/* Step 2 */}
      <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
          2
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Professional Tree Service
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          Our skilled team completes every project safely using professional
          equipment and proven tree care techniques.
        </p>
      </div>

      {/* Step 3 */}
      <div className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
          3
        </div>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          Complete Cleanup
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          We leave your property clean and tidy, ensuring you're completely
          satisfied before we finish the job.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Emergency CTA */}
<section className="bg-green-700 py-16">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center text-white lg:flex-row lg:text-left">

    <div>
      <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase">
        24/7 Emergency Service
      </span>

      <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
        Need Emergency Tree Service?
      </h2>

      <p className="mt-4 max-w-2xl text-lg text-green-100">
        Storm damage or fallen trees? Our experienced team is ready to respond
        quickly and safely whenever you need us.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="/contact"
        className="rounded-full bg-white px-8 py-4 font-bold text-green-700 transition hover:bg-green-100"
      >
        Get Free Estimate
      </a>

      <a
        href="tel:+13150000000"
        className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-700"
      >
        Call Now
      </a>
    </div>

  </div>
</section>
  
    </MainLayout>
  );
}

export default Services;