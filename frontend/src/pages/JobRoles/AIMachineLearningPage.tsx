import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";

const AIsections = [
  {
    title: "What is Artificial Intelligence?",
    paragraphs: [
      "Artificial Intelligence (AI) is a transformative technology that mimics human intelligence processes to automate and enhance decision-making.",
      "It encompasses a broad range of capabilities including machine learning, natural language processing, speech recognition, and image processing.",
      "AI applications enable businesses to optimize operations, deliver personalized experiences, and create innovative products."
    ],
    points: [
      "Simulates human cognitive functions.",
      "Enables process automation and efficiency.",
      "Powerful insights through data-driven decision making.",
      "Improves customer engagement and service.",
      "Supports innovation across industries."
    ],
    imageUrl: "/ai.jpg",
    imageAlt: "Concept of Artificial Intelligence"
  },
  {
    title: "Machine Learning: Enabling Smarter Systems",
    paragraphs: [
      "Machine Learning, a subset of AI, empowers machines to learn from data without explicit programming.",
      "It identifies complex patterns and trends, enabling predictive analytics and adaptive systems that improve over time.",
      "Businesses leverage ML for applications such as fraud detection, recommendation engines, and automated customer support."
    ],
    points: [
      "Learns patterns from historical data.",
      "Drives predictive analytics and forecasting.",
      "Enables autonomous decision-making.",
      "Supports scalable intelligent applications.",
      "Improves accuracy with continuous learning."
    ],
    imageUrl: "/ml.jpg",
    imageAlt: "Machine learning process"
  },
  {
    title: "AI-Driven Chatbots and Virtual Assistants",
    paragraphs: [
      "AI-powered chatbots simulate human conversation to provide responsive customer support round the clock.",
      "These virtual assistants utilize cognitive computing to understand intent, learn from interactions, and improve user experience.",
      "Enterprises deploy chatbots for efficient engagement, reducing costs while increasing customer satisfaction."
    ],
    points: [
      "Deliver natural, real-time interactions.",
      "Handle frequent queries autonomously.",
      "Integrate with multiple communication channels.",
      "Enhance customer engagement and retention.",
      "Continuously learn to improve responses."
    ],
    imageUrl: "/ai-chatbox.jpg",
    imageAlt: "AI chatbot interactions"
  },
  {
    title: "Predictive Analytics and NLP Services",
    paragraphs: [
      "Predictive analytics uses AI and ML to analyze current and historical data to forecast future outcomes.",
      "Natural Language Processing (NLP) enables machines to comprehend and interact using human languages.",
      "Together, these technologies facilitate smarter business decisions, enhanced customer insights, and improved automation."
    ],
    points: [
      "Forecast business trends and customer behavior.",
      "Automate data-driven decision-making processes.",
      "Extract meaningful insights from text data.",
      "Enable voice-activated commands and analytics.",
      "Improve customer sentiment analysis."
    ],
    imageUrl: "/ai-services.jpg",
    imageAlt: "Predictive analytics and NLP"
  },
  {
    title: "AI Consulting for Strategic Advantage",
    paragraphs: [
      "Our AI consulting services help businesses identify opportunities to incorporate AI into their operations.",
      "We design tailored AI solutions encompassing machine learning, computer vision, and conversational AI.",
      "By partnering with us, organizations can enhance efficiency, innovate faster, and maintain a competitive edge."
    ],
    points: [
      "Assess AI readiness and strategy.",
      "Custom AI solution design and development.",
      "Integration with existing IT infrastructure.",
      "Ongoing support and optimization.",
      "Drive business transformation with AI."
    ],
    imageUrl: "/ai-strategy.jpg",
    imageAlt: "AI consulting and strategy"
  }
];

const AIMachineLearningPage = () => {
  return (
    <section id="ai-machine-learning" className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-[85vh] text-center">
        <img
          src="/ai-hero1.jpg"
          alt="AI & Machine Learning"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight z-10">
          AI & Machine Learning
        </h1>
        <p className="text-white/90 text-xl md:text-2xl mt-6 max-w-2xl z-10">
          Transform your business through intelligent automation, predictive analytics, and next-gen insights.
        </p>
      </div>

      {/* Section Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-48">
        {AIsections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          const animation = isEven ? "fadeInLeft" : "fadeInRight";

          return (
            <ScrollAnimation key={idx} animation={animation}>
              <div
                className={`flex flex-col md:flex-row items-center gap-20 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <div className="overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={section.imageUrl}
                      alt={section.imageAlt}
                      className="w-full h-[480px] object-contain transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                    {section.title}
                  </h2>

                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="text-lg text-gray-600 leading-relaxed">
                      {para}
                    </p>
                  ))}

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-800 text-base font-medium"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-indigo-600"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </section>
  );
};

export default AIMachineLearningPage;
