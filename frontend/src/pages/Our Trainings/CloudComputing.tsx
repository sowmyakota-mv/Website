import React from "react"; 
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function CloudComputing() {
  return (
    <section id="our-services/cloud-computing" className="w-full bg-slate-50 text-gray-900 -mb-12">

      {/* Hero Section */}
      <ScrollAnimation animation="fadeInDown">
        <div className="bg-gradient-to-r from-blue-100 via-indigo-50 to-white py-20 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            Cloud Computing
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-blue-700 leading-relaxed">
            Learn how to design, deploy, and manage scalable applications on AWS,
            Azure, and Google Cloud. Become a certified cloud professional ready
            for enterprise roles.
          </p>
        </div>
      </ScrollAnimation>

      {/* About Section */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">About the Program</h2>
          <p className="text-blue-700 text-lg leading-relaxed">
            The <strong>Data Artisans Cloud Computing Bootcamp</strong> equips
            learners with the skills to design and manage modern cloud
            infrastructure. You’ll understand how to build fault-tolerant,
            secure, and cost-effective solutions using AWS, Azure, and GCP.
          </p>
          <p className="text-blue-700 text-lg mt-6 leading-relaxed">
            Through real-time labs, you’ll learn about virtualization,
            networking, automation, monitoring, and disaster recovery setups.
            This course also prepares you for popular certifications like
            <strong> AWS Solutions Architect</strong> and <strong>Azure Administrator.</strong>
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
          Build expertise in cloud computing, DevOps, and multi-cloud deployment strategies.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Cloud computing concepts and deployment models",
          "AWS, Azure, and Google Cloud fundamentals",
          "Serverless architecture and containerization (Docker, Kubernetes)",
          "Infrastructure as Code using Terraform",
          "Networking, load balancing, and security groups",
          "Identity and Access Management (IAM)",
          "Monitoring, logging, and automation",
          "Disaster recovery and backup strategies",
          "Cost optimization and performance tuning"
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

{/* TOOLS & FRAMEWORKS */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-900 text-center">Platforms & Tools Covered</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        "AWS", "Microsoft Azure", "Google Cloud Platform", "Docker",
        "Kubernetes", "Terraform", "Ansible", "CloudWatch",
        "Jenkins", "GitHub Actions", "Linux Admin", "Prometheus & Grafana"
      ].map((tool, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <div className="rounded-2xl border p-6 text-center bg-gradient-to-tr from-white to-blue-50 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">
            {tool}
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

{/* WHY CHOOSE US */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
  <section className="bg-gradient-to-r from-white to-blue-50 py-16 px-6 rounded-2xl shadow-lg">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-900 text-center">Why Learn Cloud Computing at Data Artisans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Learn multi-cloud strategy with real-world labs",
          "Hands-on experience with AWS, Azure & GCP",
          "Projects covering autoscaling & high availability",
          "Training aligned with global certifications",
          "Placement & career guidance",
          "Real-time mentors from top IT companies"
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl border bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300">
            ✅ {item}
          </div>
        ))}
      </div>
    </div>
  </section>
</ScrollAnimation>

{/* CAREER OPPORTUNITIES */}
<ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-900 text-center">Career Opportunities</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
      {[
        "Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer (SRE)",
        "Cloud Solutions Architect", "Systems Administrator", "Infrastructure Engineer"
      ].map((role, i) => (
        <ScrollAnimation key={i} animation="fadeInUp" delay={0.1*i}>
          <div className="rounded-2xl border p-6 bg-gradient-to-tr from-white to-blue-50 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 font-semibold">
            {role}
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </section>
</ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
        <div className="bg-gradient-to-r from-blue-100 via-indigo-200 to-blue-100 text text-center py-20 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Become a Certified Cloud Professional</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Master AWS, Azure, and GCP with hands-on labs and guided training.
            Enroll now to power your IT career with Cloud expertise.
          </p>
          <Link to="/register" className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition transform hover:scale-105">
            Enroll Now
          </Link>
        </div>
      </ScrollAnimation>

    </section>
  );
}
