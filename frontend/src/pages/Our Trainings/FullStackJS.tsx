import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function FullStackJS() {
  const modules = [
    {
      title: "Module 1 : Frontend with React",
      points: ["React hooks & component-driven design", "State management & context API", "SSR/SSG with Next.js or similar frameworks"]
    },
    {
      title: "Module 2 : Backend with Node.js",
      points: ["REST and GraphQL API development", "Express.js routing and middleware", "Authentication and JWT implementation"]
    },
    {
      title: "Module 3 : Database Integration",
      points: ["Relational & non-relational databases", "Data modeling, schemas, and indexing", "Query optimization and transactions"]
    },
    {
      title: "Module 4 : Deployment & DevOps",
      points: ["Containerization using Docker", "CI/CD pipeline setup and automation", "Application monitoring, logging, and security best practices"]
    }
  ];

  const tools = ["React","Node.js","Express","GraphQL","MongoDB","PostgreSQL","Docker","VS Code"];
  const projects = [
    "Build a full-stack e-commerce app with user authentication.",
    "Develop a real-time chat app using WebSocket.",
    "Implement a content management system (CMS) with React and Node.",
    "Deploy a full-stack SaaS application to cloud with CI/CD pipeline."
  ];
  const careers = ["Full-Stack Developer","Frontend Developer","Backend Developer","React Developer","Node.js Developer","Software Engineer"];
  const faqs = [
    { q: "Do I need prior JavaScript knowledge?", a: "Basic programming knowledge recommended; course covers full stack JavaScript from frontend to backend." },
    { q: "Which databases are covered?", a: "MongoDB, PostgreSQL, and relational/non-relational data management." },
    { q: "Certification?", a: "Certificate on completion with portfolio of projects for job readiness." },
    { q: "Course duration?", a: "Typically 12–20 weeks depending on project pace." },
    { q: "Is mentorship provided?", a: "Yes, mentors guide learners through real-world projects." },
    { q: "Can I join remotely?", a: "Yes, sessions and labs are available online." },
    { q: "Job support?", a: "Career guidance, resume review, and interview prep are included." },
    { q: "Prerequisites?", a: "No formal prerequisites; familiarity with basic programming helpful." },
    { q: "Are projects hands-on?", a: "Yes, all modules include real-world, practical projects." }
  ];

  return (
    <section id="our-services/full-stack-js" className="w-full bg-white text-gray-900 -mb-12">

      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Full-Stack JavaScript</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Learn the modern JavaScript stack: Node.js backend, React frontend, databases, APIs, and deployment pipelines.
        </p>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            This course covers end-to-end web development using JavaScript for both frontend and backend. 
            You will learn to create production-grade applications, implement authentication, optimize performance, and deploy applications using modern DevOps pipelines.
          </p>
          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            Emphasis is on hands-on projects, real-world case studies, and a capstone app that demonstrates your skills across the full stack.
          </p>
        </div>
      </ScrollAnimation>

      {/* WHAT YOU’LL LEARN */}
<ScrollAnimation animation="fadeInUp">
  <section className="relative py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          What You’ll Learn
        </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Frontend development with React (hooks, context, SSR/SSG)",
          "Backend development with Node.js, Express, and REST/GraphQL APIs",
          "Database integration: SQL & NoSQL (MongoDB, PostgreSQL)",
          "Authentication & Authorization strategies",
          "Testing: unit, integration, E2E",
          "Deployment: containerization with Docker, CI/CD pipelines",
          "Performance optimization and security best practices",
          "Responsive and accessible web design",
          "Version control and Git workflows",
        ].map((item, i) => (
          <div
            key={i}
            className="relative p-6 bg-white/5 border border-white/10 rounded-2xl shadow-md hover:shadow-xl hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-white">
  {i + 1}
</div>
              <p className="text-slate-200 font-medium group-hover:text-white">
                {item}
              </p></div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </section>
</ScrollAnimation>

{/* COURSE MODULES */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-900 text-center">Course Modules</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {modules.map((mod, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1 * i}>
          <article className="rounded-2xl border p-6 bg-gradient-to-tr from-white to-orange-50 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">
            <h3 className="text-xl font-semibold mb-2">{mod.title}</h3>
            <ul className="list-disc list-inside text-slate-700">
              {mod.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </article>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* TOOLS & FRAMEWORKS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-900 text-center">Tools & Frameworks</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {tools.map((t, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1 * i}>
          <div className="p-5 bg-gradient-to-tr from-white to-orange-50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 text-center font-semibold text-slate-800">
            {t}
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* PROJECTS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
  <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-orange-50 to-white rounded-2xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-900 text-center">Hands-on Projects</h2>
    <ul className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1 * i}>
          <li className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 text-slate-800 font-medium">
            <strong>{i === projects.length - 1 ? "Capstone:" : "Project:"}</strong> {p}
          </li>
        </ScrollAnimation>
      ))}
    </ul>
  </section>
</ScrollAnimation>

{/* CAREER PATHS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-900 text-center">Career Paths</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {careers.map((role, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1 * i}>
          <div className="rounded-2xl border p-6 bg-gradient-to-tr from-white to-orange-50 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 text-center font-semibold text-slate-800">
            {role}
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* FAQ */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
  <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-orange-50 to-white rounded-2xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-orange-900 text-center">FAQ</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {faqs.map((faq, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1 * i}>
          <details className="p-6 bg-white rounded-2xl border shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer duration-300">
            <summary className="font-semibold text-slate-800">{faq.q}</summary>
            <p className="mt-2 text-slate-700">{faq.a}</p>
          </details>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.2}>
        <div className="bg-gradient-to-r from-orange-100 to-orange-400 text text-center py-20 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Become a Full-Stack JavaScript Developer</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Master frontend and backend JavaScript development and deploy production-ready applications.</p>
          <Link to="/register" className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 hover:scale-105 transition transform duration-300">Enroll Now</Link>
        </div>
      </ScrollAnimation>
    </section>
  );
}
