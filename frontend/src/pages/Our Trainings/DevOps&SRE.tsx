import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function DevOpsSRE() {
  return (
    <section id="our-services/devops" className="w-full bg-white text-gray-900 -mb-12">

      {/* Hero */}
       <div className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">

  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
    src="/devops-hero.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Semi-transparent overlay for contrast */}
  <div className="absolute inset-0 bg-black/40 z-[2]"></div>

  {/* Foreground content (on top of everything) */}
  <div className="relative z-[3] px-6">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
           DevOps & SRE
          </h1>
          <p className="max-w-3xl mx-auto text-sm text-white leading-relaxed">
            Master automation, CI/CD, containerization, and site reliability practices to deliver software faster and more reliably.
        </p>
      </div>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans DevOps & SRE Course</strong> teaches modern DevOps practices for automating deployments, monitoring systems, and maintaining highly reliable services.
            Learn to integrate CI/CD pipelines, manage infrastructure as code, and observe systems at scale.
          </p>
          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            This program emphasizes hands-on labs: containerized deployments, automated testing, monitoring alerts, and postmortem practices. Prepare for real-world DevOps and SRE roles.
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
          Gain expertise in building and maintaining reliable, scalable, and automated systems using modern DevOps & SRE practices.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Continuous Integration & Continuous Deployment (CI/CD)",
          "Containerization (Docker) and orchestration (Kubernetes)",
          "Infrastructure as Code (Terraform, CloudFormation)",
          "Observability: metrics, logs, tracing, dashboards",
          "Incident management, on-call, runbooks",
          "SRE practices: SLIs, SLOs, error budgets",
          "Monitoring & alerting strategies for reliability",
          "Automated testing, blue-green & canary deployments",
          "Collaboration & version control with Git/GitHub"
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
      {[
        {
          title: "Module 1 : DevOps Foundations",
          desc: "DevOps culture, version control, CI/CD basics.",
          points: ["Git & Git workflows", "CI pipelines (GitHub Actions, GitLab CI)", "Automated testing strategies"]
        },
        {
          title: "Module 2 : Containerization & Orchestration",
          desc: "Docker, Kubernetes basics, deployment patterns.",
          points: ["Docker images, volumes, networking", "Kubernetes pods, services, deployments", "Helm charts & config management"]
        },
        {
          title: "Module 3 : Infrastructure as Code",
          desc: "Automate provisioning and configuration.",
          points: ["Terraform basics & modules", "CloudFormation or ARM templates", "Multi-environment deployments"]
        },
        {
          title: "Module 4 : Observability & Reliability",
          desc: "Monitoring, metrics, alerting, and incident response.",
          points: ["Prometheus, Grafana, ELK stack", "Alerting strategies & runbooks", "SLIs, SLOs, and error budgets"]
        }
      ].map((mod, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={i * 0.1}>
          <article className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-2 text-yellow-600">{mod.title}</h3>
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

{/* PROJECTS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
  <section className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 text-center">Hands-on Projects</h2>
    <ul className="grid gap-6 md:grid-cols-2">
      {[
        "Full CI/CD pipeline with automated testing and deployment.",
        "Containerized microservices deployment on Kubernetes.",
        "Infrastructure provisioning using Terraform across multiple environments.",
        "End-to-end SRE workflow: monitoring, incident handling, reliability metrics."
      ].map((p, i) => (
        <li key={i} className="rounded-2xl p-6 border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
          <strong>{i === 3 ? "Capstone:" : "Project:"}</strong> {p}
        </li>
      ))}
    </ul>
  </section>
</ScrollAnimation>

{/* TOOLS & TECHNOLOGIES */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
  <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 rounded-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 text-center">Tools & Technologies</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {["Git", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana", "ELK Stack"].map((t, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={i * 0.1}>
          <div className="rounded-2xl border p-6 text-center bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">{t}</div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* CAREER PATHS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 text-center">Career Paths</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {["DevOps Engineer","Site Reliability Engineer","Cloud Engineer","Automation Engineer","Release Manager","Platform Engineer"].map((role, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={i * 0.1}>
          <div className="rounded-2xl border p-6 bg-white shadow-md text-center font-semibold hover:shadow-xl hover:scale-105 transition transform">{role}</div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* FAQ */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.2}>
  <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-yellow-50 via-white to-yellow-100 rounded-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 text-center">FAQ</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {[
        { q: "Do I need prior DevOps experience?", a: "Basic Linux and programming knowledge recommended. Course provides bridging modules." },
        { q: "Hands-on labs?", a: "Yes, including pipelines, containerized deployments, monitoring, and incident simulations." },
        { q: "Certification?", a: "Certificate upon completion with capstone project showcase." },
        { q: "Course duration?", a: "Typically 12 weeks with a mix of live sessions and labs." },
        { q: "Is mentorship provided?", a: "Yes, mentors guide learners throughout hands-on projects." },
        { q: "Job support?", a: "Career guidance, resume review, and interview prep included." },
        { q: "Can I join remotely?", a: "Yes, sessions and labs are available online." },
        { q: "Prerequisites?", a: "No formal prerequisites; basic computer skills helpful." },
        { q: "Tools covered?", a: "Git, Docker, Kubernetes, Terraform, Jenkins, Prometheus, Grafana, ELK Stack." }
      ].map((faq, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={i * 0.1}>
          <details className="p-6 bg-white rounded-2xl border shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer">
            <summary className="font-semibold text-slate-900">{faq.q}</summary>
            <p className="mt-2 text-slate-700">{faq.a}</p>
          </details>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.4}>
        <div className="bg-yellow-100 text-black text-center py-20 rounded-2xl mt-16">
          <h3 className="text-3xl font-bold mb-4">Accelerate Your DevOps Career</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join live labs, practical projects, and mentorship to become a proficient DevOps & SRE professional.</p>
          <Link to="/register" className="px-8 py-3 bg-white text-yellow-600 font-semibold rounded-full hover:bg-yellow-50 transition transform hover:scale-105">Enroll Now</Link>
        </div>
      </ScrollAnimation>

    </section>
  );
}
