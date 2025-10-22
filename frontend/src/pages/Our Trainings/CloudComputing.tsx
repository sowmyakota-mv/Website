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

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
        <div className="bg-gradient-to-tr from-blue-50 via-indigo-50 to-white text-center py-16 px-6 rounded-2xl shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-900">What You’ll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-4 text-lg text-blue-700">
              {[
                "Cloud computing concepts and deployment models",
                "AWS, Azure, and Google Cloud fundamentals",
                "Serverless architecture and containerization (Docker, Kubernetes)",
                "Infrastructure as Code using Terraform",
                "Networking, load balancing, and security groups",
                "Identity and Access Management (IAM)",
                "Monitoring, logging, and automation",
                "Disaster recovery and backup strategies",
                "Cost optimization and performance tuning",
                "CI/CD and DevOps integration in cloud"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-2 hover:text-blue-900 transition-colors">
            <span className="text-blue-900 font-bold">•</span>
            <span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools Section */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Platforms & Tools Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-blue-800">
            {[
              "AWS", "Microsoft Azure", "Google Cloud Platform", "Docker",
              "Kubernetes", "Terraform", "Ansible", "CloudWatch",
              "Jenkins", "GitHub Actions", "Linux Admin", "Prometheus & Grafana"
            ].map((tool, i) => (
              <div key={i} className="rounded-xl border p-4 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Why Choose Us */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.6}>
        <div className="bg-gradient-to-r from-white to-blue-50 py-16 px-6 rounded-2xl shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Why Learn Cloud Computing at Data Artisans</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-blue-700">
              {[
                "Learn multi-cloud strategy with real-world labs",
                "Hands-on experience with AWS, Azure & GCP",
                "Projects covering autoscaling & high availability",
                "Training aligned with global certifications",
                "Placement & career guidance",
                "Real-time mentors from top IT companies"
              ].map((item, i) => (
                <li key={i} className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-lg hover:bg-blue-50 transition transform hover:-translate-y-1">✅ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Career Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {[
              "Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer (SRE)",
              "Cloud Solutions Architect", "Systems Administrator", "Infrastructure Engineer"
            ].map((role, i) => (
              <div key={i} className="rounded-2xl border bg-gradient-to-tr from-white to-blue-50 p-6 font-semibold shadow-md hover:shadow-xl hover:scale-105 transition transform">
                {role}
              </div>
            ))}
          </div>
        </div>
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
