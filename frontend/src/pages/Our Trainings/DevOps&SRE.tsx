import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function DevOpsSRE() {
  return (
    <section id="our-services/devops" className="w-full bg-white text-gray-900 -mb-12">

      {/* Hero */}
      <div className="bg-gradient-to-r from-yellow-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">DevOps & SRE</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Master automation, CI/CD, containerization, and site reliability practices to deliver software faster and more reliably.
        </p>
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

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What you’ll learn</h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>• Continuous Integration & Continuous Deployment (CI/CD)</li>
              <li>• Containerization (Docker) and orchestration (Kubernetes)</li>
              <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
              <li>• Observability: metrics, logs, tracing, dashboards</li>
              <li>• Incident management, on-call, runbooks</li>
              <li>• SRE practices: SLIs, SLOs, error budgets</li>
              <li>• Monitoring & alerting strategies for reliability</li>
              <li>• Automated testing, blue-green & canary deployments</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Course Modules (Sample)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Module 1 — DevOps Foundations",
                desc: "DevOps culture, version control, CI/CD basics.",
                points: ["Git & Git workflows", "CI pipelines (GitHub Actions, GitLab CI)", "Automated testing strategies"]
              },
              {
                title: "Module 2 — Containerization & Orchestration",
                desc: "Docker, Kubernetes basics, deployment patterns.",
                points: ["Docker images, volumes, networking", "Kubernetes pods, services, deployments", "Helm charts & config management"]
              },
              {
                title: "Module 3 — Infrastructure as Code",
                desc: "Automate provisioning and configuration.",
                points: ["Terraform basics & modules", "CloudFormation or ARM templates", "Multi-environment deployments"]
              },
              {
                title: "Module 4 — Observability & Reliability",
                desc: "Monitoring, metrics, alerting, and incident response.",
                points: ["Prometheus, Grafana, ELK stack", "Alerting strategies & runbooks", "SLIs, SLOs, and error budgets"]
              }
            ].map((mod, i) => (
              <ScrollAnimation key={i} animation="fadeInUp" delay={i * 0.2}>
                <article className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
                  <h3 className="text-xl font-semibold mb-2">{mod.title}</h3>
                  <p className="text-slate-700 mb-2">{mod.desc}</p>
                  <ul className="list-disc list-inside text-slate-700">
                    {mod.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Projects */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Hands-on Projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
            <li className="rounded-lg p-4 border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
              <strong>Project:</strong> Full CI/CD pipeline with automated testing and deployment.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
              <strong>Project:</strong> Containerized microservices deployment on Kubernetes.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
              <strong>Project:</strong> Infrastructure provisioning using Terraform across multiple environments.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
              <strong>Capstone:</strong> End-to-end SRE workflow: monitoring, incident handling, reliability metrics.
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      {/* Tools */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Git", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana", "ELK Stack"].map((t, i) => (
              <div key={i} className="rounded-lg border p-4 text-center bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">{t}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["DevOps Engineer","Site Reliability Engineer","Cloud Engineer","Automation Engineer","Release Manager","Platform Engineer"].map((role, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-md text-center font-semibold hover:shadow-xl hover:scale-105 transition transform">{role}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* FAQ */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-yellow-50 via-white to-yellow-100 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">FAQ</h2>
          <div className="grid gap-6 md:grid-cols-3">
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
                <details className="p-4 bg-white rounded border shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer">
                  <summary className="font-semibold text-slate-900">{faq.q}</summary>
                  <p className="mt-2 text-slate-700">{faq.a}</p>
                </details>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1.4}>
        <div className="bg-yellow-100 text-black text-center py-20 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Accelerate Your DevOps Career</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join live labs, practical projects, and mentorship to become a proficient DevOps & SRE professional.</p>
          <Link to="/register" className="px-8 py-3 bg-white text-yellow-600 font-semibold rounded-full hover:bg-yellow-50 transition transform hover:scale-105">Enroll Now</Link>
        </div>
      </ScrollAnimation>

    </section>
  );
}
