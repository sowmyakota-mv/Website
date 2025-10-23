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
          <div className="mb-12 py-5 transition-all duration-500" ref={flowchartRef}>
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-6 relative">
              <FlowStep text="Course Training" targetId="training" gradient="from-blue-400 to-cyan-300" />
              <Arrow />
              <FlowStep text="CV Preparation" targetId="cv-preparation" gradient="from-green-400 to-emerald-300" />
              <Arrow />
              <FlowStep text="CV Marketing" targetId="cv-marketing" gradient="from-yellow-400 to-orange-300" />
              <Arrow />
              <FlowStep text="Mock Interviews" targetId="mock-interviews" gradient="from-pink-400 to-rose-300" />
              <Arrow />
              <FlowStep text="Job Placement" targetId="job-placement" gradient="from-purple-400 to-indigo-300" />
            </div>
          </div>
        </ScrollAnimation>

        {/* === CAREER STEPS === */}
        <ScrollAnimation direction="up">
          <div className="relative z-10">
            <CareerSteps />
          </div>
        </ScrollAnimation>

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
function FlowStep({ text, targetId, gradient }) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={scrollToSection}
      className={`relative group cursor-pointer bg-gradient-to-r ${gradient} 
      border border-transparent rounded-xl flex items-center justify-center text-center 
      shadow-lg text-sm font-semibold text-white w-48 h-[110px] 
      transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105`}
    >
      <div className="flex flex-col items-center justify-center transition-all duration-300">
        <span className="block mt-2 mb-2 drop-shadow-md">{text}</span>
        <button
          onClick={scrollToSection}
          className="hidden md:block text-xs bg-white text-gray-800 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow"
        >
          Click Here →
        </button>
        <button
          onClick={scrollToSection}
          className="md:hidden mt-3 text-xs bg-white text-gray-800 px-3 py-1 rounded-md shadow"
        >
          Click Here →
        </button>
      </div>
    </div>
  );
}

/* --- FLOW ARROW --- */
function Arrow() {
  return (
    <>
      {/* Desktop horizontal arrow */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-10 h-[4px] bg-gradient-to-r from-gray-300 to-gray-500 relative">
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-5 h-5 rotate-45 bg-gray-500 animate-pulse"></div>
        </div>
      </div>

      {/* Mobile vertical arrow */}
      <div className="md:hidden flex flex-col items-center justify-center">
        <div className="w-[4px] h-10 bg-gradient-to-b from-gray-300 to-gray-500 relative">
          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-5 h-5 rotate-45 bg-gray-500 animate-pulse"></div>
        </div>
      </div>
    </>
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
