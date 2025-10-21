import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function CloudComputing() {
  return (
    <section id="our-services/cloud-computing" className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-white py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
          Cloud Computing
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Learn how to design, deploy, and manage scalable applications on AWS,
          Azure, and Google Cloud. Become a certified cloud professional ready
          for enterprise roles.
        </p>
      </div>

      {/* About Section */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans Cloud Computing Bootcamp</strong> equips
            learners with the skills to design and manage modern cloud
            infrastructure. You’ll understand how to build fault-tolerant,
            secure, and cost-effective solutions using AWS, Azure, and GCP.
          </p>

          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            Through real-time labs, you’ll learn about virtualization,
            networking, automation, monitoring, and disaster recovery setups.
            This course also prepares you for popular certifications like
            <strong> AWS Solutions Architect</strong> and{" "}
            <strong>Azure Administrator.</strong>
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You’ll Learn</h2>
            <ul className="space-y-4 text-lg text-slate-700">
              <li>• Cloud computing concepts and deployment models</li>
              <li>• AWS, Azure, and Google Cloud fundamentals</li>
              <li>• Serverless architecture and containerization (Docker, Kubernetes)</li>
              <li>• Infrastructure as Code using Terraform</li>
              <li>• Networking, load balancing, and security groups</li>
              <li>• Identity and Access Management (IAM)</li>
              <li>• Monitoring, logging, and automation</li>
              <li>• Disaster recovery and backup strategies</li>
              <li>• Cost optimization and performance tuning</li>
              <li>• CI/CD and DevOps integration in cloud</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools Section */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Platforms & Tools Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-slate-800">
            {[
              "AWS",
              "Microsoft Azure",
              "Google Cloud Platform",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Ansible",
              "CloudWatch",
              "Jenkins",
              "GitHub Actions",
              "Linux Admin",
              "Prometheus & Grafana",
            ].map((tool, i) => (
              <div
                key={i}
                className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Why Choose Us */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-gradient-to-r from-white to-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Why Learn Cloud Computing at Data Artisans
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-slate-700">
              <li>✅ Learn multi-cloud strategy with real-world labs</li>
              <li>✅ Hands-on experience with AWS, Azure & GCP</li>
              <li>✅ Projects covering autoscaling & high availability</li>
              <li>✅ Training aligned with global certifications</li>
              <li>✅ Placement & career guidance</li>
              <li>✅ Real-time mentors from top IT companies</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {[
              "Cloud Engineer",
              "DevOps Engineer",
              "Site Reliability Engineer (SRE)",
              "Cloud Solutions Architect",
              "Systems Administrator",
              "Infrastructure Engineer",
            ].map((role, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-slate-50 p-6 font-semibold shadow-sm hover:shadow-md transition"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-indigo-200 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Become a Certified Cloud Professional</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Master AWS, Azure, and GCP with hands-on labs and guided training.
          Enroll now to power your IT career with Cloud expertise.
        </p>
        <Link
          to="/register"
          className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-50 transition"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
