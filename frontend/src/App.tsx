import './App.css';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import StatsSection from './components/StatsSection';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';
import { useRef } from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
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
import JobPlacementPage from './pages/JobPlacementPage';
import SuccessStories from './components/SuccessStories';
import JobOrientedHighlight from './components/JobOrientedHighlight';
import ContactLayout from './components/ContactLayout';

function App() {
  const serviceRef = useRef(null);

  const scrollToServices = () => {
    const elements = serviceRef.current;
    const navbarHeight = 80; 
    const elementPosition = elements.getBoundingClientRect().top + window.scrollY;
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
              <JobOrientedHighlight/>
              <WhyDataArtisan/>
              <div ref={serviceRef}></div>
              <ContactSection />
              <PlacementsSection/>
            </>
          }
        />
        <Route path='training' element={<Training/>}/>
        <Route path='cv-preparation' element={<CvWritingPage/>}/>
        <Route path='mock-interviews' element={<MockInterviewPage/>}/>
        <Route path='cv-marketing' element={<MarketingTeamPage/>}/>
        <Route path='job-placement' element={<JobPlacementPage/>}/>
        <Route path='/list' element={<CoursePage/>}/>
        <Route path="/:category" element={<CoursePage />} />
        <Route path='/course/:id' element={<CourseDetailPage/>}/>
        <Route path='/register' element={<ContactLayout/>}/>
      </Routes>
    </main>

   
    <FooterSection />
  </Router>
);
}

export default App;
