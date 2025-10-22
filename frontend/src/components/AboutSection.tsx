import { CheckCircle } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import CareerSteps from "./CareerSteps";
import ScrollAnimation from "@/animation/ScrollAnimation";

function WhyDataArtisan() {
  const [timeLeft, setTimeLeft] = useState("");
  const [showMobileMessage, setShowMobileMessage] = useState(false);
  const navigate = useNavigate();
  const flowchartRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date("2025-08-20T18:45:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft("Batch Started!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowMobileMessage(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (flowchartRef.current) {
      observer.observe(flowchartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: "training",
      img: "/training.jpg",
      title: "Hands-On Course Training",
      description: "Master practical, job-ready skills through immersive learning in:",
      listItems: ["SQL", "Power BI", "Azure", "and more..."],
      link: "training",
    },
    {
      id: "cv-preparation",
      img: "/cv-writing.jpg",
      title: "Professional CV Development",
      description: "Craft a strong first impression with:",
      listItems: [
        "Tailored CVs for your target roles",
        "ATS-optimized formatting",
        "Highlighting your unique strengths",
      ],
      link: "cv-preparation",
    },
    {
      id: "cv-marketing",
      img: "/marketing.jpg",
      title: "Strategic CV Promotion",
      description: "Get noticed by the right employers through:",
      listItems: [
        "Targeted recruiter outreach",
        "Active networking campaigns",
        "Personalized job alerts",
      ],
      link: "cv-marketing",
    },
    {
      id: "mock-interviews",
      img: "/interview.jpg",
      title: "Mock Interviews & Feedback",
      description: "Boost your confidence with:",
      listItems: [
        "Simulated interview sessions",
        "Detailed performance reviews",
        "Actionable improvement tips",
      ],
      link: "mock-interviews",
    },
    {
      id: "job-placement",
      img: "/job-placement.jpg",
      title: "Job Placement Assistance",
      description: "Secure your ideal role with:",
      listItems: [
        "One-on-one placement guidance",
        "Exclusive job openings",
        "Continuous career support",
      ],
      link: "job-placement",
    },
  ];

  return (
    <section id="services" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation direction="up">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Step-by-Step Career Success Roadmap
        </h2></ScrollAnimation>

        {showMobileMessage && (
          <ScrollAnimation direction="up">
          <div className="md:hidden mb-4 text-center bg-yellow-200 text-black font-semibold py-2 px-3 rounded-lg shadow">
            📌 Tap a step to view its details below
          </div></ScrollAnimation>
        )}

        {/* === FLOW SECTION === */}
        <ScrollAnimation direction="up">
        <div className="mb-8 py-5 transition-all duration-500" ref={flowchartRef}>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 gap-4 ">
            <FlowStep text="Course Training" targetId="training" />
            <FlowStep text="CV Preparation" targetId="cv-preparation" />
            <FlowStep text="CV Marketing" targetId="cv-marketing" />
            <FlowStep text="Mock Interviews" targetId="mock-interviews" />
            <FlowStep text="Job Placement" targetId="job-placement" />
          </div>
        </div></ScrollAnimation>

        {/* === CAREER STEPS === */}
        <ScrollAnimation direction="up">
        <div className="relative z-10 mb-">
          <CareerSteps />
        </div></ScrollAnimation>

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Our Comprehensive Career Support Services
        </h2>

        {/* === CARD SECTION === */}
        <div className="space-y-12">
          {cards.map((card, index) => (
             <ScrollAnimation key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.2}>
            <div key={index} id={card.id}>
              <Card
                img={card.img}
                title={card.title}
                description={card.description}
                listItems={card.listItems}
                link={card.link}
                reverse={index % 2 !== 0}
              />
            </div></ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- FLOW STEP --- */
function FlowStep({ text, targetId }) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={scrollToSection}
      className="relative group cursor-pointer bg-blue-50 border border-blue-300 flex items-center justify-center text-center shadow-sm text-sm font-medium text-blue-800 w-48 h-[100px] hover:bg-blue-100 transition-all duration-300"
    >
      {/* Wrapper for centering title and hover movement */}
      <div className="flex flex-col items-center justify-center transition-all duration-300 transform md:group-hover:-translate-y-4">
        {/* Title - perfectly centered initially */}
        <span className="block mt-2 mb-1.2">{text}</span>

        {/* Desktop-only hover button */}
        <button
          onClick={scrollToSection}
          className="hidden md:block text-xs bg-blue-600 text-white px-3 py-1 rounded transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          Click Here →
        </button>

        {/* Mobile: button always visible */}
        <button
          onClick={scrollToSection}
          className="md:hidden mt-3 text-xs bg-blue-600 text-white px-3 py-1 rounded"
        >
          Click Here →
        </button>
      </div>
    </div>
  );
}

/* --- CARD --- */
function Card({ img, title, description, listItems, link, reverse }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/${link}`);
  };

  return (
    <div
      className={`group relative flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-stretch shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105`}
    >
      <div className="md:w-1/2 relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-500"
        />
      </div>

      <div className="md:w-1/2 bg-gray-50 p-6 flex flex-col justify-center relative transition-transform duration-500">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>

        <p className="text-sm mb-4">{description}</p>
        <ul className="text-gray-700 text-sm space-y-2 mb-4">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-4 h-4" /> {item}
            </li>
          ))}
        </ul>

        {/* Desktop-only Learn More button below content */}
        <button
          onClick={handleLearnMore}
          className="hidden md:block w-40 mt-2 bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          Learn More →
        </button>

        {/* Mobile-only Learn More button at the end */}
        <button
          onClick={handleLearnMore}
          className="w-40 md:hidden mt-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
        >
          Learn More →
        </button>
      </div>
    </div>
  );
}

export default WhyDataArtisan;
