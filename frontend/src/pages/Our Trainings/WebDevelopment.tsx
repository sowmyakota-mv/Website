import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
  return (
    <section id="our-services/web-development" className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 via-yellow-50 to-white py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
          Web Development
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Build powerful, modern, and responsive web applications from scratch.
          Learn front-end, backend, APIs, and deployment with hands-on projects
          that make you job-ready.
        </p>
      </div>

      {/* About Section */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans Web Development Bootcamp</strong> is a
            complete full-stack journey designed for beginners and professionals
            who want to create scalable, high-performance web applications.
            You’ll start with HTML, CSS, and JavaScript, progress to React and
            Node.js, and end with deploying production-ready apps to the cloud.
          </p>

          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            You’ll gain in-depth knowledge of UI/UX design principles,
            responsive web design, REST/GraphQL APIs, authentication,
            databases, and performance optimization — everything required to
            succeed as a modern web developer.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You’ll Learn</h2>
            <ul className="space-y-4 text-lg text-slate-700">
              <li>• HTML5, CSS3, and modern JavaScript (ES6+)</li>
              <li>• Responsive and accessible web design</li>
              <li>• Frontend frameworks — React.js & Vue.js</li>
              <li>• Backend development using Node.js and Express</li>
              <li>• Working with RESTful APIs and GraphQL</li>
              <li>• Authentication, authorization, and JWT</li>
              <li>• Databases — SQL (PostgreSQL) and NoSQL (MongoDB)</li>
              <li>• Version control and Git workflows</li>
              <li>• CI/CD pipelines and cloud deployment</li>
              <li>• Testing, debugging, and optimization</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools Section */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & Frameworks Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-slate-800">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Git & GitHub",
              "Docker",
              "AWS / Vercel / Netlify",
              "CI/CD Tools",
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

      {/* Why Choose Us */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-gradient-to-r from-white to-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Learn Web Development at Data Artisans</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-slate-700">
              <li>✅ Expert trainers with real-world project experience</li>
              <li>✅ Learn both front-end and backend skills</li>
              <li>✅ Project-based learning — build 3+ live applications</li>
              <li>✅ Interview preparation and portfolio building</li>
              <li>✅ Internship and placement support</li>
              <li>✅ Career mentorship & resume guidance</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {[
              "Frontend Developer",
              "Backend Developer",
              "Full-Stack Developer",
              "UI Developer",
              "Web App Engineer",
              "React Developer",
            ].map((role, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-slate-50 p-6 font-semibold shadow-sm hover:shadow-md transition"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-orange-200 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Start Your Web Development Career</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Learn to design, build, and deploy modern web applications with
          confidence. Enroll in our Web Development Bootcamp today.
        </p>
        <Link
          to="/register"
          className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
