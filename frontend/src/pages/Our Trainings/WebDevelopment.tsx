import React from "react"; 
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
  return (
    <section id="our-services/web-development" className="w-full bg-slate-50 text-gray-900 -mb-12">
      
      {/* Hero Section */}
      <ScrollAnimation animation="fadeInDown">
        <div className="bg-gradient-to-r from-orange-100 via-yellow-50 to-white py-20 text-center">
          <h1 className="text-5xl font-extrabold text-orange-900 mb-4">
            Web Development
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-orange-700 leading-relaxed">
            Build powerful, modern, and responsive web applications from scratch.
            Learn front-end, backend, APIs, and deployment with hands-on projects
            that make you job-ready.
          </p>
        </div>
      </ScrollAnimation>

      {/* About Section */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-orange-900">About the Program</h2>
          <p className="text-orange-700 text-lg leading-relaxed">
            The <strong>Data Artisans Web Development Bootcamp</strong> is a
            complete full-stack journey designed for beginners and professionals
            who want to create scalable, high-performance web applications.
            You’ll start with HTML, CSS, and JavaScript, progress to React and
            Node.js, and end with deploying production-ready apps to the cloud.
          </p>

          <p className="text-orange-700 text-lg mt-6 leading-relaxed">
            You’ll gain in-depth knowledge of UI/UX design principles,
            responsive web design, REST/GraphQL APIs, authentication,
            databases, and performance optimization — everything required to
            succeed as a modern web developer.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
        <div className="bg-gradient-to-tr from-yellow-50 via-orange-50 to-white py-16 px-6 rounded-2xl shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-orange-900">What You’ll Learn</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-blue-700">
              {[
                "HTML5, CSS3, and modern JavaScript (ES6+)",
                "Responsive and accessible web design",
                "Frontend frameworks — React.js & Vue.js",
                "Backend development using Node.js and Express",
                "Working with RESTful APIs and GraphQL",
                "Authentication, authorization, and JWT",
                "Databases — SQL (PostgreSQL) and NoSQL (MongoDB)",
                "Version control and Git workflows",
                "CI/CD pipelines and cloud deployment",
                "Testing, debugging, and optimization"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-2 hover:text-blue-900 transition-colors">
            <span className="text-blue-900 font-bold">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools Section */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-orange-900">Tools & Frameworks Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-orange-800">
            {[
              "HTML5", "CSS3", "JavaScript", "React.js",
              "Node.js", "Express", "MongoDB", "PostgreSQL",
              "Git & GitHub", "Docker", "AWS / Vercel / Netlify", "CI/CD Tools"
            ].map((tool, i) => (
              <div key={i} className="rounded-xl border p-4 bg-gradient-to-tr from-white to-yellow-50 shadow-md hover:shadow-xl hover:scale-105 transition transform">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Why Choose Us */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
        <div className="bg-gradient-to-r from-white to-orange-50 py-16 px-6 rounded-2xl shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-orange-900">Why Learn Web Development at Data Artisans</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-orange-700">
              {[
                "Expert trainers with real-world project experience",
                "Learn both front-end and backend skills",
                "Project-based learning — build 3+ live applications",
                "Interview preparation and portfolio building",
                "Internship and placement support",
                "Career mentorship & resume guidance"
              ].map((item, i) => (
                <li key={i} className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-lg hover:bg-yellow-50 transition transform hover:-translate-y-1">✅ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-orange-900">Career Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {[
              "Frontend Developer", "Backend Developer", "Full-Stack Developer",
              "UI Developer", "Web App Engineer", "React Developer"
            ].map((role, i) => (
              <div key={i} className="rounded-2xl border bg-gradient-to-tr from-white to-orange-50 p-6 font-semibold shadow-md hover:shadow-xl hover:scale-105 transition transform">
                {role}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
        <div className="bg-gradient-to-r from-orange-100 via-yellow-200 to-orange-100 text-black text-center py-20 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Start Your Web Development Career</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Learn to design, build, and deploy modern web applications with
            confidence. Enroll in our Web Development Bootcamp today.
          </p>
          <Link
            to="/register"
            className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-yellow-50 transition transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </div>
      </ScrollAnimation>

    </section>
  );
}
