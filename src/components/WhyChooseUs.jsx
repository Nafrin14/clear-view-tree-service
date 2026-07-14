import {
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaAward,
  FaPhoneAlt,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Licensed & Insured",
    text: "Fully licensed and insured for your peace of mind.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Emergency",
    text: "Available anytime for storm damage and emergency services.",
  },
  {
    icon: <FaDollarSign />,
    title: "Free Estimates",
    text: "Honest pricing with no hidden costs.",
  },
  {
    icon: <FaAward />,
    title: "Experienced Team",
    text: "Professional arborists with years of experience.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Fast Response",
    text: "Quick scheduling and reliable customer service.",
  },
  {
    icon: <FaLeaf />,
    title: "Quality Tree Care",
    text: "Safe methods that protect your property and trees.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-green-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">
            Why Homeowners Trust Clear View Tree Service
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            We deliver professional tree services with safety, quality,
            reliability and customer satisfaction on every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;