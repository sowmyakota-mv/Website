import React from "react";
import { Link } from "react-router-dom";

const jobRoles = [
  {
    id: 1,
    role: "Data Engineer",
    duration: "60 Days",
    technologies: "Python, SQL, Spark, AWS, Airflow",
    description:
      "Design and maintain scalable data pipelines, build ETL workflows and optimize big data systems.",
    path: "/our-services/data-science",
  },
  {
    id: 2,
    role: "Business Intelligence Analyst",
    duration: "45 Days",
    technologies: "Power BI, Tableau, SQL, Excel",
    description:
      "Develop insightful dashboards, reports, and business metrics to support decision-making.",
    path: "/our-services/business-intelligence",
  },
  {
    id: 3,
    role: "Cloud Solutions Architect",
    duration: "70 Days",
    technologies: "AWS, Azure, Docker, Kubernetes",
    description:
      "Architect and deploy secure, scalable, and cost-effective cloud infrastructure for enterprises.",
    path: "/our-services/cloud-computing",
  },
  {
    id: 4,
    role: "AI & Machine Learning Engineer",
    duration: "90 Days",
    technologies: "Python, TensorFlow, Scikit-Learn, MLOps",
    description:
      "Build, train, and deploy AI models and automate ML pipelines for real-world business applications.",
    path: "/our-services/ai-ml",
  },
  {
    id: 5,
    role: "Application Developer",
    duration: "55 Days",
    technologies: "React, Node.js, MongoDB, Express",
    description:
      "Create robust full-stack applications and APIs with modern JavaScript frameworks.",
    path: "/our-services/full-stack-js",
  },
  {
    id: 6,
    role: "Cyber Security Analyst",
    duration: "60 Days",
    technologies: "Kali Linux, SIEM, Firewalls, Ethical Hacking",
    description:
      "Protect organizational data by monitoring, detecting, and mitigating cyber threats.",
    path: "/our-services/cyber-security",
  },
  {
    id: 7,
    role: "IT Strategy Consultant",
    duration: "40 Days",
    technologies: "ITSM, Agile, Cloud Strategy, Governance",
    description:
      "Help organizations align technology with business goals, manage IT transformation projects.",
    path: "/job-roles/it-strategy-consulting",
  },
];

export default function Career() {
  return (
    <section id="career" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Career D
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-blue-600">Data Artisans</span>, we don’t just train - we
            transform your career. Our job-oriented programs are designed to
            equip you with practical skills demanded by top companies. From
            personalized training to resume building, mock interviews, and job
            placement support - we ensure you’re ready for the industry.
          </p>
        </div>

        {/* What You Get Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Intensive hands-on training programs led by industry experts.</li>
            <li>Job-role specific learning paths and practical assignments.</li>
            <li>CV preparation, LinkedIn optimization, and mock interview sessions.</li>
            <li>Guaranteed interview opportunities with hiring partners.</li>
            <li>Career guidance and post-placement mentoring.</li>
          </ul>
        </div>

        {/* Job Roles Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-200 text-left">
                <th className="py-3 px-6">S.No</th>
                <th className="py-3 px-6">Job Role</th>
                <th className="py-3 px-6">Days of Training</th>
                <th className="py-3 px-6">Technologies Involved</th>
                <th className="py-3 px-6">Short Description</th>
              </tr>
            </thead>
            <tbody>
              {jobRoles.map((job, index) => (
                <tr
                  key={job.id}
                  className="group border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-4 px-6 text-gray-700">{index + 1}</td>

                  {/* Job Role — hover effect (desktop) + always blue & underlined on mobile */}
                  <td className="py-4 px-6 font-medium text-gray-800">
                    <Link
                      to={job.path}
                      className="
                        transition duration-200
                        group-hover:text-blue-600 group-hover:underline
                        text-blue-600 underline md:no-underline md:text-gray-800
                        md:group-hover:text-blue-600 md:group-hover:underline
                      "
                    >
                      {job.role}
                    </Link>
                  </td>

                  <td className="py-4 px-6 text-gray-700">{job.duration}</td>
                  <td className="py-4 px-6 text-gray-700">{job.technologies}</td>
                  <td className="py-4 px-6 text-gray-600">{job.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Ready to Start Your Career Journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our job-oriented training programs and step confidently into
            your dream role.
          </p>
          <a
            href="/register"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
