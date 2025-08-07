import { Link } from "react-router-dom";
import { useState } from "react";

function ContactSection() {
  const [activeLink, setActiveLink] = useState(null);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveLink(targetId);
    }
  };

  return (
    <section className="w-full py-10">
      <div
        className="w-full max-w-5xl mx-auto rounded-lg shadow-lg p-8 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #0a1a46 0%, #0f3078 50%, #3b82f6 100%)",
        }}
      >

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How can we help you?
        </h2>

        <p className="text-lg md:text-xl font-medium">
          <Link
            to="/register"
            className={`underline decoration-blue-400 underline-offset-4 transition ${
              activeLink === "register" ? "decoration-yellow-400" : ""
            }`}
            onClick={() => setActiveLink("register")}
          >
            Get in touch
          </Link>{" "}
          with us or{" "}
          <a
            href="#services"
            className={`underline decoration-blue-400 underline-offset-4 transition ${
              activeLink === "services" ? "decoration-yellow-400" : ""
            }`}
            onClick={(e) => handleScroll(e, "services")}
          >
            explore our services
          </a>{" "}
          tailored for you.
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
