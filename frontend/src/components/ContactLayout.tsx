import { Mail, MapPin, Phone } from "lucide-react";
import RegistrationForm from "./RegistrationForm";
import ScrollAnimation from "@/animation/ScrollAnimation"; // ✅ Import

export default function ContactLayout() {
  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Get in Touch section */}
      <ScrollAnimation direction="up" delay={0.2}>
        <section className="bg-cyan-500 rounded-xl p-8 text-white text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="max-w-3xl mx-auto text-lg font-semibold">
            Empower your journey with us. Register today to unlock exclusive
            opportunities and unparalleled support on your path to success.
          </p>
        </section>
      </ScrollAnimation>

      {/* Two-column grid */}
      <ScrollAnimation direction="up" delay={0.4}>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left: Registration form */}
          <ScrollAnimation direction="up" delay={0.5}>
            <div>
              <RegistrationForm />
            </div>
          </ScrollAnimation>

          {/* Right: Background & content */}
          
            <div className="bg-cyan-500 rounded-xl text-white flex flex-col justify-center items-center p-8">
              <h2 className="text-4xl font-extrabold mb-6 ml-12">Data Artisans</h2>
              <p className="text-lg max-w-md text-center">
                Data Artisans is dedicated to crafting innovative, precise, and scalable
                solutions that empower businesses with data-driven insights. Our
                expertise bridges technology and creativity, ensuring impactful
                transformations in every project.
              </p>
            </div>
          
        </section>
      </ScrollAnimation>

      {/* Three info cards */}
      <ScrollAnimation direction="up" delay={0.7}>
        <section className="flex flex-col sm:flex-row gap-6 justify-between mb-12">
          <div className="flex items-center bg-cyan-100 rounded-lg p-6 shadow-md w-full md:w-70 sm:w-1/3 ml-16">
            <Phone className="text-cyan-800 mr-4" size={28} />
            <div>
              <h3 className="font-bold text-cyan-900 mb-2">+44 123 456 7890</h3>
              <p className="text-cyan-700 text-sm">
                Reach us easily anytime with friendly support.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-cyan-100 rounded-lg p-6 shadow-md w-full md:w-70 sm:w-1/3">
            <Mail className="text-cyan-800 mr-4" size={28} />
            <div>
              <h3 className="font-bold text-cyan-900 mb-2">info@dataartisans.com</h3>
              <p className="text-cyan-700 text-sm">
                Send us an email and get quick responses.
              </p>
            </div>
          </div>

          <div className="flex items-center bg-cyan-100 rounded-lg p-6 shadow-md w-full md:w-70 sm:w-1/3 mr-16">
            <MapPin className="text-cyan-800 mr-4" size={28} />
            <div>
              <h3 className="font-bold text-cyan-900 mb-2">London, United Kingdom</h3>
              <p className="text-cyan-700 text-sm">
                Visit our head office for personalized service.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Map section */}
      <ScrollAnimation direction="up" delay={0.8}>
        <section className="w-full h-72 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Head%20Office%20London%20OR%20Data%20Artisans&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            title="Head Office London and Data Artisans Location"
          />
        </section>
      </ScrollAnimation>

    </div>
  );
}
