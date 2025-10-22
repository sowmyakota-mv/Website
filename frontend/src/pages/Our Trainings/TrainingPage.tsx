// src/pages/TrainingsPage.jsx
import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "data-science",
    title: "Data Science Bootcamp",
    short:
      "Comprehensive program covering statistics, Python, data wrangling, visualization, and ML pipelines.",
    detail:
      "Learn end-to-end data science: data ingestion, cleaning, feature engineering, exploratory analysis, model building (supervised & unsupervised), model evaluation and deployment. Hands-on projects include forecasting, classification, and a capstone that demonstrates production-ready workflows.",
  },
  {
    id: "web-development",
    title: "Web Development",
    short:
      "From HTML/CSS to modern front-end frameworks and backend APIs—build production web apps.",
    detail:
      "Covers accessible, responsive UI with modern frameworks (React/Vue), component-driven design, REST/GraphQL APIs, authentication, state management, testing, CI/CD and deployment. Emphasis on practical projects — full-stack apps, e-commerce prototypes and performance optimization.",
  },
  {
    id: "full-stack-js",
    title: "Full-Stack JavaScript",
    short:
      "Modern JavaScript stack: Node.js backend, React frontend, databases and deployment pipelines.",
    detail:
      "Create production-grade applications using Node/Express, GraphQL/REST, React with hooks, SSR/SSG options, authentication patterns, testing and containerized deployments. Includes real-world case studies and a capstone app.",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    short:
      "Deep dive into ML algorithms, model training, deployment and MLOps practices for production AI.",
    detail:
      "Covering neural networks, transfer learning, NLP basics, computer vision, and model serving. Learn to productionize ML with model versioning, pipelines (Data -> Train -> Validate -> Deploy), monitoring and governance. Hands-on labs use popular libraries and managed ML services.",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    short:
      "Foundations of defensive and offensive security: threat modeling, monitoring and incident response.",
    detail:
      "Study network security, endpoint protection, SIEM basics, vulnerability scanning, secure coding practices and red-team exercises. Learn to build detection rules, triage incidents and run post-incident reviews. Includes compliance and risk management fundamentals.",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    short:
      "Data modeling, ETL/ELT, dashboards and self-service analytics with tools like Power BI and Tableau.",
    detail:
      "Topics include dimensional modeling, star/snowflake schemas, data warehouse patterns, ELT pipelines, dashboard best practices, performance tuning and delivering actionable insights. Real projects include KPIs, executive dashboards and departmental analytics.",
  },
  {
    id: "devops",
    title: "DevOps & SRE",
    short:
      "Automation, CI/CD, observability and SRE practices to ship software faster and reliably.",
    detail:
      "Hands-on with pipelines, containerization, infra-as-code, monitoring (metrics/logs/tracing), incident management and runbooks. Focus on lifecycle automation, reliability engineering, SLIs/SLOs and postmortems.",
  },
  {
    id: "ux-ui",
    title: "UX / UI Design",
    short:
      "Human-centered design, prototyping, usability testing and design systems for product teams.",
    detail:
      "Learn design thinking, wireframing, high-fidelity prototyping, accessibility and handoff workflows with developers. Build a design system and conduct user tests to validate product decisions.",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    short:
      "Build performant iOS & Android apps using native or cross-platform frameworks (React Native / Flutter).",
    detail:
      "Covers mobile architecture, offline-first patterns, native modules, app performance, store publishing, CI for mobile and mobile testing strategies. Project work includes feature-rich apps and publishing pipelines.",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    short:
      "Design, deploy and scale cloud systems using AWS/Azure/GCP — infrastructure as code and cost management.",
    detail:
      "Topics include cloud architecture patterns, serverless, containers & Kubernetes, IaC (Terraform), cloud networking and security, monitoring, and cost optimization. Real labs cover multi-region deployment, autoscaling, and disaster recovery configurations.",
  },
];

const TrainingsPage = () => {
  return (
    <section id="our-services" className="w-full bg-white text-gray-900 -mb-12">
      {/* Hero / Intro */}
      <ScrollAnimation animation="fadeInDown">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our Services
          </h1>

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Data Artisans delivers industry-focused training programs that bridge the gap between academic learning and real-world practice.
            Our training portfolio is designed for career starters, professionals looking to upskill, and teams seeking targeted, hands-on learning.
            Each course mixes conceptual foundations with practical labs, real projects and career support so learners leave job-ready.
          </p>

          <div className="mt-8">
            <Link
              to="/overview"
              className="inline-block px-6 py-3 rounded-full bg-slate-900 text-white font-semibold shadow hover:opacity-95 transition"
            >
              Find out more
            </Link>
          </div>
        </div>
      </ScrollAnimation>

      {/* Services teaser row (short cards) */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 justify-center">
          {[
            {
              title: "UX / Design",
              desc: "Bring ideas to digital life: prototyping, design systems, accessibility and user testing.",
              link: "/our-services/ux-ui",
              gradient: "bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200",
            },
            {
              title: "Managed IT Services",
              desc: "IT consulting, project delivery and ongoing managed support to keep systems healthy and performant.",
              link: "/our-services/full-stack-js",
              gradient: "bg-gradient-to-tr from-green-200 via-teal-200 to-cyan-200",
            },
            {
              title: "Disaster Recovery",
              desc: "Policies, tooling and procedures to ensure rapid recovery and business continuity.",
              link: "/our-services/cloud-computing",
              gradient: "bg-gradient-to-tr from-yellow-200 via-orange-200 to-red-200",
            },
          ].map((card, i) => (
            <ScrollAnimation key={i} animation={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}>
              <div className={`${card.gradient} group relative rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex-1`}>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-700 mb-4">{card.desc}</p>
                <Link to={card.link} className="inline-block text-sm font-semibold text-sky-600 hover:underline">
                  + Learn More
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>

      {/* Trending courses grid (detailed) */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <ScrollAnimation animation="fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Trending / Main Courses</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <ScrollAnimation key={course.id} animation={i % 2 === 0 ? "fadeInLeft" : "fadeInRight"}>
              <article className="group relative rounded-2xl p-6 bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
                </div>

                <p className="text-sm text-slate-700 mt-3">{course.short}</p>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to={`/our-services/${course.id}`}
                    className="text-sm font-semibold text-sky-600 hover:underline"
                  >
                    + Learn More
                  </Link>

                  <span className="text-xs text-slate-400">Duration: 8–16 weeks • Live labs</span>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center bg-gradient-to-r from-slate-50 to-white rounded-2xl ">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to find out more?</h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            If you want course syllabi, upcoming schedules, corporate training options or cohort dates — reach out and we'll tailor a plan for your goals.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/register" className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default TrainingsPage;