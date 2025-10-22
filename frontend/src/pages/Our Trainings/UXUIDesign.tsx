import React from "react"; 
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function UXUIDesign() {
  const modules = [
    {
      title: "Module 1 — UX Foundations & Research",
      desc: "Understand UX principles, user needs, and research techniques.",
      points: ["User interviews & surveys","Personas & user journeys","Competitor & market analysis"]
    },
    {
      title: "Module 2 — Interaction Design & Wireframing",
      desc: "Design interfaces and interactions for optimal user experience.",
      points: ["Low-fidelity wireframes","Information architecture","Interaction patterns & flows"]
    },
    {
      title: "Module 3 — High-Fidelity UI & Prototyping",
      desc: "Bring designs to life with detailed UI and interactive prototypes.",
      points: ["Figma / Adobe XD / Sketch tools","Interactive prototypes","Design consistency & style guides"]
    },
    {
      title: "Module 4 — Usability Testing & Design Systems",
      desc: "Validate and maintain your design for long-term success.",
      points: ["User testing & feedback analysis","Accessibility compliance","Creating & managing a design system"]
    }
  ];

  const tools = ["Figma","Adobe XD","Sketch","InVision","Miro","Zeplin","Principle","Canva"];
  const projects = [
    "Build a user persona and journey map for a real product.",
    "Design a low-fidelity wireframe for a web or mobile app.",
    "High-fidelity interactive prototype with feedback iterations.",
    "End-to-end UX/UI design: research, wireframe, prototype, and usability report."
  ];
  const careers = ["UX Designer","UI Designer","Interaction Designer","Product Designer","Visual Designer","UX Researcher"];
  const faqs = [
    { q: "Do I need prior design experience?", a: "Basic computer skills recommended; the course covers design fundamentals." },
    { q: "What tools are used?", a: "Figma, Adobe XD, Sketch, InVision, Miro, Zeplin." },
    { q: "Certification?", a: "Certificate on completion with portfolio-ready projects." },
    { q: "Course duration?", a: "Typically 8–16 weeks depending on live labs and project pace." },
    { q: "Is mentorship provided?", a: "Yes, mentors guide learners throughout hands-on projects." },
    { q: "Are projects real-world?", a: "All projects simulate real client scenarios for practical experience." },
    { q: "Can I join remotely?", a: "Yes, sessions and labs are available online." },
    { q: "Job support?", a: "Career guidance, resume review, and interview prep are included." },
    { q: "Prerequisites?", a: "No formal prerequisites; familiarity with basic digital tools is helpful." }
  ];

  return (
    <section id="our-services/ux-ui" className="w-full bg-slate-50 text-gray-900 -mb-12">

      {/* Hero */}
      <ScrollAnimation animation="fadeInDown">
        <div className="bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-4">UX / UI Design</h1>
          <p className="max-w-3xl mx-auto text-lg text-indigo-700 leading-relaxed">
            Master human-centered design, wireframing, prototyping, and usability testing to create seamless digital experiences.
          </p>
        </div>
      </ScrollAnimation>

      {/* About */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">About the Program</h2>
          <p className="text-indigo-700 text-lg leading-relaxed">
            The <strong>Data Artisans UX / UI Design Course</strong> equips learners with practical design skills that bridge user needs with business goals. 
            You’ll explore user research, interaction design, wireframing, high-fidelity prototyping, accessibility, and design systems.
          </p>
          <p className="text-indigo-700 text-lg mt-6 leading-relaxed">
            This program emphasizes hands-on practice: build design systems, run usability tests, and iterate designs based on real user feedback.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 py-16 px-6 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-indigo-900">What you’ll learn</h2>
            <ul className="space-y-3 text-lg text-indigo-700">
              <li>• Design Thinking methodology for problem-solving</li>
              <li>• User research and persona creation</li>
              <li>• Wireframing low-fidelity prototypes</li>
              <li>• High-fidelity UI prototyping</li>
              <li>• Accessibility and inclusive design best practices</li>
              <li>• Building and maintaining a design system</li>
              <li>• Usability testing and feedback analysis</li>
              <li>• Handoff workflows for developers</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">Course Modules (Sample)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((mod, i) => (
              <ScrollAnimation key={i} animation="fadeInUp" delay={0.2 * i}>
                <article className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform duration-500">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-900">{mod.title}</h3>
                  <p className="text-indigo-700 mb-2">{mod.desc}</p>
                  <ul className="list-disc list-inside text-indigo-700">
                    {mod.points.map((p, idx) => <li key={idx}>{p}</li>)}
                  </ul>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((t, i) => (
              <div key={i} className="rounded-lg border p-4 text-center bg-gradient-to-tr from-purple-50 to-indigo-50 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">{t}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Projects */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">Hands-on Projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-indigo-700">
            {projects.map((p, i) => (
              <li key={i} className="rounded-lg p-4 border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">
                <strong>{i === projects.length-1 ? "Capstone:" : "Project:"}</strong> {p}
              </li>
            ))}
          </ul>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">Career paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {careers.map((role, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-gradient-to-tr from-purple-50 to-indigo-50 shadow-md hover:shadow-xl text-center font-semibold transition transform hover:scale-105 duration-300">{role}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* FAQ */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.2}>
        <div className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-indigo-900 text-center">FAQ</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {faqs.map((faq, i) => (
              <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
                <details className="p-4 bg-white rounded border shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer duration-300">
                  <summary className="font-semibold text-indigo-900">{faq.q}</summary>
                  <p className="mt-2 text-indigo-700">{faq.a}</p>
                </details>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.4}>
        <div className="bg-gradient-to-r from-pink-100 via-purple-200 to-indigo-300 text-black text-center py-20 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Build Your UX/UI Career</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Learn design thinking, prototyping, and user-centered design to create seamless experiences.</p>
          <Link to="/register" className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-pink-50 transition transform hover:scale-105 duration-300">Enroll Now</Link>
        </div>
      </ScrollAnimation>
    </section>
  );
}
