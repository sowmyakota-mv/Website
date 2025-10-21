import React from "react"; 
import ScrollAnimation from "@/animation/ScrollAnimation";
import { CheckCircle } from "lucide-react";

const GraduateInternship = () => {
  const sections = [
    {
      title: "Kickstart Your Career",
      content: `Become part of our Graduate Internship program and start your professional journey with real-world experience.
SysGlobal was founded in 2010 to provide innovative software and network solutions to companies worldwide.
Our internship program is designed to give students and young professionals a strong foundation for their future career.`,
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
      imageUrl: "",
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
      imageUrl: "",
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
      imageUrl: "",
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

  return (
    <section className="relative bg-gray-50 text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden mt-12">
        <img
          src="/internship-hero.jpg"
          alt="Graduate Internship"
          className="w-full h-full object-contain object-center"
        />
      </div>

      {sections.map((section, idx) => (
        <ScrollAnimation key={idx} animation="fadeInUp" duration={0.8} delay={idx * 0.2}>
          <div className={`relative w-full py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center ${section.imageUrl ? '' : 'md:justify-start'} gap-8`}>
            {/* Image with slide animation */}
            {section.imageUrl && (
              <div className={`md:w-2/4 transition-transform duration-700 ${idx % 2 === 0 ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-8 md:opacity-100'}`}>
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  className="rounded-2xl shadow-xl w-full h-auto object-contain"
                />
              </div>
            )}

            {/* Content with fade & slide */}
            <div className={`md:w-1/2 ${section.imageUrl ? 'md:pl-12 mt-8 md:mt-0' : ''} transition-all duration-700 hover:scale-105`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                {section.title}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed mb-4">{section.content}</p>
              {section.points && (
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <ScrollAnimation key={i} animation="fadeInLeft" duration={0.6} delay={i * 0.1}>
                      <li className="flex items-start gap-2 text-gray-700 hover:text-blue-500 transition-colors duration-300">
                        <CheckCircle className="text-blue-500 mt-1" size={20} />
                        <span>{point}</span>
                      </li>
                    </ScrollAnimation>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </ScrollAnimation>
      ))}

      {/* CTA Section */}
      <div className="py-24 text-center bg-gradient-to-r from-blue-200 via-cyan-100 to-indigo-200">
        <h3 className="text-4xl font-bold mb-4 text-blue-900">
          Apply for the Graduate Internship Today
        </h3>
        <p className="text-gray-800 text-lg max-w-2xl mx-auto mb-8">
          Take the first step toward a professional career with hands-on experience, mentorship, and real project exposure.
        </p>
        <a
          href="/apply"
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition transform hover:scale-105"
        >
          Apply Here
        </a>
      </div>
    </section>
  );
};

export default GraduateInternship;
