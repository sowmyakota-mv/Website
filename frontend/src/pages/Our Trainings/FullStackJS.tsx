import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function FullStackJS() {
  return (
    <section id="our-services/full-stack-js" className="w-full bg-white text-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Full-Stack JavaScript</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Learn the modern JavaScript stack: Node.js backend, React frontend, databases, APIs, and deployment pipelines.
        </p>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            This course covers end-to-end web development using JavaScript for both frontend and backend. 
            You will learn to create production-grade applications, implement authentication, optimize performance, and deploy applications using modern DevOps pipelines.
          </p>
          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            Emphasis is on hands-on projects, real-world case studies, and a capstone app that demonstrates your skills across the full stack.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What you’ll learn</h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>• Frontend development with React (hooks, context, SSR/SSG)</li>
              <li>• Backend development with Node.js, Express, and REST/GraphQL APIs</li>
              <li>• Database integration: SQL & NoSQL (MongoDB, PostgreSQL)</li>
              <li>• Authentication & Authorization strategies</li>
              <li>• Testing: unit, integration, E2E</li>
              <li>• Deployment: containerization with Docker, CI/CD pipelines</li>
              <li>• Performance optimization and security best practices</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Course Modules</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 1 — Frontend with React</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>React hooks & component-driven design</li>
                <li>State management & context API</li>
                <li>SSR/SSG with Next.js or similar frameworks</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 2 — Backend with Node.js</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>REST and GraphQL API development</li>
                <li>Express.js routing and middleware</li>
                <li>Authentication and JWT implementation</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 3 — Database Integration</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>Relational & non-relational databases</li>
                <li>Data modeling, schemas, and indexing</li>
                <li>Query optimization and transactions</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 4 — Deployment & DevOps</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>Containerization using Docker</li>
                <li>CI/CD pipeline setup and automation</li>
                <li>Application monitoring, logging, and security best practices</li>
              </ul>
            </article>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & Frameworks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React","Node.js","Express","GraphQL","MongoDB","PostgreSQL","Docker","VS Code"].map((t, i) => (
              <div key={i} className="rounded-lg border p-3 text-center bg-white shadow-sm">{t}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Projects */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Hands-on Projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Build a full-stack e-commerce app with user authentication.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Develop a real-time chat app using WebSocket.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Implement a content management system (CMS) with React and Node.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Capstone:</strong> Deploy a full-stack SaaS application to cloud with CI/CD pipeline.
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career Paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["Full-Stack Developer","Frontend Developer","Backend Developer","React Developer","Node.js Developer","Software Engineer"].map((role, i) => (
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
              <summary className="font-semibold">Do I need prior JavaScript knowledge?</summary>
              <p className="mt-2 text-slate-700">Basic programming knowledge recommended; course covers full stack JavaScript from frontend to backend.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Which databases are covered?</summary>
              <p className="mt-2 text-slate-700">MongoDB, PostgreSQL, and relational/non-relational data management.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Certification?</summary>
              <p className="mt-2 text-slate-700">Certificate on completion with portfolio of projects for job readiness.</p>
            </details>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-orange-200 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Become a Full-Stack JavaScript Developer</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Master frontend and backend JavaScript development and deploy production-ready applications.</p>
        <Link to="/register" className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition">Enroll Now</Link>
      </div>
    </section>
  );
}
