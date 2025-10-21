import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";

const ITstrategySections = [
  {
    title: "Comprehensive IT Strategy & Consulting",
    paragraphs: [
      "In today’s complex IT landscape, effective strategy and consulting are essential to streamline management and align technology with business growth.",
      "Our services focus on simplifying your IT infrastructure, reducing disruptions, and structuring a growth-oriented IT environment.",
      "We help turn technology challenges into opportunities through tailored approaches that support your enterprise vision."
    ],
  },
  {
    title: "Technology Consulting & Risk Management",
    paragraphs: [
      "Our technology consulting involves deep requirement analysis to recommend appropriate platforms and business models.",
      "We specialize in identifying, managing, and mitigating IT risks to protect your critical data and ensure compliance.",
      "Robust privacy and security frameworks form the backbone of reliable IT governance."
    ],
  },
  {
    title: "Business Process Analysis & Audits",
    paragraphs: [
      "We conduct end-to-end analysis of your business processes and IT infrastructure to identify inefficiencies and growth opportunities.",
      "Our audit teams help reduce compliance costs and prevent overdevelopment by thoroughly inspecting systems and tech assets.",
      "Actionable insights and roadmap development from these analyses drive your IT modernization."
    ],
  },
  {
    title: "Security Consulting & Lifecycle Forecasting",
    paragraphs: [
      "Our security consultants leverage best practices to identify threats and implement countermeasures, protecting enterprise assets.",
      "We monitor software lifecycles to extend operational longevity and proactively plan upgrades to sustain competitive advantage.",
      "Ensuring the integrity of IT environments strengthens both security and business continuity."
    ],
  }
];

const ITStrategyConsultingPage = () => {
  return (
    <section className="relative bg-gray-50 text-gray-900 overflow-hidden py-20">
      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-20">
        IT Strategy & Consulting
      </h1>

      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-2">
        {ITstrategySections.map((section, idx) => (
          <ScrollAnimation key={idx} animation="fadeInUp">
            <div className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-3xl shadow-xl p-10 md:p-16 hover:scale-105 transform transition-all duration-500">
              {/* Abstract floating shapes */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full ${idx % 2 === 0 ? "bg-blue-200" : "bg-cyan-200"} opacity-20 animate-pulse`}></div>
              <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full ${idx % 2 === 0 ? "bg-cyan-200" : "bg-blue-200"} opacity-20 animate-pulse`}></div>

              {/* Content */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">{section.title}</h2>
              {section.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-800 text-lg md:text-xl mb-4 leading-relaxed">{para}</p>
              ))}
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-24 py-20 text-center bg-gradient-to-r from-cyan-200 via-blue-100 to-indigo-200 rounded-3xl mx-6 md:mx-auto max-w-4xl shadow-lg">
        <h3 className="text-4xl font-bold mb-6 text-blue-900">
          Transform Your IT Strategy Today
        </h3>
        <p className="text-gray-800 text-lg max-w-2xl mx-auto mb-8">
          Partner with us to streamline your IT, reduce risks, and build a technology roadmap aligned with your business growth.
        </p>
        <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ITStrategyConsultingPage;
