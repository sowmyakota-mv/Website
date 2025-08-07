
import './App.css';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import StatsSection from './components/StatsSection';
import SuccessStories from './components/SuccessStories';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';
import { useRef } from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import ServicePage from './pages/ServicePage';
import CoursePage from './pages/CoursePage';
import CourseDetailPage from './pages/CourseDetails';
import RegistrationForm from './components/RegistrationForm';
import WhyDataArtisan from './components/AboutSection';
import ScrollHandler from './ScrollToTop';
import PlacementsSection from './components/ServicesSection';
import Training from './pages/TrainingPage';
import CvWritingPage from './pages/CvWritingPage';
import MockInterviewPage from './pages/MockInterviewPage';
import MarketingTeamPage from './pages/MarketingTeamPage';

function App() {
  const serviceRef = useRef(null);

  const scrollToServices = () => {
    const element = serviceRef.current;
    const navbarHeight = 80; 
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
  <Router>
    <ScrollHandler/>
    <Navbar />
    <main className="pt-20">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection scrollToServices={scrollToServices} />
              <StatsSection />
              <WhyDataArtisan/>
              <div ref={serviceRef}></div>
              <ContactSection />
              <PlacementsSection/>
            </>
          }
        />
        <Route path='training' element={<Training/>}/>
        <Route path='cv-writing' element={<CvWritingPage/>}/>
        <Route path='mock-interviews' element={<MockInterviewPage/>}/>
        <Route path='marketing-team' element={<MarketingTeamPage/>}/>
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
