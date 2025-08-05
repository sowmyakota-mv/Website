import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const navigate=useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen);

  const aboutRef = useRef(null);
  const howItWorksRef = useRef(null);
  const coursesRef = useRef(null);

  // ✅ Helper to close all menus
  const closeAllMenus = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setHowItWorksOpen(false);
    setCoursesOpen(false);
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
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/website.png"
            alt="logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold text-blue-600">Data Artisans</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="/" className="flex items-center hover:text-blue-500">
            Home
          </Link>

          <div className="relative group" ref={aboutRef}>
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
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border">
                <Link
                  to="/about#training"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Expert Course Training
                </Link>
                <Link
                  to="/about#cv-writing"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  CV Writing & Guaranteed Picks
                </Link>
                <Link
                  to="/about#mock"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Mock Interviews
                </Link>
                <Link
                  to="/about#team"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Dedicated Marketing Team
                </Link>
              </div>
            )}
          </div>

          {/* <div className="relative group" ref={howItWorksRef}>
            <Button
              className="flex items-center hover:text-blue-500"
              onClick={() => {
                setAboutOpen(false);
                setHowItWorksOpen(!howItWorksOpen);
                setCoursesOpen(false);
              }}
            >
              How It Works
            </Button>
            {howItWorksOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border">
                <Link
                  to="/how-it-works#steps"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Detailed Step-by-Step Process
                </Link>
                <Link
                  to="/how-it-works#support"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Placement Support
                </Link>
                <Link
                  to="/how-it-works#hiring"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Companies Hiring
                </Link>
              </div>
            )}
          </div> */}

          <div className="relative group" ref={coursesRef}>
            <Button
              className="flex items-center hover:text-blue-500"
              onClick={() => {
                setAboutOpen(false);
                setHowItWorksOpen(false);
                setCoursesOpen(!coursesOpen);
              }}
            >
              Courses
            </Button>
            {coursesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border">
                <Link
                  to="/list"
                  className="block px-4 py-2 hover:bg-gray-100"  onClick={closeAllMenus}
                >
                  List of Courses
                </Link>
                <Link
                  to="/backend"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Backend Development
                </Link>
                <Link
                  to="/data"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Data Analytics
                </Link>
                <Link
                  to="/frontend"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Frontend Development
                </Link>
                <Link
                  to="/uiux"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  UI/UX developer
                </Link>
                <Link
                  to="/android"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Android Development
                </Link>
                <Link
                  to="/java"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Java Developer
                </Link>
                <Link
                  to="/more"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  More courses
                </Link>
              </div>
            )}
          </div>
<a
  href="#success"
  className="flex items-center hover:text-blue-500"
  onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("success");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeAllMenus();
  }}
>
  Success Stories
</a>

          <a
            href="#footer"
            className="flex items-center hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              const footerSection = document.getElementById("footer");
              if (footerSection) {
                footerSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Location
          </a>
        </nav>

        {/* Register Button */}
        <div className="hidden md:flex space-x-4">
          <Button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition" 
          onClick={()=>navigate('/register')}>
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
            <Link to="/" className="px-4 hover:text-blue-500" onClick={closeAllMenus}>
              Home
            </Link>
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
                  to="/about#training"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Expert Course Training
                </Link>
                <Link
                  to="/about#cv-writing"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  CV Writing & Guaranteed Picks
                </Link>
                <Link
                  to="/about#mock"
                  className="block px-4 py-2 hover:bg-gray-100"  onClick={closeAllMenus}
                >
                  Mock Interviews
                </Link>
                <Link
                  to="/about#marketing"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Dedicated Marketing Team
                </Link>
              </div>
            )}
          </div>

            {/* <div className="relative group" ref={howItWorksRef}>
            <Button
              className="flex items-center hover:text-blue-500"
              onClick={() => {
                setAboutOpen(false);
                setHowItWorksOpen(!howItWorksOpen);
                setCoursesOpen(false);
              }}
            >
              How It Works
            </Button>
            {howItWorksOpen && (
  <div className="pl-4 flex flex-col space-y-2 mt-2">
<Link
                  to="/how-it-works#steps"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Detailed Step-by-Step Process
                </Link>
                <Link
                  to="/how-it-works#support"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Placement Support
                </Link>
                <Link
                  to="/how-it-works#hiring"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Companies Hiring
                </Link>
              </div>
            )}
          </div> */}

            <div className="relative" ref={coursesRef}>
            <Button
              className="flex items-center hover:text-blue-500"
              onClick={() => {
                setAboutOpen(false);
                setHowItWorksOpen(false);
                setCoursesOpen(!coursesOpen);
              }}
            >
              Courses
            </Button>
            {coursesOpen && (
              <div className="flex flex-col space-y-2 mt-2">
                <Link
                  to="/list"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  List of Courses
                </Link>
                <Link
                  to="/backend"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Backend Development
                </Link>
                <Link
                  to="/data"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Data Analytics
                </Link>
                <Link
                  to="/frontend"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Frontend Development
                </Link>
                <Link
                  to="/uiux"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  UI/UX developer
                </Link>
                <Link
                  to="/android"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Android Development
                </Link>
                <Link
                  to="/java"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  Java Developer
                </Link>
                <Link
                  to="/more"
                  className="block px-4 py-2 hover:bg-gray-100" onClick={closeAllMenus}
                >
                  More courses
                </Link>
              </div>
            )}
          </div>
<a
  href="#success"
  className="px-4 p-4 flex items-center hover:text-blue-500"
  onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("success");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeAllMenus();
  }}
>
  Success Stories
</a>

          <a
            href="#footer"
            className="px-4 flex items-center hover:text-blue-500"
            onClick={(e) => {
              e.preventDefault();
              const footerSection = document.getElementById("footer");
              if (footerSection) {
                footerSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Location
          </a>

<Button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
onClick={()=>{
  closeAllMenus()
  navigate('/register')}}>
Get in Touch
</Button>
</nav>
</div>
)}
</header>
  );
};

export default Navbar;
