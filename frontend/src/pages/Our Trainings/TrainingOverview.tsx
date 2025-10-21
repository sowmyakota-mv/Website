// src/pages/TrainingOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/animation/ScrollAnimation";

export default function TrainingOverview() {
  return (
    <section id="overview" className="w-full bg-white text-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Learn, Build, and Get Job-Ready with Data Artisans
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          At <strong>Data Artisans</strong>, we empower students and professionals to bridge
          the gap between learning and employability through hands-on training,
          real-world projects, and personalized mentoring.
        </p>
      </div>

      {/* About our approach */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Training Philosophy
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            We believe that true learning happens through <strong>practical application</strong>.
            That’s why every course at Data Artisans combines theory with live projects,
            case studies, and problem-solving sessions. Our trainers are experienced industry
            professionals who share insights that go beyond textbooks — preparing you
            for challenges faced in real business environments.
          </p>

          <p className="mt-6 text-slate-700 leading-relaxed text-lg">
            Whether you’re starting your career, upskilling to move ahead, or transforming
            your team’s capabilities, we tailor our learning paths to meet your goals.
            From Data Engineering to Cloud Solutions, every program ensures hands-on
            exposure and personalized feedback.
          </p>
        </div>
      </ScrollAnimation>

      {/* Key benefits */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Hands-On Projects",
              desc: "Each course includes practical exercises and live case studies to simulate real-world experience.",
            },
            {
              title: "Mentorship & Guidance",
              desc: "Learn from certified trainers and industry experts who guide you throughout your journey.",
            },
            {
              title: "Career-Focused Curriculum",
              desc: "Our syllabus aligns with the latest tools and practices used in leading tech companies.",
            },
            {
              title: "Mock Interviews & Resume Prep",
              desc: "We help you prepare for interviews, refine your resume, and build your LinkedIn presence.",
            },
            {
              title: "Job Placement Support",
              desc: "Gain access to placement drives, partner company referrals, and ongoing career assistance.",
            },
            {
              title: "Continuous Learning Community",
              desc: "Join a network of learners, mentors, and alumni to keep learning beyond your course.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border p-6 bg-gradient-to-tr from-slate-50 to-white shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="text-center py-20 bg-gradient-to-r from-slate-50 to-white">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Ready to Start Your Journey with Data Artisans?
        </h3>
        <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
          Explore our specialized training programs, designed to make you industry-ready
          with practical learning and career outcomes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/our-services"
            className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:opacity-90"
          >
            View All Courses
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 rounded-full border border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
