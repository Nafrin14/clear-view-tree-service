import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import contactHero from "../assets/images/emergency-tree.webp";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  useEffect(() => {
    const scriptId = "ghl-form-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://link.kdlead.com/js/form_embed.js";
      script.async = true;
      script.id = scriptId;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative flex h-[45vh] min-h-[430px] items-center overflow-hidden md:h-[50vh]">
        <img
          src={contactHero}
          alt="Contact Clear View Tree Service"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-white">
          <span className="inline-block rounded-full bg-green-600 px-5 py-2 text-sm font-semibold uppercase tracking-wide">
            Contact Us
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold md:text-6xl">
            Get Your Free Tree Service Estimate
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Contact our experienced team today for professional tree removal,
            trimming, emergency service, stump grinding, and land clearing.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-green-700">
              Get In Touch
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">
              We're Ready To Help
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you need emergency tree removal, tree trimming, stump
              grinding, or land clearing, our experienced team is here to help.
              Fill out the form and we'll contact you as soon as possible.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-600 p-3 text-white">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>

                  <a
                    href="tel:+13150000000"
                    className="text-gray-600 hover:text-green-700"
                  >
                    315-864-9003
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-600 p-3 text-white">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>

                  <a
                    href="mailto:info@clearviewtreeservice.com"
                    className="text-gray-600 hover:text-green-700"
                  >
                    info@clearviewtreeservice.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-600 p-3 text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Service Area</h3>

                  <p className="text-gray-600">
                    Syracuse, New York & Nearby Areas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-600 p-3 text-white">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Emergency Service
                  </h3>

                  <p className="text-gray-600">
                    Available 24/7 for emergency tree services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-xl">
            <iframe
              src="https://link.kdlead.com/widget/form/7e13uD1CKl1phyf0bCsH"
              id="inline-7e13uD1CKl1phyf0bCsH"
              title="Clear View Tree Service Contact Form"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 0"
              data-height="885"
              data-layout-iframe-id="inline-7e13uD1CKl1phyf0bCsH"
              data-form-id="7e13uD1CKl1phyf0bCsH"
              className="h-[885px] w-full rounded-lg border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;