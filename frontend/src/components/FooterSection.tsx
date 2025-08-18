import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FooterSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbarHeight = 80; 
    const offset = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      setTimeout(() => {
        scrollToId("services");
      }, 100); 
    } else {
      scrollToId("services");
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      scrollToSection("contact");
    }
  };

  const handleCoursesClick = () => {
    navigate("/list");
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">Data Artisans Consultancy</h2>
          <p className="text-gray-400">
            Headquartered in London, we are a leading consultancy offering expert guidance and
            personalized support for students and professionals looking to succeed in the UK tech and data industries.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-3">
            <p>📍 London, United Kingdom</p>
            <p>📞 <a href="tel:+441234567890" className="hover:underline">+44 123 456 7890</a></p>
            <p>📧 <a href="mailto:info@dataartisans.com" className="hover:underline">info@dataartisans.com</a></p>
            <p>
              💬 <a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Locations</h2>
          <p>📍 London Office</p>
          <p className="text-gray-400 mb-3">123 Baker Street, London, UK</p>
          <p>📍 Manchester Office</p>
          <p className="text-gray-400">45 Oxford Road, Manchester, UK</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <button onClick={handleHomeClick} className="hover:underline text-left w-full">Home</button>
            </li>
            <li>
              <button onClick={handleAboutClick} className="hover:underline text-left w-full">About Us</button>
            </li>
            <li>
              <button onClick={handleCoursesClick} className="hover:underline text-left w-full">Job Roles</button>
            </li>
            <li>
              <button onClick={handleContactClick} className="hover:underline text-left w-full">Contact</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Data Artisans Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
