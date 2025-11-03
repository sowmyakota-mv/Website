import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function CyberSecurityCourse() {
  return (
    <section id="our-services/cyber-security" className="w-full bg-slate-50 text-gray-900 -mb-12">

      {/* Hero */}
      <ScrollAnimation animation="fadeInDown">
      <div className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">

  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
    src="/cyber-hero.mp4"
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
           Cyber Security
          </h1>
          <p className="max-w-3xl mx-auto text-sm text-white leading-relaxed">
            Learn defensive & offensive cybersecurity fundamentals, detection and
            incident response, and hands-on red/blue team techniques to protect systems.
          </p>
        </div>
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
            The course blends classroom theory with practical exercises network labs,
            host hardening, SIEM configuration, and red-team style attack/defend scenarios.
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
          Build in-demand cybersecurity skills covering network security, threat detection, offensive & defensive techniques, cloud security, and compliance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-emerald-800 text-center">Course Modules</h2>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {[
        {
          title: "Module 1 : Foundations & Networking",
          desc: "TCP/IP, common protocols, and building secure networks.",
          points: ["Network fundamentals, firewalls, VPNs","Network scanning & reconnaissance"]
        },
        {
          title: "Module 2 : Detection & Monitoring",
          desc: "SIEM basics, log analysis and alerting strategies.",
          points: ["ELK / Splunk / Managed SIEM labs","Writing detection rules and reducing false positives"]
        },
        {
          title: "Module 3 : Offensive Security",
          desc: "Ethical hacking fundamentals and pentesting workflow.",
          points: ["Reconnaissance, exploitation basics, post-exploitation","Hands-on labs using common pentest tools"]
        },
        {
          title: "Module 4 : Incident Response & Forensics",
          desc: "How to detect, triage, and investigate security incidents.",
          points: ["IR process, playbooks, and post-incident reviews","Disk & memory forensics basics and evidence handling"]
        }
      ].map((mod, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <article className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-2 text-emerald-800">{mod.title}</h3>
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
  <section className="max-w-6xl mx-auto px-6 py-16 bg-emerald-50 rounded-2xl">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-emerald-800 text-center">Tools & Technologies</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {["Wireshark","Nmap","Metasploit","Burp Suite","Splunk / ELK","OSSEC / Wazuh","Kali Linux","Forensic toolkits"].map((t, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <div className="rounded-xl border p-4 text-center bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">{t}</div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* CAREER PATHS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-emerald-800 text-center">Career Paths</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {["Security Analyst","Incident Responder","Penetration Tester","SOC Engineer","Cloud Security Engineer","Security Architect"].map((r, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <div className="rounded-2xl border p-6 bg-white shadow-md text-center font-semibold hover:shadow-xl hover:scale-105 transition transform">{r}</div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
        <div className="bg-emerald-100 text text-center py-20 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Protect & Defend - Start Your Cybersecurity Career</h3>
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
