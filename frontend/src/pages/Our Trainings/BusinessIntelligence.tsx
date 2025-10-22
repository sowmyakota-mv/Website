import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function BusinessIntelligence() {
  return (
    <section id="our-services/business-intelligence" className="w-full bg-slate-50 text-gray-900 -mb-12">

      {/* Hero */}
      <ScrollAnimation animation="fadeInDown">
        <div className="bg-gradient-to-r from-indigo-50 via-white to-slate-100 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Business Intelligence</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
            Transform data into actionable insights. Learn to design data models, build dashboards, and implement ETL pipelines for enterprise analytics.
          </p>
        </div>
      </ScrollAnimation>

      {/* About */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans Business Intelligence Bootcamp</strong> teaches you how to turn raw data into meaningful insights that drive decision-making.
            You’ll master data modeling, ETL/ELT processes, visualization techniques, and dashboard creation using top BI tools.
          </p>
          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            This course balances theory with hands-on labs. Learn to handle large datasets, create dashboards for executives, and build KPIs to monitor performance across departments.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
        <div className="bg-indigo-50 py-16 px-6 rounded-2xl shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">What you’ll learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-slate-700">
              {[
                "Data modeling: Star and snowflake schemas",
                "ETL/ELT pipelines for data integration",
                "Data warehouse patterns and architecture",
                "Dashboard design and best practices (Power BI, Tableau)",
                "KPIs, metrics, and self-service analytics",
                "Performance tuning and optimization",
                "Storytelling with data to drive decisions"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-2 hover:text-slate-900 transition-colors">
            <span className="text-slate-900 font-bold">•</span>
            <span>{item}</span>
          </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Course Modules (Sample)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Module 1 — Foundations & Data Modeling",
                desc: "Understand BI fundamentals, schemas, and relational modeling.",
                points: ["Dimensional modeling", "Star & snowflake schemas", "ER diagrams and relationships"]
              },
              {
                title: "Module 2 — ETL / ELT",
                desc: "Design data pipelines for integration and transformation.",
                points: ["Data ingestion & cleaning", "Batch & real-time ETL pipelines", "Scheduling and automation tools"]
              },
              {
                title: "Module 3 — Visualization & Dashboards",
                desc: "Turn data into interactive dashboards.",
                points: ["Power BI, Tableau basics and advanced features", "Designing dashboards for executives and teams", "KPI tracking & real-time reporting"]
              },
              {
                title: "Module 4 — Advanced Analytics",
                desc: "Data-driven decision-making techniques.",
                points: ["Data storytelling", "Predictive analytics basics", "Performance tuning and optimization"]
              }
            ].map((mod, i) => (
              <article key={i} className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
                <h3 className="text-xl font-semibold mb-2 text-indigo-800">{mod.title}</h3>
                <p className="text-slate-700 mb-2">{mod.desc}</p>
                <ul className="list-disc list-inside text-slate-700">
                  {mod.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools & Stack */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
        <div className="max-w-6xl mx-auto px-6 py-16 bg-indigo-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Power BI", "Tableau", "SQL", "Python (Pandas/NumPy)", "ETL tools", "Snowflake", "BigQuery", "Excel"].map((t, i) => (
              <div key={i} className="rounded-lg border p-4 text-center bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
                {t}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Projects */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16 bg-indigo-100 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Hands-on Projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
            {[
              "Build executive dashboards with KPIs for a sample enterprise.",
              "ETL pipelines from multiple data sources into a data warehouse.",
              "Predictive analytics on sales and marketing data.",
              "Full BI workflow from raw data to insights and dashboards."
            ].map((p, i) => (
              <li key={i} className="rounded-lg p-4 border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
                <strong>{i === 3 ? "Capstone:" : "Project:"}</strong> {p}
              </li>
            ))}
          </ul>
        </div>
      </ScrollAnimation>

      {/* Career Paths */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Career Paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["Business Intelligence Analyst","Data Analyst","Analytics Consultant","Data Engineer","Reporting Specialist","Dashboard Developer"].map((role, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-md text-center font-semibold hover:shadow-xl hover:scale-105 transition transform">
                {role}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* FAQ */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.2}>
  <div className="max-w-6xl mx-auto px-6 py-16 bg-indigo-50 rounded-2xl">
    <h2 className="text-3xl font-bold mb-6 text-slate-900">FAQ</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {[
        {
          q: "Who should take this course?",
          a: "Aspiring BI analysts, data enthusiasts, or professionals needing analytics skills."
        },
        {
          q: "Prerequisites?",
          a: "Basic SQL and Excel recommended. Python is optional."
        },
        {
          q: "Certification & projects?",
          a: "Certificate upon completion with hands-on projects for portfolio showcase."
        },
        {
          q: "How long is the course?",
          a: "The course runs for 12 weeks with a mix of live sessions and labs."
        },
        {
          q: "Are there live sessions?",
          a: "Yes, live instructor-led sessions are included alongside self-paced material."
        },
        {
          q: "Is prior programming required?",
          a: "Basic programming knowledge is helpful but not mandatory."
        },
        {
          q: "What tools will I use?",
          a: "Power BI, Tableau, SQL, Python, and ETL tools will be covered."
        },
        {
          q: "Will I get mentorship?",
          a: "Yes, mentors will guide you through projects and answer queries."
        },
        {
          q: "Is this suitable for career switchers?",
          a: "Absolutely! The course is designed for both beginners and professionals looking to upskill."
        }
      ].map((faq, i) => (
        <details key={i} className="p-4 bg-white rounded border hover:shadow-md transition">
          <summary className="font-semibold cursor-pointer">{faq.q}</summary>
          <p className="mt-2 text-slate-700">{faq.a}</p>
        </details>
      ))}
    </div>
  </div>
</ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.4}>
        <div className="bg-indigo-100 text text-center py-20 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Advance Your Career in BI</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join live labs, hands-on projects, and mentorship to become a skilled BI professional.
          </p>
          <Link to="/register" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition transform hover:scale-105">
            Enroll Now
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  );
}
