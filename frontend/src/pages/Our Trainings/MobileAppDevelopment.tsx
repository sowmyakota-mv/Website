import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function MobileAppDevelopment() {
  const modules = [
    {
      title: "Module 1 — Mobile Architecture & Setup",
      desc: "Learn the fundamentals of mobile app architecture and environment setup.",
      points: [
        "Mobile project structure & architecture patterns",
        "Setting up React Native & Flutter environments",
        "Emulators, simulators, and debugging tools"
      ]
    },
    {
      title: "Module 2 — UI & Navigation",
      desc: "Build user interfaces and navigation flows for mobile apps.",
      points: [
        "React Native components & Flutter widgets",
        "Navigation libraries & state management",
        "Responsive layouts and adaptive design"
      ]
    },
    {
      title: "Module 3 — Native Modules & APIs",
      desc: "Integrate device capabilities and external APIs into your apps.",
      points: [
        "Camera, GPS, notifications",
        "Bluetooth & sensors integration",
        "REST & GraphQL APIs consumption"
      ]
    },
    {
      title: "Module 4 — Testing & Deployment",
      desc: "Ensure your apps are stable, performant, and ready for the app store.",
      points: [
        "Unit, integration & end-to-end testing",
        "CI/CD pipelines for mobile apps",
        "App store publishing and release management"
      ]
    }
  ];

  const tools = ["React Native","Flutter","Xcode","Android Studio","Expo","Firebase","Redux","VS Code"];
  const projects = [
    "Build a multi-screen mobile app using React Native.",
    "Offline-first app with local storage and caching.",
    "Integration with device APIs: camera, location, push notifications.",
    "Feature-rich mobile app deployed to App Store and Google Play."
  ];
  const careers = ["Mobile Developer","Flutter Developer","React Native Developer","iOS Developer","Android Developer","Mobile UI/UX Designer"];
  const faqs = [
    { q: "Do I need prior mobile development experience?", a: "Basic programming knowledge recommended; the course covers mobile frameworks and best practices." },
    { q: "Which frameworks are used?", a: "React Native and Flutter for cross-platform app development." },
    { q: "Certification?", a: "Certificate on completion with real-world project portfolio." },
    { q: "Course duration?", a: "Typically 8–16 weeks depending on project pace." },
    { q: "Is mentorship provided?", a: "Yes, mentors guide learners throughout hands-on projects." },
    { q: "Are projects real-world?", a: "All projects simulate real client scenarios for practical experience." },
    { q: "Can I join remotely?", a: "Yes, sessions and labs are available online." },
    { q: "Job support?", a: "Career guidance, resume review, and interview prep are included." },
    { q: "Prerequisites?", a: "No formal prerequisites; familiarity with basic programming is helpful." }
  ];

  return (
    <section id="our-services/mobile-app" className="w-full bg-white text-gray-900 -mb-12">

      {/* Hero */}
      <div className="bg-gradient-to-r from-cyan-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Mobile App Development</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Learn to build high-performance iOS and Android apps using native and cross-platform frameworks like React Native and Flutter.
        </p>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            This course equips you with the skills to develop, deploy, and optimize mobile applications for iOS and Android platforms. 
            You’ll explore mobile architecture, offline-first design, native modules, app performance optimization, CI/CD pipelines, and app store deployment.
          </p>
          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            Students will complete real-world projects, implementing full-featured apps while gaining hands-on experience with development frameworks, testing strategies, and publishing pipelines.
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
          Master mobile app development from architecture to deployment, building scalable and high-performing apps.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Mobile architecture design for scalable apps",
          "Cross-platform development with React Native & Flutter",
          "Offline-first app design and caching strategies",
          "Native modules & platform integrations",
          "App performance optimization & profiling",
          "CI/CD pipelines and mobile deployment",
          "App store publishing and release management",
          "Unit, integration, and E2E testing",
          "Collaboration & version control with Git"
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

{/* COURSE MODULES */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 text-center">Course Modules</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {modules.map((mod, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.2 * i}>
          <article className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">
            <h3 className="text-xl font-semibold mb-2 text-slate-900">{mod.title}</h3>
            <p className="text-slate-700 mb-2">{mod.desc}</p>
            <ul className="list-disc list-inside text-slate-700">
              {mod.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </article>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* TOOLS & TECHNOLOGIES */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 text-center">Tools & Frameworks</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {tools.map((t, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1 * i}>
          <div className="rounded-2xl border p-6 text-center bg-gradient-to-tr from-white to-cyan-50 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">
            {t}
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* PROJECTS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
  <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-cyan-50 via-white to-cyan-50 rounded-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 text-center">Hands-on Projects</h2>
    <ul className="grid gap-6 md:grid-cols-2 text-slate-700">
      {projects.map((p, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <li className="rounded-2xl p-6 border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">
            <strong>{i === projects.length-1 ? "Capstone:" : "Project:"}</strong> {p}
          </li>
        </ScrollAnimation>
      ))}
    </ul>
  </section>
</ScrollAnimation>

{/* CAREER PATHS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 text-center">Career Paths</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {careers.map((role, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <div className="rounded-2xl border p-6 bg-gradient-to-tr from-white to-cyan-50 shadow-md hover:shadow-xl text-center font-semibold hover:scale-105 transition transform duration-300">
            {role}
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* FAQ */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.2}>
  <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-cyan-50 to-white rounded-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 text-center">FAQ</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {faqs.map((faq, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <details className="p-6 bg-white rounded-2xl border shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer duration-300">
            <summary className="font-semibold text-slate-900">{faq.q}</summary>
            <p className="mt-2 text-slate-700">{faq.a}</p>
          </details>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.2}>
        <div className="bg-gradient-to-r from-cyan-100 to-blue-400 text text-center py-20 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Become a Mobile App Developer</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Master mobile app development from scratch and deploy production-ready apps to app stores.</p>
          <Link to="/register" className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-full hover:bg-cyan-50 hover:scale-105 transition transform duration-300">Enroll Now</Link>
        </div>
      </ScrollAnimation>
    </section>
  );
}
