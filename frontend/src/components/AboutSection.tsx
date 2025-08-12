import HighlightCourseCard from "@/pages/HighlightCourseCard";
import { CheckCircle, ArrowRightCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function WhyDataArtisan() {
  const [timeLeft, setTimeLeft] = useState("");
  const navigate=useNavigate()

  // Countdown Timer Logic
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
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
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

        {/* Flowchart Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Step-by-Step Career Success Roadmap
        </h2>

        {/* Flowchart Section */}
        <div className="mb-12 py-5">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 gap-4">
            <FlowStep text="Course Training" targetId="training" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="CV Preparation" targetId="cv-preparation" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="CV Marketing" targetId="cv-marketing" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="Mock Interviews" targetId="mock-interviews" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="Job Placement" targetId="job-placement" />
          </div>
        </div>

        {/* Highlighted Job Oriented Course Card */}
        <div className="mb-12">
          <div className="relative bg-[#E0F2FE] border-2 border-blue-500 shadow-lg p-6 max-w-4xl mx-auto glow-card flex flex-col md:flex-row items-center md:items-start justify-between">
            
            {/* Left Side - Text */}
            <div className="text-left">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                🚀 100% Job Oriented Course
              </h3>
              <p className="text-lg text-gray-700 font-medium">
                Next Batch Starts <span className="text-blue-600 font-bold">20th August</span>
              </p>
              <p className="text-md text-gray-600 mt-1">
                ⏰ Timings: <strong>6:45 PM – 8:15 PM</strong>
              </p>
              <p className="mt-2 text-green-600 font-semibold text-lg">
                🎁 Free Classes for 15 Days
              </p>
            </div>

            {/* Right Side - Countdown + Button */}
            <div className="flex flex-col justify-between items-center w-full md:w-auto mt-4 md:mt-0">
              <p className="text-red-600 font-bold mb-4">⏳ {timeLeft}</p>
              <button
                onClick={() => navigate("/register")}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded shadow-lg transition bounce-btn"
              >
                Register Now
              </button>
            </div>
            </div>
            </div>
        {/* <HighlightCourseCard/> */}

        {/* New Services Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Our Comprehensive Career Support Services
        </h2>

        {/* Cards Section */}
        <div className="space-y-12">
          {cards.map((card, index) => (
            <div key={index} id={card.id}>
              <Card
                img={card.img}
                title={card.title}
                description={card.description}
                listItems={card.listItems}
                link={card.link}
                reverse={index % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({ text, targetId }) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollToSection}
      className="bg-blue-50 border border-blue-300 px-4 flex items-center justify-center text-center shadow-sm text-sm font-medium text-blue-800 w-48 min-h-[80px] hover:bg-blue-100 transition"
    >
      {text}
    </button>
  );
}

function FlowArrow({ direction, mobile, desktop }) {
  const arrowSymbol = direction === "right" ? "➡" : "⬇";

  return (
    <>
      {mobile && (
        <div className="md:hidden text-blue-500 text-lg">{arrowSymbol}</div>
      )}
      {desktop && (
        <div className="hidden md:block text-blue-500 text-lg">{arrowSymbol}</div>
      )}
    </>
  );
}

function Card({ img, title, description, listItems, link, reverse }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-stretch shadow-lg overflow-hidden`}
    >
      <div className="md:w-1/2">
        <img
          src={img}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </div>

      <div className="md:w-1/2 bg-gray-50 p-4 relative flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <ul className="text-gray-700 text-sm space-y-2 mb-6">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-4 h-4" /> {item}
            </li>
          ))}
        </ul>
        <Link
          to={link}
          className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800"
          title="Read More"
        >
          <ArrowRightCircle size={20} />
        </Link>
      </div>
    </div>
  );
}

export default WhyDataArtisan;
