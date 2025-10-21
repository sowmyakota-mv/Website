import React from "react"; 
import { motion } from "framer-motion";
import ScrollAnimation from "@/animation/ScrollAnimation";

const CyberSecurityPage = () => {
  const sections = [
    {
      title: "Evolving Cyber Threats",
      desc: "The cyber landscape is constantly shifting — new attack vectors, zero-day exploits, and data breaches require dynamic defense strategies that evolve faster than threats themselves.",
      icon: "🛡️",
    },
    {
      title: "Next-Gen Security Solutions",
      desc: "We deliver AI-driven, automated protection systems that monitor, detect, and neutralize risks before they cause harm — keeping your infrastructure resilient and future-proof.",
      icon: "⚙️",
    },
    {
      title: "24/7 Threat Monitoring",
      desc: "Our global SOC teams provide round-the-clock monitoring, ensuring instant response to security incidents and continuous improvement of your cyber defenses.",
      icon: "🌐",
    },
    {
      title: "Zero Trust Architecture",
      desc: "We implement Zero Trust frameworks that safeguard every access point — verifying every user, device, and connection without compromise.",
      icon: "🔒",
    },
  ];

  return (
    <section id="cyber-security" className="bg-gradient-to-b from-cyan-100 via-teal-100 to-green-100 text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-300/70 via-teal-200/50 to-green-100/0"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight z-10"
        >
          Cyber Security
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-700 text-xl md:text-2xl max-w-2xl mt-6 z-10"
        >
          Safeguard your digital world with adaptive, intelligent, and proactive cybersecurity.
        </motion.p>
      </div>

      {/* Modern Grid Section */}
      <div className="relative py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {sections.map((section, i) => (
            <ScrollAnimation key={i} animation="fadeInUp">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-cyan-200/70 to-green-200/50 border border-cyan-300/30 shadow-lg backdrop-blur-xl hover:border-teal-400/60 transition-all"
              >
                <div className="text-5xl mb-6">{section.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                <p className="text-gray-800 leading-relaxed">{section.desc}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Highlight Section */}
      <div className="relative py-32 text-center overflow-hidden bg-gradient-to-b from-cyan-200 via-teal-200 to-green-200">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/50 via-teal-200/40 to-green-200/50"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold z-10 relative mb-6"
        >
          Your Digital Shield of Tomorrow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto z-10 relative"
        >
          From cloud to endpoint, we empower enterprises to detect, defend, and recover with unmatched precision and intelligence.
        </motion.p>
      </div>

      {/* CTA Section */}
      <div className="py-24 text-center bg-gradient-to-r from-green-200 via-cyan-200 to-teal-200">
        <h3 className="text-4xl font-bold mb-4 text-gray-900">
          Stay One Step Ahead of Cyber Threats
        </h3>
        <p className="text-gray-800 text-lg max-w-2xl mx-auto mb-8">
          Partner with us to strengthen your cybersecurity posture with next-gen protection and real-time intelligence.
        </p>
        <button className="px-8 py-3 rounded-full bg-cyan-400 hover:bg-teal-400 font-semibold text-white text-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CyberSecurityPage;
