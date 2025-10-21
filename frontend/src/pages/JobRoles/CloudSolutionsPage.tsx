import ScrollAnimation from "@/animation/ScrollAnimation";
import React from "react";

const cloudSections = [
  {
    title: "Cloud Computing Essentials",
    paragraphs: [
      "Cloud computing offers scalable and agile solutions by removing traditional server costs and allowing businesses to access on-demand computational, storage, and software services.",
      "It provides enterprises with increased agility, data availability, seamless access from any device, and significant cost savings compared to conventional infrastructure.",
      "Our mission is to customize cutting-edge cloud services to solve client challenges with easier deployment and automated cloud management."
    ],
    points: [
      "Eliminates upfront hardware investments.",
      "Enables rapid scaling of resources.",
      "Supports global business operations.",
      "Facilitates seamless application deployment.",
      "Promotes operational cost reductions."
    ],
    imageUrl: "/cloud-computing.jpg",
    imageAlt: "Cloud Computing Concept"
  },
  {
    title: "Cloud Application Development",
    paragraphs: [
      "Develop cloud-native applications that address complex business challenges efficiently and competitively.",
      "Our teams build scalable software solutions facilitating rapid growth and streamlined operations in the cloud landscape.",
      "We leverage modern cloud architecture principles tailored to your organization's unique requirements."
    ],
    points: [
      "Utilize serverless and microservices architectures.",
      "Build scalable, resilient, and maintainable solutions.",
      "Accelerate deployment cycles.",
      "Integrate advanced automation and CI/CD pipelines.",
      "Ensure seamless multi-cloud compatibility."
    ],
    imageUrl: "/cloud-app.jpg",
    imageAlt: "Cloud Application Development"
  },
  {
    title: "Cloud Migration & Security",
    paragraphs: [
      "Migrate your data seamlessly to preferred cloud platforms like AWS, Azure, or Google Cloud with comprehensive security, interoperability, and governance.",
      "Our cloud architects guarantee data privacy and integrity throughout the migration lifecycle.",
      "Additionally, our cybersecurity experts provide robust protection via vulnerability assessments, penetration testing, and compliance audits."
    ],
    points: [
      "Secure cloud data migration services.",
      "Compliance with international security standards.",
      "Continuous monitoring and threat mitigation.",
      "Risk reduction through professional governance.",
      "Support for hybrid and multi-cloud environments."
    ],
    imageUrl: "/cloud-security.jpg",
    imageAlt: "Cloud Migration and Security"
  },
  {
    title: "Cloud Management & AI Integration",
    paragraphs: [
      "Empower your infrastructure with precise cloud management strategies enabling efficient administrative control and monitoring.",
      "Leverage cloud AI and machine learning services using leading technology providers such as Google, Amazon, and Microsoft.",
      "Our solutions utilize pre-trained models to dramatically enhance predictive analytics and automation capabilities."
    ],
    points: [
      "Administrative cloud ecosystem control.",
      "Integration of AI/ML cloud services.",
      "Automated monitoring and scaling.",
      "Improved operational efficiency.",
      "Cutting edge technological applications."
    ],
    imageUrl: "/cloud-ai.jpg",
    imageAlt: "Cloud Management and AI"
  },
  {
    title: "Cloud Strategy & Consulting",
    paragraphs: [
      "Formulate and accelerate cloud adoption strategies that transform IT operations and reduce operational costs.",
      "Our consulting services guide clients to a future-ready cloud infrastructure aligned with business goals.",
      "We provide expert insights for sustained cloud success and innovation."
    ],
    points: [
      "Comprehensive cloud readiness assessments.",
      "Strategic roadmap development.",
      "Operational cost optimization.",
      "Cloud governance and compliance.",
      "Continuous innovation enablement."
    ],
    imageUrl: "/cloud-strategy.jpg",
    imageAlt: "Cloud Strategy and Consulting"
  }
];

const CloudSolutionsPage = () => {
  return (
    <section id="cloud-solutions" className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      <h1 className="text-5xl font-extrabold text-center text-sky-900 mb-16">
        Cloud Solutions
      </h1>

      {cloudSections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        const animation = isEven ? "fadeInLeft" : "fadeInRight";

        return (
          <ScrollAnimation key={idx} animation={animation}>
            <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Image with gradient overlay */}
              <div className={`md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl ${isEven ? "" : "md:order-2"}`}>
                <img
                  src={section.imageUrl}
                  alt={section.imageAlt}
                  className="w-full h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>

                {/* Floating Points */}
                <ul className="absolute top-4 left-4 space-y-2">
                  {section.points.slice(0, 3).map((point, i) => (
                    <li
                      key={i}
                      className="bg-white/80 backdrop-blur-md rounded-lg p-3 text-sm font-semibold shadow-lg"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content Card */}
              <div
                className={`md:w-1/2 bg-white rounded-3xl shadow-2xl p-10 space-y-6 -mt-16 md:-mt-0 ${isEven ? "" : "md:order-1"}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-sky-800">{section.title}</h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-lg">{para}</p>
                ))}

                <ul className="space-y-2 text-lg list-disc list-inside text-gray-800 font-medium">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        );
      })}
    </section>
  );
};
 export default CloudSolutionsPage