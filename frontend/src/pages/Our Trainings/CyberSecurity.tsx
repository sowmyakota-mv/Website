import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function CyberSecurityCourse() {
  return (
    <section id="our-services/cyber-security" className="w-full bg-white text-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Cyber Security</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Learn defensive & offensive cybersecurity fundamentals, detection and
          incident response, and hands-on red/blue team techniques to protect systems.
        </p>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans Cyber Security Course</strong> covers modern defensive
            techniques, threat modeling, vulnerability assessment, monitoring and incident response.
            You’ll practice in controlled labs, learn secure coding practices and how to build detection rules.
          </p>

          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            The course blends classroom theory with practical exercises—network labs,
            host hardening, SIEM configuration, and red-team style attack/defend scenarios.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What you’ll learn</h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>• Cybersecurity fundamentals & threat landscape</li>
              <li>• Network security, segmentation, and hardening</li>
              <li>• Endpoint protection and secure configurations</li>
              <li>• Vulnerability scanning and penetration testing basics</li>
              <li>• SIEM, log analysis, and alert tuning</li>
              <li>• Incident response process and forensics basics</li>
              <li>• Secure coding practices & app hardening</li>
              <li>• Cloud security fundamentals for AWS/Azure/GCP</li>
              <li>• Compliance basics (GDPR, ISO, NIST) and risk management</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Course modules (sample)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 1 — Foundations & Networking</h3>
              <p className="text-slate-700 mb-2">TCP/IP, common protocols, and building secure networks.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Network fundamentals, firewalls, VPNs</li>
                <li>Network scanning & reconnaissance</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 2 — Detection & Monitoring</h3>
              <p className="text-slate-700 mb-2">SIEM basics, log analysis and alerting strategies.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>ELK / Splunk / Managed SIEM labs</li>
                <li>Writing detection rules and reducing false positives</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 3 — Offensive Security</h3>
              <p className="text-slate-700 mb-2">Ethical hacking fundamentals and pentesting workflow.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Reconnaissance, exploitation basics, post-exploitation</li>
                <li>Hands-on labs using common pentest tools</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 4 — Incident Response & Forensics</h3>
              <p className="text-slate-700 mb-2">How to detect, triage, and investigate security incidents.</p>
              <ul className="list-disc list-inside text-slate-700">
                <li>IR process, playbooks, and post-incident reviews</li>
                <li>Disk & memory forensics basics and evidence handling</li>
              </ul>
            </article>
          </div>
        </div>
      </ScrollAnimation>

      {/* Labs & Projects */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Hands-on labs & projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Lab: Vulnerability assessment</strong> — scan, prioritize, and report vulnerabilities.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Lab: SIEM tuning</strong> — ingest logs, build dashboards and alerts.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Exercise: Incident response drill</strong> — simulated breach, triage & containment.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Capstone:</strong> end-to-end security assessment and mitigation plan for a sample enterprise environment.
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      {/* Tools */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Wireshark",
              "Nmap",
              "Metasploit",
              "Burp Suite",
              "Splunk / ELK",
              "OSSEC / Wazuh",
              "Kali Linux",
              "Forensic toolkits",
            ].map((t, i) => (
              <div key={i} className="rounded-lg border p-3 text-center bg-white shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Career */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Security Analyst",
              "Incident Responder",
              "Penetration Tester",
              "SOC Engineer",
              "Cloud Security Engineer",
              "Security Architect",
            ].map((r, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-sm text-center font-semibold">
                {r}
              </div>
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
              <summary className="font-semibold">Do I need prior experience?</summary>
              <p className="mt-2 text-slate-700">Basic Linux and networking knowledge helps; we provide bridging content.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Is this ethical hacking?</summary>
              <p className="mt-2 text-slate-700">Yes — all offensive exercises are done in controlled lab environments with legal/ethical boundaries.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Certifications?</summary>
              <p className="mt-2 text-slate-700">We prepare you for entry certifications and provide guidance for advanced certs (e.g., CompTIA Security+, CEH basics).</p>
            </details>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-rose-200 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Protect & Defend — Start Your Cybersecurity Career</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Hands-on labs, simulated incidents, and career support to help you step into security roles.
        </p>
        <Link to="/register" className="px-8 py-3 bg-white text-rose-600 font-semibold rounded-full hover:bg-rose-50 transition">Enroll Now</Link>
      </div>
    </section>
  );
}
