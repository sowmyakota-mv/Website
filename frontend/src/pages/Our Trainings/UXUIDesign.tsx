import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function UXUIDesign() {
  return (
    <section id="our-services/ux-ui" className="w-full bg-white text-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-pink-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">UX / UI Design</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Master human-centered design, wireframing, prototyping, and usability testing to create seamless digital experiences.
        </p>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans UX / UI Design Course</strong> equips learners with practical design skills that bridge user needs with business goals. 
            You’ll explore user research, interaction design, wireframing, high-fidelity prototyping, accessibility, and design systems.
          </p>
          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            This program emphasizes hands-on practice: build design systems, run usability tests, and iterate designs based on real user feedback.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What you’ll learn</h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>• Design Thinking methodology for problem-solving</li>
              <li>• User research and persona creation</li>
              <li>• Wireframing low-fidelity prototypes</li>
              <li>• High-fidelity UI prototyping</li>
              <li>• Accessibility and inclusive design best practices</li>
              <li>• Building and maintaining a design system</li>
              <li>• Usability testing and feedback analysis</li>
              <li>• Handoff workflows for developers</li>
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
              <h3 className="text-xl font-semibold mb-2">Module 1 — UX Foundations & Research</h3>
              <p className="text-slate-700 mb-2">Understand UX principles, user needs, and research techniques.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>User interviews & surveys</li>
                <li>Personas & user journeys</li>
                <li>Competitor & market analysis</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 2 — Interaction Design & Wireframing</h3>
              <p className="text-slate-700 mb-2">Design interfaces and interactions for optimal user experience.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Low-fidelity wireframes</li>
                <li>Information architecture</li>
                <li>Interaction patterns & flows</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 3 — High-Fidelity UI & Prototyping</h3>
              <p className="text-slate-700 mb-2">Bring designs to life with detailed UI and interactive prototypes.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Figma / Adobe XD / Sketch tools</li>
                <li>Interactive prototypes</li>
                <li>Design consistency & style guides</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 4 — Usability Testing & Design Systems</h3>
              <p className="text-slate-700 mb-2">Validate and maintain your design for long-term success.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>User testing & feedback analysis</li>
                <li>Accessibility compliance</li>
                <li>Creating & managing a design system</li>
              </ul>
            </article>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Figma","Adobe XD","Sketch","InVision","Miro","Zeplin","Principle","Canva"].map((t, i) => (
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
              <strong>Project:</strong> Build a user persona and journey map for a real product.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Design a low-fidelity wireframe for a web or mobile app.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> High-fidelity interactive prototype with feedback iterations.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Capstone:</strong> End-to-end UX/UI design: research, wireframe, prototype, and usability report.
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["UX Designer","UI Designer","Interaction Designer","Product Designer","Visual Designer","UX Researcher"].map((role, i) => (
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
              <summary className="font-semibold">Do I need prior design experience?</summary>
              <p className="mt-2 text-slate-700">Basic computer skills recommended; the course covers design fundamentals.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">What tools are used?</summary>
              <p className="mt-2 text-slate-700">Figma, Adobe XD, Sketch, InVision, Miro, Zeplin.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Certification?</summary>
              <p className="mt-2 text-slate-700">Certificate on completion with portfolio-ready projects.</p>
            </details>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-pink-200 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Build Your UX/UI Career</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Learn design thinking, prototyping, and user-centered design to create seamless experiences.</p>
        <Link to="/register" className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-pink-50 transition">Enroll Now</Link>
      </div>
    </section>
  );
}
