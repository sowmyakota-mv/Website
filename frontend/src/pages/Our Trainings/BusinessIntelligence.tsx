import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function BusinessIntelligence() {
  return (
    <section id="our-services/business-intelligence" className="w-full bg-white text-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Business Intelligence</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Transform data into actionable insights. Learn to design data models, build dashboards, and implement ETL pipelines for enterprise analytics.
        </p>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
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
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What you’ll learn</h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>• Data modeling: Star and snowflake schemas</li>
              <li>• ETL/ELT pipelines for data integration</li>
              <li>• Data warehouse patterns and architecture</li>
              <li>• Dashboard design and best practices (Power BI, Tableau)</li>
              <li>• KPIs, metrics, and self-service analytics</li>
              <li>• Performance tuning and optimization</li>
              <li>• Storytelling with data to drive decisions</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules / Weekly breakdown */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Course Modules (Sample)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 1 — Foundations & Data Modeling</h3>
              <p className="text-slate-700 mb-2">Understand BI fundamentals, schemas, and relational modeling.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Dimensional modeling</li>
                <li>Star & snowflake schemas</li>
                <li>ER diagrams and relationships</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 2 — ETL / ELT</h3>
              <p className="text-slate-700 mb-2">Design data pipelines for integration and transformation.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Data ingestion & cleaning</li>
                <li>Batch & real-time ETL pipelines</li>
                <li>Scheduling and automation tools</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 3 — Visualization & Dashboards</h3>
              <p className="text-slate-700 mb-2">Turn data into interactive dashboards.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Power BI, Tableau basics and advanced features</li>
                <li>Designing dashboards for executives and teams</li>
                <li>KPI tracking & real-time reporting</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 4 — Advanced Analytics</h3>
              <p className="text-slate-700 mb-2">Data-driven decision-making techniques.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Data storytelling</li>
                <li>Predictive analytics basics</li>
                <li>Performance tuning and optimization</li>
              </ul>
            </article>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools & Stack */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Power BI", "Tableau", "SQL", "Python (Pandas/NumPy)", "ETL tools", "Snowflake", "BigQuery", "Excel"].map((t, i) => (
              <div key={i} className="rounded-lg border p-3 text-center bg-white shadow-sm">{t}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Projects */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Hands-on Projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Build executive dashboards with KPIs for a sample enterprise.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> ETL pipelines from multiple data sources into a data warehouse.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Predictive analytics on sales and marketing data.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Capstone:</strong> Full BI workflow from raw data to insights and dashboards.
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["Business Intelligence Analyst","Data Analyst","Analytics Consultant","Data Engineer","Reporting Specialist","Dashboard Developer"].map((role, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-sm text-center font-semibold">{role}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* FAQ */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Who should take this course?</summary>
              <p className="mt-2 text-slate-700">Aspiring BI analysts, data enthusiasts, or professionals needing analytics skills.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Prerequisites?</summary>
              <p className="mt-2 text-slate-700">Basic SQL and Excel recommended. Python is optional.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Certification & projects?</summary>
              <p className="mt-2 text-slate-700">Certificate upon completion with hands-on projects for portfolio showcase.</p>
            </details>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-indigo-200 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Advance Your Career in BI</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Join live labs, hands-on projects, and mentorship to become a skilled BI professional.</p>
        <Link to="/register" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition">Enroll Now</Link>
      </div>
    </section>
  );
}
