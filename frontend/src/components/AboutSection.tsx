import { CheckCircle, ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";

function WhyDataArtisan() {
  const cards = [
    {
      img: "/training.jpg",
      title: "Expert Course Training",
      description: "Gain in-demand skills with our industry-oriented curriculum:",
      listItems: ["SQL", "Power BI", "Azure", "and more..."],
      link: "training",
    },
    {
      img: "/cv-writing.jpg",
      title: "CV Writing & Guaranteed Picks",
      description: "Stand out from the competition with:",
      listItems: ["Professionally crafted CVs", "Guaranteed job Interview calls"],
      link: "cv-writing",
    },
    {
      img: "/interview.jpg",
      title: "Mock Interviews",
      description: "Prepare like a pro with our expert-driven mock sessions.",
      listItems: [
        "Real interview scenarios",
        "Feedback from industry experts",
        "Confidence building",
      ],
      link: "mock-interviews",
    },
    {
      img: "/marketing.jpg",
      title: "Dedicated Marketing Team",
      description: "Our team ensures your CV reaches the right recruiters.",
      listItems: [
        "Active job Marketing",
        "Network with top employers",
        "Personalized support",
      ],
      link: "marketing-team",
    },
  ];

  return (
    <section id="services" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Why <span className="text-blue-700">Data Artisans</span>?
        </h2>

        {/* Flowchart Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 gap-4">
            <FlowStep text="Student Consultation" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="Abroad Planning & University Selection" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="Master's Completion Abroad" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="3-Month Tech Training" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="High-Quality CV Preparation" />
            <FlowArrow direction="down" mobile />
            <FlowArrow direction="right" desktop />
            <FlowStep text="Job Applications & Placement Support" />
          </div>
        </div>

        {/* Cards Section */}
        <div className="space-y-12">
          {cards.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
              listItems={card.listItems}
              link={card.link}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowStep({ text }) {
  return (
    <div className="bg-blue-50 border border-blue-300 rounded-xl px-4 flex items-center justify-center text-center shadow-sm text-sm font-medium text-blue-800 w-48 min-h-[80px]">
      {text}
    </div>
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
      } items-stretch rounded-xl shadow-lg overflow-hidden`}
    >
      <div className="md:w-1/2">
        <img
          src={img}
          alt={title}
          className="w-full h-60 object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
        />
      </div>

      <div className="md:w-1/2 bg-gray-50 p-4 relative flex flex-col justify-center rounded-b-xl md:rounded-r-xl md:rounded-b-none">
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
