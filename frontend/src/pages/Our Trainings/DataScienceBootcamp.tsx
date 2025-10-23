// src/pages/courses/DataScienceBootcamp.jsx
import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function DataScienceBootcamp() {
  return (
    <section id="our-services/data-science" className="w-full bg-white text-gray-900 -mb-12">
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

      {/* WHAT YOU’LL LEARN */}
<ScrollAnimation animation="fadeInUp">
  <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          What You’ll Learn
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Master the complete data science journey — from coding to AI deployment — 
          through interactive, project-driven training.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Python for Data Science",
          "Statistics & Probability Essentials",
          "Data Wrangling & Cleaning",
          "Data Visualization (Seaborn, Plotly)",
          "Machine Learning & AI Models",
          "End-to-End Project Deployment",
          "Feature Engineering & Tuning",
          "MLOps & Cloud Concepts",
          "Real-World Capstone Projects",
        ].map((topic, i) => (
          <div
            key={i}
            className="relative p-6 bg-white/5 border border-white/10 rounded-2xl shadow-md hover:shadow-xl hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-white">
                {i + 1}
              </div>
              <p className="text-slate-200 font-medium group-hover:text-white">
                {topic}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</ScrollAnimation>

{/* TOOLS & TECHNOLOGIES */}
<ScrollAnimation animation="fadeInUp">
  <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-slate-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">
        Tools & Technologies
      </h2>
      <p className="text-slate-600 max-w-3xl mx-auto mb-12">
        Learn and apply the tools used by top data science and AI professionals worldwide.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {[
          "Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Matplotlib",
          "SQL", "Power BI", "AWS", "GCP", "Flask", "GitHub",
        ].map((tool, i) => (
          <div
            key={i}
            className="p-5 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <p className="font-semibold text-slate-800">{tool}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</ScrollAnimation>

{/* WHY CHOOSE DATA ARTISANS */}
<ScrollAnimation animation="fadeInUp">
  <section className="relative py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          Why Choose Data Artisans
        </h2>
        <p className="text-indigo-200 max-w-2xl mx-auto">
          We craft a hands-on, mentor-driven learning path designed to transform learners into industry-ready data experts.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Expert Mentorship",
            desc: "Learn directly from seasoned professionals with real-world experience.",
          },
          {
            title: "Hands-on Projects",
            desc: "Build confidence with practical, job-oriented project work.",
          },
          {
            title: "Career Support",
            desc: "Get placement prep, resume reviews, and mock interviews.",
          },
          {
            title: "Flexible Access",
            desc: "Access your content anytime with lifetime updates.",
          },
          {
            title: "Global Community",
            desc: "Join a network of mentors, peers, and alumni for continuous growth.",
          },
          {
            title: "Future-Ready Skills",
            desc: "Stay ahead with the latest in AI, data science, and cloud tech.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-indigo-100 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</ScrollAnimation>

{/* CAREER OUTCOMES */}
<ScrollAnimation animation="fadeInUp">
  <section className="py-24 bg-gradient-to-b from-white via-blue-50/50 to-indigo-50 text-center">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        Career Outcomes
      </h2>
      <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
        Step confidently into data-driven careers across industries worldwide.
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        {[
          "Data Analyst",
          "Data Scientist",
          "ML Engineer",
          "BI Developer",
          "AI Engineer",
          "Data Engineer",
        ].map((role, i) => (
          <div
            key={i}
            className="px-8 py-4 rounded-full bg-white border border-slate-200 shadow-md text-slate-800 font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  </section>
</ScrollAnimation>

      {/* CTA */}
      <div className="bg-indigo-200 text-white text-center py-20">
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
