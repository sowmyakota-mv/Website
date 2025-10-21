import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";

const appDevSections = [
  {
    title: "Next-Generation Application Development",
    desc: "We build future-ready applications that scale seamlessly with your business growth.",
    imageUrl: "/application.jpg",
    points: [
      "Agile development processes for rapid delivery",
      "Use of modern front-end & back-end stacks",
      "Focus on scalable and robust systems",
      "Customizable solutions per business need",
      "User-centric design philosophy"
    ],
  },
  {
    title: "Custom Engineering & Integration",
    desc: "Tailor-made application designs built on open standards-based systems with smooth third-party integrations.",
    imageUrl: "/custom-app.jpg",
    points: [
      "Custom apps using popular frameworks",
      "Legacy system integration",
      "Secure and well-documented codebase",
      "On-premise or cloud-ready",
      "Multi-platform development support"
    ],
  },
  {
    title: "Robust Application Maintenance",
    desc: "Keep your mission-critical systems running with proactive monitoring, debugging, and optimization.",
    imageUrl: "/robust.jpg",
    points: [
      "Error tracking and issue resolution",
      "Version upgrades and migration",
      "24/7 technical support",
      "Legacy modernization",
      "Continuous performance optimization"
    ],
  },
  {
    title: "System Integration & Enterprise Mobility",
    desc: "Seamlessly connect systems and enable secure enterprise mobility across devices.",
    imageUrl: "/system-app.jpg",
    points: [
      "End-to-end system integration",
      "Cross-platform mobile support",
      "API-driven architecture",
      "Real-time data flow",
      "Enhanced collaboration tools"
    ],
  },
  {
    title: "UX/UI Transformation for Growth",
    desc: "Intuitive and data-driven designs that improve engagement, productivity, and brand presence.",
    imageUrl: "/ui-ux.jpg",
    points: [
      "User-focused design systems",
      "Brand-aligned visual consistency",
      "Streamlined workflows",
      "Continuous feedback loop",
      "Performance-focused UX"
    ],
  },
];

const ApplicationDevelopmentPage = () => {
  return (
    <section id="application-development" className="bg-white py-24 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-6xl font-extrabold text-indigo-900 mb-6">
          Application Development
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Empower your business with intelligent, scalable, and future-ready applications designed for performance, flexibility, and innovation.
        </p>
      </div>

      {/* Card Grid Layout */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {appDevSections.map((section, idx) => (
          <ScrollAnimation key={idx} animation="fadeInUp">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="w-full h-56 rounded-t-2xl overflow-hidden">
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-700 mb-5 flex-grow">{section.desc}</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default ApplicationDevelopmentPage;
