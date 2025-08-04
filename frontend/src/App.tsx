
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import StatsSection from './components/StatsSection';
import SuccessStories from './components/SuccessStories';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';
import { useRef } from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import CoursePage from './pages/CoursePage';
import CourseDetailPage from './pages/CourseDetails';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const serviceRef = useRef(null);

  const scrollToServices = () => {
    const element = serviceRef.current;
    const navbarHeight = 80; // Adjust based on your navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
  <Router>
    <Navbar />
    <main className="pt-20">
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection scrollToServices={scrollToServices} />
              <AboutSection />
              <div ref={serviceRef}></div>
              <ServicesSection />
              <ContactSection />
              <StatsSection />
              <SuccessStories />
            </>
          }
        />

        {/* About Page Route */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<ServicePage/>}/>
        <Route path='/list' element={<CoursePage/>}/>
        <Route path="/:category" element={<CoursePage />} />
        <Route path='/course/:id' element={<CourseDetailPage/>}/>
        <Route path='/register' element={<RegistrationForm/>}/>
      </Routes>
    </main>

   
    <FooterSection />
  </Router>
);
}

export default App;
