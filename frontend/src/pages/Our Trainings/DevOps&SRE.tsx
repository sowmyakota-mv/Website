import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function DevOpsSRE() {
  return (
    <section id="our-services/devops" className="w-full bg-white text-gray-900">
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
            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 1 — DevOps Foundations</h3>
              <p className="text-slate-700 mb-2">DevOps culture, version control, CI/CD basics.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Git & Git workflows</li>
                <li>CI pipelines (GitHub Actions, GitLab CI)</li>
                <li>Automated testing strategies</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 2 — Containerization & Orchestration</h3>
              <p className="text-slate-700 mb-2">Docker, Kubernetes basics, deployment patterns.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Docker images, volumes, networking</li>
                <li>Kubernetes pods, services, deployments</li>
                <li>Helm charts & config management</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 3 — Infrastructure as Code</h3>
              <p className="text-slate-700 mb-2">Automate provisioning and configuration.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Terraform basics & modules</li>
                <li>CloudFormation or ARM templates</li>
                <li>Multi-environment deployments</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 4 — Observability & Reliability</h3>
              <p className="text-slate-700 mb-2">Monitoring, metrics, alerting, and incident response.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Prometheus, Grafana, ELK stack</li>
                <li>Alerting strategies & runbooks</li>
                <li>SLIs, SLOs, and error budgets</li>
              </ul>
            </article>
          </div>
        </div>
      </ScrollAnimation>

      {/* Projects */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Hands-on Projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Full CI/CD pipeline with automated testing and deployment.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Containerized microservices deployment on Kubernetes.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Infrastructure provisioning using Terraform across multiple environments.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
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
              <div key={i} className="rounded-lg border p-3 text-center bg-white shadow-sm">{t}</div>
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
              <summary className="font-semibold">Do I need prior DevOps experience?</summary>
              <p className="mt-2 text-slate-700">Basic Linux and programming knowledge recommended. Course provides bridging modules.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Hands-on labs?</summary>
              <p className="mt-2 text-slate-700">Yes, including pipelines, containerized deployments, monitoring, and incident simulations.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Certification?</summary>
              <p className="mt-2 text-slate-700">Certificate upon completion with capstone project showcase.</p>
            </details>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-yellow-200 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Accelerate Your DevOps Career</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Join live labs, practical projects, and mentorship to become a proficient DevOps & SRE professional.</p>
        <Link to="/register" className="px-8 py-3 bg-white text-yellow-600 font-semibold rounded-full hover:bg-yellow-50 transition">Enroll Now</Link>
      </div>
    </section>
  );
}
