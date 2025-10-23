import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function AIMachineLearning() {
  return (
    <section id="our-services/ai-ml" className="w-full bg-slate-50 text-gray-900 -mb-12">

      {/* Hero */}
      <ScrollAnimation animation="fadeInDown">
        <div className="bg-gradient-to-r from-sky-50 via-white to-slate-50 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-sky-900 mb-4">
            AI & Machine Learning
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-sky-700 leading-relaxed">
            Deep dive into machine learning algorithms, model building, MLOps and
            production AI. Learn to design, train, evaluate, and deploy real-world
            models and pipelines.
          </p>
        </div>
      </ScrollAnimation>

      {/* About */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-sky-900">About the Program</h2>
          <p className="text-sky-700 text-lg leading-relaxed">
            The <strong>Data Artisans AI & ML Bootcamp</strong> gives you end-to-end
            expertise: from exploratory data analysis to advanced neural networks and
            production deployment. The course balances theory (math & algorithms)
            with hands-on labs using industry tools and cloud-managed ML services.
          </p>
          <p className="text-sky-700 text-lg mt-6 leading-relaxed">
            You’ll learn how to preprocess messy data, engineer features, train models
            (classical & deep learning), evaluate results, and deploy models reliably
            using MLOps practices (pipelines, versioning, monitoring).
          </p>
        </div>
      </ScrollAnimation>

     {/* WHAT YOU’LL LEARN */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
  <section className="relative py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          What You’ll Learn
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Gain hands-on, industry-ready web development skills — front-end, back-end, database integration, and deployment.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Frontend development with React (hooks, context, SSR/SSG)",
          "Backend development with Node.js, Express, and REST/GraphQL APIs",
          "Database integration: SQL & NoSQL (MongoDB, PostgreSQL)",
          "Authentication & Authorization strategies",
          "Testing: unit, integration, E2E",
          "Deployment: containerization with Docker, CI/CD pipelines",
          "Performance optimization and security best practices",
          "Responsive and accessible web design",
          "Version control and Git workflows"
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
              </p>
              </div>
              </div>
        ))}
      </div>
    </div>
  </section>
</ScrollAnimation>

{/* COURSE MODULES */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-sky-900 text-center">Course Modules</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Module 1 : Frontend Mastery",
          desc: "React, JSX, state management, context, hooks, SSR/SSG.",
          points: ["Components & Props","React Router & SPA","Responsive Design & CSS frameworks"]
        },
        {
          title: "Module 2 : Backend & APIs",
          desc: "Node.js, Express, REST & GraphQL APIs, authentication.",
          points: ["Express server setup","Routing & middleware","JWT auth & OAuth"]
        },
        {
          title: "Module 3 : Databases",
          desc: "SQL and NoSQL databases integration and CRUD operations.",
          points: ["PostgreSQL fundamentals","MongoDB & Mongoose","Schema design & indexing"]
        },
        {
          title: "Module 4 : Testing & Deployment",
          desc: "Unit testing, integration, containerization, and CI/CD pipelines.",
          points: ["Jest & Testing Library","Docker setup & deployment","CI/CD with GitHub Actions"]
        },
        {
          title: "Module 5 : Advanced Topics",
          desc: "Performance optimization, security, and cloud deployment.",
          points: ["Web performance best practices","Security & HTTPS","AWS / Vercel / Netlify deployment"]
        },
        {
          title: "Module 6 : Capstone Project",
          desc: "Build a full-stack application end-to-end using learned technologies.",
          points: ["Front-end + Back-end integration","Database & Auth implementation","Deployment to cloud"]
        }
      ].map((mod, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <article className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-2 text-sky-900">{mod.title}</h3>
            <p className="text-sky-700 mb-2">{mod.desc}</p>
            <ul className="list-disc list-inside text-sky-700">
              {mod.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </article>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
        <div className="bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-100 text text-center py-20 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Master AI & Machine Learning</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join a hands-on bootcamp with mentorship, live labs, and production projects to accelerate your career.
          </p>
          <Link to="/register" className="px-8 py-3 bg-white text-sky-700 font-semibold rounded-full hover:bg-cyan-50 transition transform hover:scale-105">
            Enroll Now
          </Link>
        </div>
      </ScrollAnimation>

    </section>
  );
}
