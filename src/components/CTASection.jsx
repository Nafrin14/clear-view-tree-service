import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

function CTASection() {
  return (
    <section className="bg-green-900 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide">
            NEED TREE SERVICE?
          </span>

          <h2 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Get Safe, Reliable Tree Care from Local Professionals
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-green-100">
            Contact Clear View Tree Service today for a free estimate in
            Syracuse and surrounding areas.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            to="/contact"
            className="rounded-xl bg-white px-8 py-4 text-center font-bold text-green-900 transition hover:bg-green-100"
          >
            Get Free Estimate
          </Link>

          <a
            href="tel:+13150000000"
            className="flex items-center justify-center gap-3 rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-900"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;