import './App.css';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import StatsSection from './components/StatsSection';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';
import { useRef } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
import DataEngineeringPage from './pages/JobRoles/DataEngineeringPage';
import BusinessIntelligencePage from './pages/JobRoles/BusinessIntelligencePage';
import CloudSolutionsPage from './pages/JobRoles/CloudSolutionsPage';
import AIMachineLearningPage from './pages/JobRoles/AIMachineLearningPage';
import ApplicationDevelopmentPage from './pages/JobRoles/ApplicationDevelopment';
import CyberSecurityPage from './pages/JobRoles/CyberSecurityPage';
import ITStrategyConsultingPage from './pages/JobRoles/ITStrategyConsultingPage';
import GraduateInternship from './pages/GraduateIntership';
import TrainingsPage from './pages/Our Trainings/TrainingPage';
import TrainingOverview from './pages/Our Trainings/TrainingOverview';
import DataScienceBootcamp from './pages/Our Trainings/DataScienceBootcamp';
import WebDevelopment from './pages/Our Trainings/WebDevelopment';
import CloudComputing from './pages/Our Trainings/CloudComputing';
import AIMachineLearning from './pages/Our Trainings/AIMachineLearning';
import CyberSecurityCourse from './pages/Our Trainings/CyberSecurity';
import BusinessIntelligence from './pages/Our Trainings/BusinessIntelligence';
import DevOpsSRE from './pages/Our Trainings/DevOps&SRE';
import UXUIDesign from './pages/Our Trainings/UXUIDesign';
import MobileAppDevelopment from './pages/Our Trainings/MobileAppDevelopment';
import FullStackJS from './pages/Our Trainings/FullStackJS';
import Career from './pages/Career';

function App() {
  const serviceRef = useRef(null);

  const scrollToServices = () => {
    const elements = serviceRef.current;
    const navbarHeight = 80;
    const elementPosition =
      elements.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      {/* ✅ No horizontal scroll, normal vertical scroll */}
      <div className="w-full min-h-screen overflow-x-hidden overflow-y-hidden relative">
        <ScrollHandler />
        <Navbar />

        <main className="pt-20 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection scrollToServices={scrollToServices} />
                  <StatsSection />
                  <JobOrientedHighlight />
                  <WhyDataArtisan />
                  <div ref={serviceRef}></div>
                  <ContactSection />
                  <PlacementsSection />
                </>
              }
            />
            <Route path="training" element={<Training />} />
            <Route path="cv-preparation" element={<CvWritingPage />} />
            <Route path="mock-interviews" element={<MockInterviewPage />} />
            <Route path="cv-marketing" element={<MarketingTeamPage />} />
            <Route path="job-placement" element={<JobPlacementPage />} />
            <Route path="/list" element={<CoursePage />} />
            <Route path="/:category" element={<CoursePage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/register" element={<ContactLayout />} />
            <Route path='/job-roles/data-engineering' element={<DataEngineeringPage/>}/>
            <Route path='/job-roles/business-intelligence' element={<BusinessIntelligencePage/>}/>
            <Route path='/job-roles/cloud-solutions' element={<CloudSolutionsPage/>}/>
            <Route path='/job-roles/ai&machinelearning' element={<AIMachineLearningPage/>}/>
            <Route path='/job-roles/application-development' element={<ApplicationDevelopmentPage/>}/>
            <Route path='/job-roles/cyber-security' element={<CyberSecurityPage/>}/>
            <Route path='/job-roles/it-strategy-consulting' element={<ITStrategyConsultingPage/>}/>
            <Route path='/graduate-internship' element={<GraduateInternship/>}/>
            <Route path='/our-services' element={<TrainingsPage/>}/>
            <Route path='/overview' element={<TrainingOverview/>}/>
            <Route path='/our-services/data-science' element={<DataScienceBootcamp/>}/>
            <Route path='/our-services/web-development' element={<WebDevelopment/>}/>
            <Route path='/our-services/cloud-computing' element={<CloudComputing/>}/>
            <Route path='/our-services/ai-ml' element={<AIMachineLearning/>}/>
            <Route path='/our-services/cyber-security' element={<CyberSecurityCourse/>}/>
            <Route path='/our-services/business-intelligence' element={<BusinessIntelligence/>}/>
            <Route path='/our-services/devops' element={<DevOpsSRE/>}/>
            <Route path='/our-services/ux-ui' element={<UXUIDesign/>}/>
            <Route path='/our-services/mobile-app' element={<MobileAppDevelopment/>}/>
            <Route path='/our-services/full-stack-js' element={<FullStackJS/>}/>
            <Route path='/career' element={<Career/>}/>
          </Routes>
        </main>

        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
