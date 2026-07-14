import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "John D.",
    location: "Syracuse, NY",
    review:
      "Clear View Tree Service removed a large tree near our house safely and quickly. The crew was professional and cleaned everything before leaving.",
  },
  {
    name: "Sarah M.",
    location: "Liverpool, NY",
    review:
      "Excellent tree trimming service. They arrived on time, explained the work clearly, and made our yard look much better.",
  },
  {
    name: "Michael R.",
    location: "Syracuse, NY",
    review:
      "They responded quickly after a storm and removed a fallen tree from our driveway. Reliable service and fair pricing.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold tracking-wide text-green-700">
            CUSTOMER REVIEWS
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Homeowners across Syracuse trust us for safe, reliable, and
            professional tree care services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <FaQuoteLeft className="mb-6 text-4xl text-green-200" />

              <div
                className="mb-5 flex gap-1 text-yellow-500"
                aria-label="5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <p className="min-h-36 text-lg leading-8 text-gray-600">
                “{item.review}”
              </p>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-green-700">
                  {item.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;