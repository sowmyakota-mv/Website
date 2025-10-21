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
  const [trainingsOpen, setTrainingsOpen] = useState(false); // new state

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const aboutRef = useRef(null);
  const howItWorksRef = useRef(null);
  const coursesRef = useRef(null);
  const trainingsRef = useRef(null); // new ref

  const closeAllMenus = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setHowItWorksOpen(false);
    setCoursesOpen(false);
    setTrainingsOpen(false); // close trainings
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
        howItWorksRef.current &&
        !howItWorksRef.current.contains(event.target) &&
        coursesRef.current &&
        !coursesRef.current.contains(event.target) &&
        trainingsRef.current &&
        !trainingsRef.current.contains(event.target)
      ) {
        closeAllMenus();
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
            className="h-20 w-32 md:h-20 md:w-36 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 font-medium text-gray-700 text-lg md:text-xl">
          <Link to="/" className="flex items-center hover:text-blue-500">Home</Link>

          {/* About Dropdown */}
          <div
            className="relative"
            ref={aboutRef}
            onMouseEnter={() => { setAboutOpen(true); setCoursesOpen(false); setTrainingsOpen(false); setHowItWorksOpen(false); }}
            onMouseLeave={(e) => { const related = e.relatedTarget; if (!aboutRef.current.contains(related)) setAboutOpen(false); }}
          >
            <Button className="flex items-center font-medium hover:text-blue-500 text-lg md:text-xl"
              onClick={() => { setAboutOpen(!aboutOpen); setCoursesOpen(false); setTrainingsOpen(false); setHowItWorksOpen(false); }}>
              About 
              {/* <ChevronDown className="ml-1 h-5 w-5" /> */}
            </Button>

            {aboutOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border z-50 text-sm font-medium">
                <Link to="/training" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Hands-On Course Training</Link>
                <Link to="/cv-preparation" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Professional CV Development</Link>
                <Link to="/cv-marketing" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Strategic CV Promotion</Link>
                <Link to="/mock-interviews" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Mock Interviews & Feedback</Link>
                <Link to="/job-placement" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Job Placement Assistance</Link>
              </div>
            )}
          </div>
          
          <Link to="/graduate-internship" className="flex items-center hover:text-blue-500">Graduate Internship</Link>

          {/* Our Trainings Dropdown */}
          {/* <div
            className="relative"
            ref={trainingsRef}
            onMouseEnter={() => { setTrainingsOpen(true); setAboutOpen(false); setCoursesOpen(false); setHowItWorksOpen(false); }}
            onMouseLeave={(e) => { const related = e.relatedTarget; if (!trainingsRef.current.contains(related)) setTrainingsOpen(false); }}
          >
            <Button className="flex items-center font-medium hover:text-blue-500 text-lg md:text-xl"
              onClick={() => { setTrainingsOpen(!trainingsOpen); setAboutOpen(false); setCoursesOpen(false); setHowItWorksOpen(false); }}>
              Our Trainings 
              {/* <ChevronDown className="ml-1 h-5 w-5" /> */}
            {/* </Button>

            {trainingsOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border z-50 text-sm font-medium">
                <Link to="/trainings/data-science" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Data Science Bootcamp</Link>
                <Link to="/trainings/web-development" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Web Development</Link>
                <Link to="/trainings/cloud-computing" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Cloud Computing</Link>
                <Link to="/trainings/ai-ml" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>AI & Machine Learning</Link>
                <Link to="/trainings/cyber-security" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Cyber Security</Link>
                <Link to="/trainings/business-intelligence" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Business Intelligence</Link>
              </div>
            )}
          </div>  */}
          <Link to="/our-services" className="flex items-center hover:text-blue-500">Our Services</Link>


          {/* Job Roles Dropdown */}
          <div
            className="relative"
            ref={coursesRef}
            onMouseEnter={() => { setCoursesOpen(true); setAboutOpen(false); setTrainingsOpen(false); setHowItWorksOpen(false); }}
            onMouseLeave={(e) => { const related = e.relatedTarget; if (!coursesRef.current.contains(related)) setCoursesOpen(false); }}
          >
            <Button className="flex items-center font-medium hover:text-blue-500 text-lg md:text-xl"
              onClick={() => { setCoursesOpen(!coursesOpen); setAboutOpen(false); setTrainingsOpen(false); setHowItWorksOpen(false); }}>
              Job Roles 
              {/* <ChevronDown className="ml-1 h-5 w-5" /> */}
            </Button>

            {coursesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border z-50 text-sm font-medium">
                <Link to="/job-roles/data-engineering" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Data Engineering</Link>
                <Link to="/job-roles/business-intelligence" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Business Intelligence</Link>
                <Link to="/job-roles/cloud-solutions" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Cloud Solutions</Link>
                <Link to="/job-roles/ai&machinelearning" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>AI & Machine Learning</Link>
                <Link to="/job-roles/application-development" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Application Development</Link>
                <Link to="/job-roles/cyber-security" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>Cyber Security</Link>
                <Link to="/job-roles/it-strategy-consulting" className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}>IT Strategy & Consulting</Link>
              </div>
            )}
          </div>

          {/* Scroll Links */}
          <button className="flex items-center hover:text-blue-500" onClick={() => { handleScrollTo("success"); closeAllMenus(); }}>Stories</button>
          <button className="flex items-center hover:text-blue-500" onClick={() => { handleScrollTo("footer"); closeAllMenus(); }}>Location</button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex space-x-4">
          <Button className="px-4 py-2 border border-blue-500 font-medium text-blue-500 rounded hover:bg-blue-500 hover:text-white transition text-lg md:text-xl"
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
          <div className="flex flex-col px-4 py-4 space-y-2 font-medium text-gray-700">
            <Link to="/" className="block px-2 py-2 rounded hover:bg-gray-100" onClick={closeAllMenus}>Home</Link>

            {/* About */}
            <button onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-100">
              About <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutOpen && (
              <div className="flex flex-col ml-4 space-y-1">
                <Link to="/training" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Hands-On Course Training</Link>
                <Link to="/cv-preparation" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Professional CV Development</Link>
                <Link to="/cv-marketing" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Strategic CV Promotion</Link>
                <Link to="/mock-interviews" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Mock Interviews & Feedback</Link>
                <Link to="/job-placement" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Job Placement Assistance</Link>
              </div>
            )}
<Link to="/graduate-internship" className="block px-2 py-2 rounded hover:bg-gray-100 text-left" onClick={closeAllMenus}>Graduate Internship</Link>
            {/* Our Trainings */}
            {/* <button onClick={() => setTrainingsOpen(!trainingsOpen)}
              className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-100">
              Our Trainings <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${trainingsOpen ? "rotate-180" : ""}`} />
            </button>
            {trainingsOpen && (
              <div className="flex flex-col ml-4 space-y-1">
                <Link to="/trainings/data-science" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Data Science Bootcamp</Link>
                <Link to="/trainings/web-development" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Web Development</Link>
                <Link to="/trainings/cloud-computing" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Cloud Computing</Link>
                <Link to="/trainings/ai-ml" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>AI & Machine Learning</Link>
                <Link to="/trainings/cyber-security" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Cyber Security</Link>
                <Link to="/trainings/business-intelligence" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Business Intelligence</Link>
              </div>
            )} */}
            <Link to="/our-services" className="block px-2 py-2 rounded hover:bg-gray-100 text-left" onClick={closeAllMenus}>Our Services</Link>
            {/* Our Trainings */}

            {/* Job Roles */}
            <button onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex justify-between items-center w-full px-2 py-2 rounded hover:bg-gray-100">
              Job Roles <ChevronDown className={`ml-1 h-5 w-5 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesOpen && (
              <div className="flex flex-col ml-4 space-y-1">
                <Link to="/job-roles/data-engineering" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Data Engineering</Link>
                <Link to="/job-roles/business-intelligence" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Business Intelligence</Link>
                <Link to="/job-roles/cloud-solutions" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Cloud Solutions</Link>
                <Link to="/job-roles/ai&machinelearning" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>AI & Machine Learning</Link>
                <Link to="/job-roles/application-development" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Application Development</Link>
                <Link to="/job-roles/cyber-security" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>Cyber Security</Link>
                <Link to="/job-roles/it-strategy-consulting" className="px-2 py-1 rounded hover:bg-gray-100" onClick={closeAllMenus}>IT Strategy & Consulting</Link>
              </div>
            )}

            <button className="block px-2 py-2 rounded hover:bg-gray-100 text-left" onClick={() => { handleScrollTo("success"); closeAllMenus(); }}>Success Stories</button>
            <button className="block px-2 py-2 rounded hover:bg-gray-100 text-left" onClick={() => { handleScrollTo("footer"); closeAllMenus(); }}>Location</button>

            {/* Mobile CTA */}
            <button className="mt-4 px-4 py-2 border border-blue-500 font-medium text-blue-500 rounded hover:bg-blue-500 hover:text-white transition text-lg" onClick={() => { navigate("/register"); closeAllMenus(); }}>
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
