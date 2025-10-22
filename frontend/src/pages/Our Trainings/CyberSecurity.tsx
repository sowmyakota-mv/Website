import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function CyberSecurityCourse() {
  return (
    <section id="our-services/cyber-security" className="w-full bg-slate-50 text-gray-900 -mb-12">

      {/* Hero */}
      <ScrollAnimation animation="fadeInDown">
        <div className="bg-gradient-to-r from-emerald-50 via-white to-slate-100 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Cyber Security</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
            Learn defensive & offensive cybersecurity fundamentals, detection and
            incident response, and hands-on red/blue team techniques to protect systems.
          </p>
        </div>
      </ScrollAnimation>

      {/* About */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans Cyber Security Course</strong> covers modern defensive
            techniques, threat modeling, vulnerability assessment, monitoring and incident response.
            You’ll practice in controlled labs, learn secure coding practices and build detection rules.
          </p>
          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            The course blends classroom theory with practical exercises—network labs,
            host hardening, SIEM configuration, and red-team style attack/defend scenarios.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
        <div className="bg-emerald-50 py-16 px-6 rounded-2xl shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">What you’ll learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-slate-700">
              {[
                "Cybersecurity fundamentals & threat landscape",
                "Network security, segmentation, and hardening",
                "Endpoint protection and secure configurations",
                "Vulnerability scanning and penetration testing basics",
                "SIEM, log analysis, and alert tuning",
                "Incident response process and forensics basics",
                "Secure coding practices & app hardening",
                "Cloud security fundamentals for AWS/Azure/GCP",
                "Compliance basics (GDPR, ISO, NIST) and risk management"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-2 hover:text-slate-900 transition-colors">
            <span className="text-slate-900 font-bold">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Course Modules (Sample)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Module 1 — Foundations & Networking",
                desc: "TCP/IP, common protocols, and building secure networks.",
                points: ["Network fundamentals, firewalls, VPNs","Network scanning & reconnaissance"]
              },
              {
                title: "Module 2 — Detection & Monitoring",
                desc: "SIEM basics, log analysis and alerting strategies.",
                points: ["ELK / Splunk / Managed SIEM labs","Writing detection rules and reducing false positives"]
              },
              {
                title: "Module 3 — Offensive Security",
                desc: "Ethical hacking fundamentals and pentesting workflow.",
                points: ["Reconnaissance, exploitation basics, post-exploitation","Hands-on labs using common pentest tools"]
              },
              {
                title: "Module 4 — Incident Response & Forensics",
                desc: "How to detect, triage, and investigate security incidents.",
                points: ["IR process, playbooks, and post-incident reviews","Disk & memory forensics basics and evidence handling"]
              }
            ].map((mod, i) => (
              <article key={i} className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">{mod.title}</h3>
                <p className="text-slate-700 mb-2">{mod.desc}</p>
                <ul className="list-disc list-inside text-slate-700">
                  {mod.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
        <div className="max-w-6xl mx-auto px-6 py-16 bg-emerald-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Wireshark","Nmap","Metasploit","Burp Suite","Splunk / ELK","OSSEC / Wazuh","Kali Linux","Forensic toolkits"].map((t, i) => (
              <div key={i} className="rounded-lg border p-4 text-center bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
                {t}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Career */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Career Paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["Security Analyst","Incident Responder","Penetration Tester","SOC Engineer","Cloud Security Engineer","Security Architect"].map((r, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-md text-center font-semibold hover:shadow-xl hover:scale-105 transition transform">
                {r}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
        <div className="bg-emerald-100 text text-center py-20 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Protect & Defend — Start Your Cybersecurity Career</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Hands-on labs, simulated incidents, and career support to help you step into security roles.
          </p>
          <Link to="/register" className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition transform hover:scale-105">
            Enroll Now
          </Link>
        </div>
      </ScrollAnimation>
    </section>
  );
}
