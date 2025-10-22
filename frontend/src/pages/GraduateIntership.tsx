import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { CheckCircle } from "lucide-react";

const GraduateInternship = () => {
  const sections = [
    {
      title: "Kickstart Your Career",
      content: `Become part of our Graduate Internship program and start your professional journey with real-world experience. SysGlobal was founded in 2010 to provide innovative software and network solutions to companies worldwide. Our internship program is designed to give students and young professionals a strong foundation for their future career.`,
      points: [
        "Gain practical experience in an international business consultancy.",
        "Work alongside experienced professionals in software, networking, and business solutions.",
        "Build a strong portfolio of real projects.",
        "Enhance soft skills like communication, teamwork, and problem-solving."
      ],
      imageUrl: "/internship.png",
    },
    {
      title: "Our Internship Program",
      content: `Our internship program is structured to provide maximum learning, exposure, and professional growth.`,
      points: [
        "Hands-on exposure to international business practices.",
        "Experience diverse client projects across industries.",
        "Develop technical and analytical skills relevant to your career path.",
        "Opportunity to participate in strategy and planning discussions."
      ],
      modern: true,
    },
    {
      title: "Why Join Us",
      content: `Interns are considered valuable assets at SysGlobal. We ensure every intern contributes meaningfully while gaining professional insight.`,
      points: [
        "Collaborate on real client projects and initiatives.",
        "Contribute to brand development and internal process improvement.",
        "Gain exposure to international problem-solving techniques.",
        "Receive constructive feedback and mentorship from experts."
      ],
      modern: true,
    },
    {
      title: "Internship Experience",
      content: `Our interns come from diverse academic and professional backgrounds, bringing fresh perspectives to the team.`,
      points: [
        "Fields: International Marketing, Computer Science, Cybersecurity, B2B Sales, Digital Marketing, Mechanical, Psychology, Economy, Life Science, and more.",
        "Students from top universities across the UK, Europe, and beyond.",
        "Exposure to real-world projects and client engagements.",
        "Understanding corporate culture and operational workflows."
      ],
      modern: true,
    },
    {
      title: "How We Support Interns",
      content: `We provide a structured approach to ensure you succeed and learn throughout your internship.`,
      points: [
        "Onboarding: Introduction to the company, team, and processes.",
        "Structured Training: Learning modules and technical workshops.",
        "Handholding: Guidance from mentors and team leads.",
        "Mentorship: Regular check-ins and career advice.",
        "Real-time Project Work: Contribution to live client projects.",
        "Integration into Core Team: Participate in team meetings and strategy sessions.",
        "Performance Reviews: Constructive feedback to improve skills and employability."
      ],
      imageUrl: "/internship1.jpg",
    },
  ];

  // Filter modern sections for flex layout
  const modernSections = sections.filter((section) => section.modern);

  return (
    <section className="relative bg-gray-50 text-gray-900 overflow-hidden -mb-12">
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden mt-12">
        <img
          src="/internship-hero1.jpg"
          alt="Graduate Internship"
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* First Section (non-modern) */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="relative w-full py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8">
          {sections[0].imageUrl && (
            <div className="md:w-2/4 transition-transform duration-700">
              <img
                src={sections[0].imageUrl}
                alt={sections[0].title}
                className="rounded-2xl shadow-xl w-full h-auto object-contain"
              />
            </div>
          )}
          <div className={`md:w-1/2 ${sections[0].imageUrl ? 'md:pl-12 mt-8 md:mt-0' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              {sections[0].title}
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">{sections[0].content}</p>
            <ul className="space-y-2">
              {sections[0].points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modern Sections in Flex Row */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="flex flex-col md:flex-row gap-6 px-6 md:px-12 py-16 justify-center">
          {modernSections.map((section, idx) => (
            <div
  key={idx}
  className="bg-gradient-to-br from-blue-300 to-indigo-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform transform hover:scale-110 duration-300 flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">{section.title}</h2>
              <p className="text-gray-800 text-base md:text-lg mb-4">{section.content}</p>
              <ul className="space-y-2">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Last Section (non-modern) */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="relative w-full py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8">
          {sections[4].imageUrl && (
            <div className="md:w-2/4 transition-transform duration-700">
              <img
                src={sections[4].imageUrl}
                alt={sections[4].title}
                className="rounded-2xl shadow-xl w-full h-auto object-contain"
              />
            </div>
          )}
          <div className={`md:w-1/2 ${sections[4].imageUrl ? 'md:pl-12 mt-8 md:mt-0' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              {sections[4].title}
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">{sections[4].content}</p>
            <ul className="space-y-2">
              {sections[4].points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="text-blue-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <div className="py-24 text-center bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200">
        <h3 className="text-4xl font-bold mb-4 text-blue-900">
          Apply for the Graduate Internship Today
        </h3>
        <p className="text-gray-800 text-lg max-w-2xl mx-auto mb-8">
          Take the first step toward a professional career with hands-on experience, mentorship, and real project exposure.
        </p>
        <a
          href="/register"
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition transform hover:scale-105"
        >
          Apply Here
        </a>
      </div>
    </section>
  );
};

export default GraduateInternship;
