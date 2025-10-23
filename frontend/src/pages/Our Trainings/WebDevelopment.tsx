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
          Build modern, scalable web applications — mastering front-end, back-end, and deployment with real-world projects.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "HTML5, CSS3, and modern JavaScript (ES6+)",
          "Responsive and accessible web design",
          "Frontend frameworks — React.js & Vue.js",
          "Backend development using Node.js and Express",
          "Working with RESTful APIs and GraphQL",
          "Authentication and JWT Authorization",
          "Databases — SQL (PostgreSQL) & NoSQL (MongoDB)",
          "Version control and Git workflows",
          "CI/CD pipelines and cloud deployment", // Removed "Testing, debugging, and optimization" to make it 9 points
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
  </section>
</ScrollAnimation>

{/* TOOLS & FRAMEWORKS */}
<ScrollAnimation animation="fadeInUp">
  <section className="py-24 bg-gradient-to-b from-white via-yellow-50/50 to-orange-50/30">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        Tools & Frameworks Covered
      </h2>
      <p className="text-slate-600 max-w-3xl mx-auto mb-12">
        Work with modern tools and frameworks used in professional web development stacks.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
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
            className="p-5 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <p className="font-semibold text-slate-800">{tool}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</ScrollAnimation>

{/* WHY LEARN WEB DEVELOPMENT */}
<ScrollAnimation animation="fadeInUp">
  <section className="relative py-24 bg-gradient-to-r from-orange-700 via-orange-800 to-slate-900 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Why Learn Web Development at Data Artisans
        </h2>
        <p className="text-orange-100 max-w-2xl mx-auto">
          Learn through live projects, mentorship, and career guidance — designed to make you job-ready as a full-stack developer.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Expert Trainers",
            desc: "Learn from professionals working in top tech companies with years of real-world experience.",
          },
          {
            title: "Hands-on Learning",
            desc: "Gain confidence through projects that simulate real production environments.",
          },
          {
            title: "Full-Stack Mastery",
            desc: "Build both front-end and back-end skills with deep practical exposure.",
          },
          {
            title: "Career Support",
            desc: "Get guidance on interview prep, portfolios, and resume building.",
          },
          {
            title: "Internship Assistance",
            desc: "Access internship programs and placement opportunities post training.",
          },
          {
            title: "Community Learning",
            desc: "Collaborate and grow with a network of mentors and developers.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg"
          >
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-orange-100 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</ScrollAnimation>

{/* CAREER OPPORTUNITIES */}
<ScrollAnimation animation="fadeInUp">
  <section className="py-24 bg-gradient-to-b from-white via-yellow-50/50 to-orange-50/30 text-center">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        Career Opportunities
      </h2>
      <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
        Open doors to high-demand careers in full-stack and modern web development.
      </p>

      <div className="flex flex-wrap justify-center gap-5">
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
            className="px-8 py-4 rounded-full bg-white border border-slate-200 shadow-md text-slate-800 font-semibold hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all"
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  </section>
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
