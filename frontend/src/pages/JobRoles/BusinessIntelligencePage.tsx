import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";

const BIsections = [
  {
    title: "Overview of Business Intelligence",
    paragraphs: [
      "Business Intelligence (BI) empowers organizations to make data-driven decisions by transforming raw data into actionable insights.",
      "By leveraging tools like Power BI and Tableau, BI enables comprehensive analysis, reporting, and visualization tailored to industries such as healthcare, finance, and retail.",
      "It fosters a culture of self-service analytics, ensuring valuable insights are accessible throughout the organization.",
    ],
    points: [
      "Develop company-wide data-driven procedures.",
      "Manage and explore data effortlessly.",
      "Provide actionable insights for decision-making.",
      "Enhance analytics with modern BI tools.",
      "Support operational effectiveness across industries.",
    ],
    imageUrl: "/bi.jpg",
    imageAlt: "Business Intelligence Overview",
    hasImage: true,
  },
  {
    title: "BI Consulting and Strategy",
    paragraphs: [
      "Reliable data analysis and reporting require expert delivery and ongoing support.",
      "Our BI consulting services guide organizations through modernization of analytics tools and infrastructure, ensuring smooth transitions to data-centric workflows.",
      "We act as your knowledgeable partner for BI solutions that foster growth and efficiency.",
    ],
    points: [
      "Modernize legacy analytics systems.",
      "Implement scalable BI architectures.",
      "Optimize data workflows for faster insights.",
      "Ensure sustainable BI deployment and adoption.",
      "Partner for continuous BI enhancement.",
    ],
    imageUrl: "/bi-consulting.jpg",
    imageAlt: "BI Consulting and Strategy",
    hasImage: true,
  },
  {
    title: "Core BI Services",
    paragraphs: [
      "Our BI services encompass data integration (ETL), in-memory analytics, and custom reporting tailored to your business needs.",
      "Through advanced analytics capabilities, we enable organizations to extract timely insights that drive performance and profitability.",
      "Our expertise bridges technology and business goals for impactful data utilization.",
    ],
    points: [
      "End-to-end data integration and transformation.",
      "Responsive, custom-tailored reporting.",
      "Real-time analytics for fast decision making.",
      "Data quality assurance and governance.",
      "Business outcome-focused BI solutions.",
    ],
    hasImage: false,
  },
  {
    title: "Benefits of Business Intelligence",
    points: [
      "Accelerated decision-making and strategy alignment.",
      "Improved operational and financial performance.",
      "Enhanced data transparency and accessibility.",
      "Integration of BI across diverse business units.",
      "Competitive advantage through informed actions.",
    ],
    hasImage: false,
    isBenefits: true,
  },
];

const BusinessIntelligencePage = () => {
  return (
    <section className="w-full text-gray-800 pb-20">
      {/* Hero Section with Modern Gradient */}
      <div className="w-full h-[60vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-500 via-cyan-400 to-pink-500 animate-gradient-x">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_60%)]"></div>
        <ScrollAnimation animation="fadeInDown">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Business Intelligence
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInUp" delay="200">
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Empower your organization with data-driven insights, modern analytics, and
            strategic intelligence to make smarter, faster decisions.
          </p>
        </ScrollAnimation>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24 mt-20">
        {BIsections.map((section, idx) => {
          if (section.isBenefits) {
            return (
              <ScrollAnimation key={idx} animation="fadeInUp">
                <div className="relative bg-gradient-to-tr from-sky-100 via-white to-indigo-50 rounded-3xl p-16 shadow-2xl border border-blue-100 text-center">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-12">
                    {section.title}
                  </h2>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-left">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="bg-white/70 backdrop-blur-md rounded-2xl p-6 text-gray-900 font-semibold shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            );
          }

          return (
            <ScrollAnimation key={idx} animation="fadeInUp">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center rounded-3xl shadow-lg p-10 border border-gray-100 bg-white hover:shadow-2xl transition-all duration-500`}
              >
                {section.hasImage && (
                  <div
                    className={`${
                      idx % 2 === 0 ? "md:order-1" : "md:order-2"
                    } relative overflow-hidden rounded-2xl`}
                  >
                    <img
                      src={section.imageUrl}
                      alt={section.imageAlt}
                      className="w-full h-80 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                  </div>
                )}

                <div
                  className={`space-y-6 ${
                    section.hasImage
                      ? idx % 2 === 0
                        ? "md:order-2"
                        : "md:order-1"
                      : "col-span-2 text-center"
                  }`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((para, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed text-lg">
                      {para}
                    </p>
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
      </div>
    </section>
  );
};

export default BusinessIntelligencePage;
