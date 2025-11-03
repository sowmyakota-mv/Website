// src/components/Navbar.js
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const courses = [
  { id: "data-science", title: "Data Science Bootcamp" },
  { id: "web-development", title: "Web Development" },
  { id: "full-stack-js", title: "Full-Stack JavaScript" },
  { id: "ai-ml", title: "AI & Machine Learning" },
  { id: "cyber-security", title: "Cyber Security" },
  { id: "business-intelligence", title: "Business Intelligence" },
  { id: "devops", title: "DevOps & SRE" },
  { id: "ux-ui", title: "UX / UI Design" },
  { id: "mobile-app", title: "Mobile App Development" },
  { id: "cloud-computing", title: "Cloud Computing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [ourServicesOpen, setOurServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const closeAllMenus = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setOurServicesOpen(false);
  };

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [location.pathname]);

  return (
    <header className="w-full shadow-md fixed top-0 bg-white z-[30]">
      <style>{`
        .dropdown-visible {
          position: relative;
          z-index: 9999;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex items-center justify-between p-1">
        {/* Logo */}
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/da-logo.jpeg"
            alt="logo"
            className="h-20 w-32 md:h-20 md:w-36 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center font-sans font-semibold text-gray-700 text-lg md:text-xl tracking-wide">
          {/* ... desktop nav unchanged */}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex space-x-4">
          {/* ... unchanged */}
        </div>

        {/* Mobile Menu Toggle */}
        <Button onClick={toggleMenu} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu with fixed dropdown issues */}
      {isOpen && (
        <>
          {/* Backdrop - lower z-index than menu */}
          <div
            className="fixed inset-0 bg-black/40 z-[40]"
            onClick={closeAllMenus}
          ></div>

          <div className="md:hidden bg-white border-t max-h-[90vh] overflow-y-auto z-[50] fixed top-[80px] left-0 w-full shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-2 font-sans font-semibold text-gray-700 tracking-wide">
              <Link
                to="/"
                className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300"
                onClick={closeAllMenus}
              >
                Home
              </Link>

              {/* About */}
              <div className="relative">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300"
                >
                  About DA{" "}
                  <ChevronDown
                    className={`ml-1 h-5 w-5 transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

               <div
  className={`relative left-0 mt-1 ml-4 w-[calc(100%-1rem)] bg-white shadow-md 
              rounded-md border transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
              ${aboutOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
>
                  {[ // about links
                    { path: "/training", text: "Hands-On Course Training" },
                    { path: "/cv-preparation", text: "Professional CV Development" },
                    { path: "/cv-marketing", text: "Strategic CV Promotion" },
                    { path: "/mock-interviews", text: "Mock Interviews & Feedback" },
                    { path: "/job-placement", text: "Job Placement Assistance" },
                  ].map(({ path, text }) => (
                    <Link
                      key={path}
                      to={path}
                      className="block px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Our Services */}
              <div className="relative">
                <button
                  onClick={() => setOurServicesOpen(!ourServicesOpen)}
                  className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300"
                >
                  Our Services{" "}
                  <ChevronDown
                    className={`ml-1 h-5 w-5 transition-transform ${
                      ourServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
  className={`relative left-0 mt-1 ml-4 w-[calc(100%-1rem)] bg-white shadow-md 
              rounded-md border transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
              ${ourServicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
>
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/our-services/${course.id}`}
                      className="block px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/graduate-internship"
                className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300 text-left"
                onClick={closeAllMenus}
              >
                Graduate Internship
              </Link>

              <Link
                to="/career"
                className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300 text-left"
                onClick={closeAllMenus}
              >
                Career
              </Link>

              <button
                className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300 text-left"
                onClick={() => {
                  handleScrollTo("success");
                  closeAllMenus();
                }}
              >
                Success Stories
              </button>

              <button
                className="mt-4 px-4 py-2 border border-blue-500 font-sans font-semibold text-blue-500 rounded hover:bg-blue-500 hover:text-white transition text-lg"
                onClick={() => {
                  navigate("/register");
                  closeAllMenus();
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
