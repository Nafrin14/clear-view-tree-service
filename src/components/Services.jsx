import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import emergencyTree from "../assets/images/emergency-tree.webp";
import landClearing from "../assets/images/land-clearing.webp";
import stormCleanup from "../assets/images/storm-cleanup.webp";
import { Link } from "react-router-dom";

const services = [
  {
    image: treeRemoval,
    title: "Tree Removal",
    description:
      "Safe and efficient tree removal for residential and commercial properties.",
  },
  {
    image: treeTrimming,
    title: "Tree Trimming",
    description:
      "Professional pruning to improve tree health, safety and appearance.",
  },
  {
    image: stumpGrinding,
    title: "Stump Grinding",
    description:
      "Complete stump removal to create a clean and usable landscape.",
  },
  {
    image: emergencyTree,
    title: "Emergency Tree Service",
    description:
      "24/7 emergency response for storm-damaged or hazardous trees.",
  },
  {
    image: landClearing,
    title: "Land Clearing",
    description:
      "Fast and reliable land clearing for residential and commercial projects.",
  },
  {
    image: stormCleanup,
    title: "Storm Cleanup",
    description:
      "Quick cleanup of fallen trees, branches and storm debris.",
  },
];

function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold tracking-wide text-green-700">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Complete Tree Care Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            From routine tree maintenance to emergency storm cleanup, we
            provide reliable, affordable, and professional tree care services
            to keep your property safe and beautiful.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
             <div className="h-56 overflow-hidden">
               <img
  src={service.image}
  alt={`${service.title} service in Syracuse`}
  width="600"
  height="400"
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
/>
              </div>

             <div className="p-6">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {service.description}
                </p>

               <Link
  to="/contact"
  className="mt-6 inline-flex font-semibold text-green-700 transition hover:text-green-900"
>
  Get Free Estimate →
</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;