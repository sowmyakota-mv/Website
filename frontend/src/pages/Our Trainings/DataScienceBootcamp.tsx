// src/pages/courses/DataScienceBootcamp.jsx
import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function DataScienceBootcamp() {
  return (
    <section id="our-services/data-science" className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-white py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
          Data Science Bootcamp
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Master the complete Data Science lifecycle — from data wrangling to
          machine learning and deployment — through real-world projects and
          guided mentorship by industry experts.
        </p>
      </div>

      {/* Overview */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About the Program
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans Data Science Bootcamp</strong> is a
            comprehensive, hands-on training program that transforms learners
            into job-ready data professionals. It covers the full journey — from
            understanding data to building production-ready machine learning
            models. Through interactive sessions, projects, and mentor support,
            you’ll gain both the technical expertise and analytical mindset
            required to solve real business problems using data.
          </p>

          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            This program is ideal for aspiring Data Analysts, Data Scientists,
            and ML Engineers who want to build strong foundations in Python,
            statistics, data visualization, and applied machine learning. You’ll
            also learn model deployment and MLOps fundamentals — a rare skill
            combination that makes you stand out in the job market.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">
              What You’ll Learn
            </h2>
            <ul className="space-y-4 text-slate-700 text-lg">
              <li>• Python programming for data analysis and automation</li>
              <li>• Statistics, probability, and hypothesis testing for insights</li>
              <li>• Data wrangling and cleaning using Pandas & NumPy</li>
              <li>• Data visualization using Matplotlib, Seaborn, and Plotly</li>
              <li>• Machine learning algorithms — supervised & unsupervised</li>
              <li>• Model evaluation, optimization, and tuning</li>
              <li>• Feature engineering and dimensionality reduction</li>
              <li>• End-to-end ML project pipeline and MLOps concepts</li>
              <li>• Deployment using Flask, FastAPI, and cloud platforms</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools and Technologies */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & Technologies Covered</h2>
          <p className="text-slate-700 mb-6 text-lg">
            You’ll gain hands-on experience with a wide range of industry-grade tools
            and frameworks used by data science teams worldwide:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-slate-800">
            {[
              "Python",
              "NumPy",
              "Pandas",
              "Matplotlib",
              "Seaborn",
              "Scikit-Learn",
              "TensorFlow",
              "SQL",
              "Flask",
              "AWS / GCP",
              "Jupyter Notebooks",
              "Git & GitHub",
            ].map((tool, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Why Choose Data Artisans */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-gradient-to-r from-slate-50 to-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Why Choose Data Artisans for Data Science
            </h2>
            <p className="text-slate-700 text-lg mb-6">
              Our training is not just about learning — it’s about transformation.
              Data Artisans helps you build real projects, gain practical exposure,
              and become confident enough to face real-world challenges.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 text-lg">
              <li>✅ Instructor-led live sessions with real-time Q&A</li>
              <li>✅ Hands-on projects using real datasets</li>
              <li>✅ Regular quizzes and assignments to track progress</li>
              <li>✅ 1-on-1 mentorship and placement guidance</li>
              <li>✅ Access to recorded sessions and materials</li>
              <li>✅ Resume and LinkedIn profile building workshops</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Career Path */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career Outcomes</h2>
          <p className="text-slate-700 text-lg mb-8">
            After completing this program, you’ll be prepared for roles such as:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-800">
            {[
              "Data Analyst",
              "Machine Learning Engineer",
              "Data Scientist",
              "Business Intelligence Analyst",
              "AI Engineer",
              "Data Engineer (entry-level)",
            ].map((role, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-slate-50 p-6 text-center font-semibold shadow-sm hover:shadow-md transition"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-indigo-600 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Start Your Data Science Journey Today!</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Learn the tools, build the skills, and launch your career with confidence.
          Enroll in our Data Science Bootcamp to unlock your full potential.
        </p>
        <Link
          to="/register"
          className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
