// src/components/Navbar.js
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const aboutRef = useRef(null);
  const howItWorksRef = useRef(null);
  const coursesRef = useRef(null);

  const closeAllMenus = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setHowItWorksOpen(false);
    setCoursesOpen(false);
  };

  // Function to handle smooth scroll (works from any page)
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // go home first
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // delay to wait for DOM render
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target) &&
        howItWorksRef.current &&
        !howItWorksRef.current.contains(event.target) &&
        coursesRef.current &&
        !coursesRef.current.contains(event.target)
      ) {
        setAboutOpen(false);
        setHowItWorksOpen(false);
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full shadow-md fixed top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
<div className="flex items-center space-x-1 cursor-pointer" onClick={() => navigate("/")}>
  <img
    src="/da-logo.jpeg"
    alt="logo"
    className="h-20 w-20 md:h-20 md:w-28 object-contain"
  />
</div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700 text-lg md:text-xl">
          <Link to="/" className="flex items-center hover:text-blue-500">
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            ref={aboutRef}
            onMouseEnter={() => {
              setAboutOpen(true);
              setHowItWorksOpen(false);
              setCoursesOpen(false);
            }}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Button className="flex items-center font-medium hover:text-blue-500 text-lg md:text-xl">
              About
            </Button>
            {aboutOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border z-50  text-sm font-medium">
                <Link
                  to="/training"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Hands-On Course Training
                </Link>
                <Link
                  to="/cv-preparation"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Professional CV Development
                </Link>
                <Link
                  to="/cv-marketing"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Strategic CV Promotion
                </Link>
                <Link
                  to="/mock-interviews"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Mock Interviews & Feedback
                </Link>
                <Link
                  to="/job-placement"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Job Placement Assistance
                </Link>
              </div>
            )}
          </div>

          {/* Job Roles Dropdown */}
          <div
            className="relative"
            ref={coursesRef}
            onMouseEnter={() => {
              setAboutOpen(false);
              setHowItWorksOpen(false);
              setCoursesOpen(true);
            }}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <Button className="flex items-center font-medium hover:text-blue-500 text-lg md:text-xl">
              Job Roles
            </Button>
            {coursesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border text-sm font-medium">
                <Link
                  to="/list"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  List of Job Roles
                </Link>
                <Link
                  to="/engineer"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Data Engineer
                </Link>
                <Link
                  to="/developer"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  BI Developer
                </Link>
                <Link
                  to="/analyst"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Data Analyst
                </Link>
                <Link
                  to="/developer"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Database Developer
                </Link>
              </div>
            )}
          </div>

          {/* Scroll Links */}
          <button
            className="flex items-center hover:text-blue-500"
            onClick={() => {
              handleScrollTo("success");
              closeAllMenus();
            }}
          >
            Success Stories
          </button>

          <button
            className="flex items-center hover:text-blue-500"
            onClick={() => {
              handleScrollTo("footer");
              closeAllMenus();
            }}
          >
            Location
          </button>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Button
            className="px-4 py-2 border border-blue-500 font-medium text-blue-500 rounded hover:bg-blue-500 hover:text-white transition text-lg md:text-xl"
            onClick={() => navigate("/register")}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button onClick={toggleMenu} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className="px-4 hover:text-blue-500"
              onClick={closeAllMenus}
            >
              Home
            </Link>

            {/* About Dropdown Mobile */}
            <div className="relative" ref={aboutRef}>
              <Button
                className="flex items-center hover:text-blue-500"
                onClick={() => {
                  setAboutOpen(!aboutOpen);
                  setHowItWorksOpen(false);
                  setCoursesOpen(false);
                }}
              >
                About
              </Button>
              {aboutOpen && (
                <div className="flex flex-col space-y-2 mt-2">
                  <Link
                    to="/training"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    Hands-On Course Training
                  </Link>
                  <Link
                    to="/cv-preparation"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    Professional CV Development
                  </Link>
                  <Link
                    to="/cv-marketing"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    Strategic CV Promotion
                  </Link>
                  <Link
                    to="/mock-interviews"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    Mock Interviews & Feedback
                  </Link>
                  <Link
                    to="/job-placement"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    Job Placement Assistance
                  </Link>
                </div>
              )}
            </div>

            {/* Job Roles Mobile */}
            <div className="relative" ref={coursesRef}>
              <Button
                className="flex items-center hover:text-blue-500"
                onClick={() => {
                  setAboutOpen(false);
                  setHowItWorksOpen(false);
                  setCoursesOpen(!coursesOpen);
                }}
              >
                Job Roles
              </Button>
              {coursesOpen && (
                <div className="flex flex-col space-y-2 mt-2">
                  <Link
                    to="/list"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    List of Job Roles
                  </Link>
                  <Link
                    to="/engineer"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    Data Engineer
                  </Link>
                  <Link
                    to="/developer"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    BI Developer
                  </Link>
                  <Link
                    to="/analyst"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    Data Analyst
                  </Link>
                  <Link
                    to="/developer"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllMenus}
                  >
                    Database Developer
                  </Link>
                </div>
              )}
            </div>

            {/* Scroll Links Mobile */}
            <button
              className="px-4 py-2 text-left hover:text-blue-500"
              onClick={() => {
                handleScrollTo("success");
                closeAllMenus();
              }}
            >
              Success Stories
            </button>

            <button
              className="px-4 py-2 text-left hover:text-blue-500"
              onClick={() => {
                handleScrollTo("footer");
                closeAllMenus();
              }}
            >
              Location
            </button>

            <Button
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
              onClick={() => {
                closeAllMenus();
                navigate("/register");
              }}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
