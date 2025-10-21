import React from "react";
import {
  FaDatabase,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaBolt,
  FaBrain,
} from "react-icons/fa";
import ScrollAnimation from "@/animation/ScrollAnimation"; // ✅ import animation

const sections = [
  {
    title: "What is Data Engineering?",
    paragraphs: [
      "Data Engineering is the foundational practice of designing and maintaining systems that process large volumes of data. It encompasses creating data pipelines, data warehouses, and architectures necessary for analytics and machine learning.",
      "It ensures data quality and reliability, enabling data scientists and business leaders to derive meaningful insights from accurate and accessible data.",
      "With the explosion of data in enterprises, data engineering has become crucial for effective decision-making and operational efficiency.",
    ],
    points: [
      "Designs and builds data infrastructure.",
      "Ensures data quality and availability.",
      "Enables large-scale data processing.",
      "Integrates various data sources.",
      "Supports analytics and AI initiatives.",
    ],
    imageUrl: "/data-what.jpg",
    imageAlt: "Data Engineering Concept",
    layout: "image-left",
  },
  {
    title: "Who is it For?",
    paragraphs: [
      "This course is tailored for IT professionals, software developers, and tech enthusiasts interested in data-centric roles.",
      "It suits both beginners aiming to enter the data engineering field and experienced engineers seeking specialization.",
      "The field demands problem solvers passionate about handling complex data architectures and workflows.",
    ],
    points: [
      "Beginners seeking a career in data.",
      "Developers building scalable data systems.",
      "Tech professionals interested in big data.",
      "Engineers focused on cloud and pipelines.",
      "Data enthusiasts aiming for analytics roles.",
    ],
    imageUrl: "/data-who.jpg",
    imageAlt: "Who is it for image",
    layout: "image-right",
  },
];

const types = [
  {
    icon: <FaDatabase />,
    label: "Data Pipeline Development",
    desc: "Focuses on designing and automating data pipelines that move information efficiently between systems.",
  },
  {
    icon: <FaCogs />,
    label: "ETL Processes",
    desc: "Handles extraction, transformation, and loading of raw data into structured formats for analytics.",
  },
  {
    icon: <FaCloud />,
    label: "Cloud Data Engineering",
    desc: "Leverages cloud platforms like AWS, Azure, and GCP to build scalable and secure data solutions.",
  },
  {
    icon: <FaChartLine />,
    label: "Data Warehousing",
    desc: "Creates centralized storage solutions enabling fast querying and business intelligence analytics.",
  },
  {
    icon: <FaBolt />,
    label: "Real-time Streaming",
    desc: "Focuses on real-time data ingestion and event-driven systems for instant insights.",
  },
  {
    icon: <FaBrain />,
    label: "AI-Ready Data Systems",
    desc: "Builds robust data pipelines that feed machine learning and AI systems effectively.",
  },
];

const benefits = [
  {
    title: "High Career Demand",
    desc: "Data engineers are among the most sought-after professionals in the tech world with a strong career trajectory.",
  },
  {
    title: "Competitive Salaries",
    desc: "Top-paying positions in global companies across industries due to the critical nature of data management.",
  },
  {
    title: "Cutting-edge Technologies",
    desc: "Work with tools like Spark, Kafka, and Snowflake to handle massive data streams and analytics.",
  },
  {
    title: "Key Role in AI & Analytics",
    desc: "Form the backbone of every AI, ML, and BI initiative by ensuring data accuracy and accessibility.",
  },
  {
    title: "Global Opportunities",
    desc: "Data engineering roles are available in every industry—finance, healthcare, e-commerce, and more.",
  },
];

const DataEngineeringPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      {/* Full-width banner */}
      <ScrollAnimation direction="up">
        <div className="w-full h-72 md:h-96 relative rounded-3xl overflow-hidden shadow-2xl -mt-8">
          <img
            src="/data-logo2.jpg"
            alt="Data Engineering Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </ScrollAnimation>

      {/* Basic Sections */}
      {sections.map((section, idx) => (
        <ScrollAnimation
          key={idx}
          direction={idx % 2 === 0 ? "left" : "right"}
          delay={0.2 * idx}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              section.layout === "image-right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="relative">
              <img
                src={section.imageUrl}
                alt={section.imageAlt}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">{section.title}</h2>
              {section.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      ))}

      {/* Types Section with Flip Cards */}
      <ScrollAnimation direction="up">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Types of Data Engineering
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 perspective-1000">
            {types.map((type, i) => (
              <div
                key={i}
                className="relative w-full h-40 group [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)]"
              >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-lg p-6 backface-hidden">
                  <div className="text-5xl text-blue-600 mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {type.label}
                  </h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl shadow-xl p-6 [transform:rotateY(180deg)] backface-hidden">
                  <p className="text-sm leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Benefits Section */}
      <ScrollAnimation direction="up">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Benefits of Data Engineering
          </h2>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, i) => (
              <ScrollAnimation key={i} direction="up" delay={i * 0.1}>
                <div className="group relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {benefit.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default DataEngineeringPage;
