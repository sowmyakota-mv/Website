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

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

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

  // If you want auto-close on outside click for mobile dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setAboutOpen(false);
        setOurServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [location.pathname]);

  return (
    <header className="w-full shadow-md fixed top-0 bg-white z-[30]">
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
          <Link
            to="/"
            className="mx-3 hover:text-blue-500 transition-all duration-300"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative mx-1.5"
            ref={aboutRef}
            onMouseEnter={() => {
              setAboutOpen(true);
              setOurServicesOpen(false);
            }}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Button className="flex items-center hover:text-blue-500 text-lg md:text-xl transition-all duration-300 cursor-pointer">
              About DA <ChevronDown className="h-5 w-5" />
            </Button>
            {aboutOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border z-50 text-sm font-sans font-medium tracking-wide">
                <Link
                  to="/training"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  Hands-On Course Training
                </Link>
                <Link
                  to="/cv-preparation"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  Professional CV Development
                </Link>
                <Link
                  to="/cv-marketing"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  Strategic CV Promotion
                </Link>
                <Link
                  to="/mock-interviews"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  Mock Interviews & Feedback
                </Link>
                <Link
                  to="/job-placement"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                  onClick={closeAllMenus}
                >
                  Job Placement Assistance
                </Link>
              </div>
            )}
          </div>

          {/* Our Services Dropdown */}
          <div
            className="relative mx-1.6"
            ref={servicesRef}
            onMouseEnter={() => {
              setOurServicesOpen(true);
              setAboutOpen(false);
            }}
            onMouseLeave={() => setOurServicesOpen(false)}
          >
            <Button className="flex items-center hover:text-blue-500 text-lg md:text-xl transition-all duration-300 cursor-pointer">
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

          <Link
            to="/graduate-internship"
            className="mx-5 hover:text-blue-500 transition-all duration-300"
          >
            Graduate Internship
          </Link>
          <Link
            to="/career"
            className="mx-4.5 hover:text-blue-500 transition-all duration-300"
          >
            Career
          </Link>
          <button
            className="mx-4.5 hover:text-blue-500 transition-all duration-300 cursor-pointer"
            onClick={() => {
              handleScrollTo("success");
              closeAllMenus();
            }}
          >
            Stories
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex space-x-4">
          <Button
            className="px-4 py-2 border border-blue-500 font-sans font-semibold text-blue-500 rounded hover:bg-blue-500 hover:text-white transition text-lg md:text-xl cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Get in Touch
          </Button>
        </div>
        <Button onClick={toggleMenu} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[40]"
            onClick={closeAllMenus}
          ></div>

          <div className="md:hidden bg-white max-h-[90vh] overflow-y-auto z-[50] fixed top-[80px] left-0 w-full shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-2 font-sans font-semibold text-gray-700 tracking-wide">
              <Link
                to="/"
                className="block px-2 py-2 hover:bg-gray-100 transition-all duration-300"
                onClick={closeAllMenus}
              >
                Home
              </Link>

              {/* ABOUT */}
              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex justify-between items-center w-full px-2 py-2 font-semibold text-[#7f3c00] hover:bg-gray-100 transition-all duration-300"
                >
                  Explore Us
                  <ChevronDown
                    className={`ml-1 h-5 w-5 transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {aboutOpen && (
                  <div className="flex flex-col ml-2 space-y-1 py-1">
                    <Link to="/training" className="py-1 px-2 hover:underline" onClick={closeAllMenus}>
                      Hands-On Course Training
                    </Link>
                    <Link to="/cv-preparation" className="py-1 px-2 hover:underline" onClick={closeAllMenus}>
                      Professional CV Development
                    </Link>
                    <Link to="/cv-marketing" className="py-1 px-2 hover:underline" onClick={closeAllMenus}>
                      Strategic CV Promotion
                    </Link>
                    <Link to="/mock-interviews" className="py-1 px-2 hover:underline" onClick={closeAllMenus}>
                      Mock Interviews & Feedback
                    </Link>
                    <Link to="/job-placement" className="py-1 px-2 hover:underline" onClick={closeAllMenus}>
                      Job Placement Assistance
                    </Link>
                  </div>
                )}
              </div>

              {/* OUR SERVICES */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setOurServicesOpen(!ourServicesOpen)}
                  className="flex justify-between items-center w-full px-2 py-2 font-semibold text-[#7f3c00] hover:bg-gray-100 transition-all duration-300"
                >
                  Expertise
                  <ChevronDown
                    className={`ml-1 h-5 w-5 transition-transform ${
                      ourServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {ourServicesOpen && (
                  <div className="flex flex-col ml-2 space-y-1 py-1">
                    {courses.map((course) => (
                      <Link
                        key={course.id}
                        to={`/our-services/${course.id}`}
                        className="py-1 px-2 hover:underline"
                        onClick={closeAllMenus}
                      >
                        {course.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                to="/graduate-internship"
                className="block px-2 py-2 hover:bg-gray-100 transition-all duration-300"
                onClick={closeAllMenus}
              >
                Graduate Internship
              </Link>
              <Link
                to="/career"
                className="block px-2 py-2 hover:bg-gray-100 transition-all duration-300"
                onClick={closeAllMenus}
              >
                Career
              </Link>
              <button
                className="block px-2 py-2 hover:bg-gray-100 transition-all duration-300 text-left"
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
