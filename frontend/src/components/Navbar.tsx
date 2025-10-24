// src/components/Navbar.js
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// src/data/courses.js
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
        aboutRef.current && !aboutRef.current.contains(event.target) &&
        servicesRef.current && !servicesRef.current.contains(event.target)
      ) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full shadow-md fixed top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-1">
        {/* Logo */}
        <div className="flex items-center space-x-1 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/da-logo.jpeg"
            alt="logo"
            className="h-20 w-32 md:h-20 md:w-36 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center font-sans font-semibold text-gray-700 text-lg md:text-xl tracking-wide">
  <Link to="/" className="mx-3 hover:text-blue-500 transition-all duration-300">Home</Link>

  <div
    className="relative mx-1.5"
    ref={aboutRef}
    onMouseEnter={() => { setAboutOpen(true); setOurServicesOpen(false); }}
    onMouseLeave={() => setAboutOpen(false)}
  >
    <Button className="flex items-center hover:text-blue-500 text-lg md:text-xl transition-all duration-300">
      About DA <ChevronDown className="h-5 w-5" />
    </Button>
            {aboutOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border z-50 text-sm font-sans font-medium tracking-wide">
                <Link to="/training" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" onClick={closeAllMenus}>Hands-On Course Training</Link>
                <Link to="/cv-preparation" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" onClick={closeAllMenus}>Professional CV Development</Link>
                <Link to="/cv-marketing" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" onClick={closeAllMenus}>Strategic CV Promotion</Link>
                <Link to="/mock-interviews" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" onClick={closeAllMenus}>Mock Interviews & Feedback</Link>
                <Link to="/job-placement" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" onClick={closeAllMenus}>Job Placement Assistance</Link>
              </div>
            )}
          </div>

          {/* Our Services Dropdown */}
          <div
    className="relative mx-1.6"
    ref={servicesRef}
    onMouseEnter={() => { setOurServicesOpen(true); setAboutOpen(false); }}
    onMouseLeave={() => setOurServicesOpen(false)}
  >
    <Button className="flex items-center hover:text-blue-500 text-lg md:text-xl transition-all duration-300">
      Our Services <ChevronDown className="h-5 w-5" />
    </Button>
            {ourServicesOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border z-50 text-sm font-sans font-medium tracking-wide max-h-96 overflow-y-auto">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/our-services/${course.id}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                    onClick={closeAllMenus}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/graduate-internship" className="mx-5 hover:text-blue-500 transition-all duration-300">
    Graduate Internship
  </Link>
  <Link to="/career" className="mx-4.5 hover:text-blue-500 transition-all duration-300">
    Career
  </Link>
  <button className="mx-4.5 hover:text-blue-500 transition-all duration-300" onClick={() => { handleScrollTo("success"); closeAllMenus(); }}>
    Stories
  </button>
</nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex space-x-4">
          <Button className="px-4 py-2 border border-blue-500 font-sans font-semibold text-blue-500 rounded hover:bg-blue-500 hover:text-white transition text-lg md:text-xl"
            onClick={() => navigate("/register")}>
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button onClick={toggleMenu} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t max-h-screen overflow-y-auto">
          <div className="flex flex-col px-4 py-4 space-y-2 font-sans font-semibold text-gray-700 tracking-wide">
            <Link to="/" className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300" onClick={closeAllMenus}>Home</Link>

            {/* About */}
            <button onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300">
              About DA <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutOpen && (
              <div className="flex flex-col ml-4 space-y-1">
                <Link to="/training" className="px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300" onClick={closeAllMenus}>Hands-On Course Training</Link>
                <Link to="/cv-preparation" className="px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300" onClick={closeAllMenus}>Professional CV Development</Link>
                <Link to="/cv-marketing" className="px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300" onClick={closeAllMenus}>Strategic CV Promotion</Link>
                <Link to="/mock-interviews" className="px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300" onClick={closeAllMenus}>Mock Interviews & Feedback</Link>
                <Link to="/job-placement" className="px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300" onClick={closeAllMenus}>Job Placement Assistance</Link>
              </div>
            )}

            {/* Our Services Mobile */}
            <button onClick={() => setOurServicesOpen(!ourServicesOpen)}
              className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300">
              Our Services <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${ourServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {ourServicesOpen && (
              <div className="flex flex-col ml-4 space-y-1 max-h-64 overflow-y-auto">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/our-services/${course.id}`}
                    className="px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300"
                    onClick={closeAllMenus}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/graduate-internship" className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300 text-left" onClick={closeAllMenus}>Graduate Internship</Link>
            <Link to="/career" className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300 text-left" onClick={closeAllMenus}>Career</Link>

            <button className="block px-2 py-2 rounded hover:bg-gray-100 transition-all duration-300 text-left" onClick={() => { handleScrollTo("success"); closeAllMenus(); }}>Success Stories</button>

            {/* Mobile CTA */}
            <button className="mt-4 px-4 py-2 border border-blue-500 font-sans font-semibold text-blue-500 rounded hover:bg-blue-500 hover:text-white transition text-lg" onClick={() => { navigate("/register"); closeAllMenus(); }}>
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
