import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const AboutPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Who We Are */}
      <section id="training" className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Expert Course Training</h2>
          <p className="text-gray-700 mb-4">
            At Data Artisans Limited, we specialize in providing hands-on, industry-focused training that equips learners
            with the most in-demand technical skills. Our programs go beyond theory, offering practical projects that mirror
            real-world scenarios.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're starting your career or upgrading your skills, our curriculum is designed to make you job-ready. 
            Learn from experienced trainers who bring years of industry expertise to every session.
          </p>
          <p className="text-gray-700 mb-6">
            We ensure your learning journey is smooth, personalized, and outcome-driven. Our mission is simple—turn your potential 
            into a thriving tech career.
          </p>
          <ul className="text-gray-700 text-lg space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> Industry-relevant courses: SQL, Power BI, Azure, and more.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> Live interactive sessions with real-time doubt solving.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> Access to case studies and hands-on labs.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> Certifications to validate your skills.
            </li>
          </ul>
        </div>
        <img
          src="/who-we-are.jpg"
          alt="Who We Are"
          className="rounded-lg shadow-lg w-full"
        />
      </section>

      {/* Why Choose Us */}
      <section id="cv-writing" className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/why-choose-us.jpg"
          alt="Why Choose Us"
          className="rounded-lg shadow-lg w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">CV Writing & Guaranteed Picks</h2>
          <p className="text-gray-700 mb-4">
            A great CV is your first step to landing the perfect job. Our CV writing services ensure that your resume 
            stands out among thousands of applicants. We tailor your CV to highlight your strengths and align with job market trends.
          </p>
          <p className="text-gray-700 mb-4">
            But we don’t stop there. With our guaranteed interview calls, we take an extra step to connect you with the 
            best recruiters in the industry. This means you not only learn with us, but also secure a job with confidence.
          </p>
          <p className="text-gray-700 mb-6">
            Combined with our networking strategies and job marketing support, your career growth becomes unstoppable.
          </p>
          <ul className="text-gray-700 text-lg space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> Professionally crafted, ATS-compliant CV.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> Guaranteed job interview calls from top employers.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> Personal branding strategies to boost visibility.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> LinkedIn optimization for maximum recruiter reach.
            </li>
          </ul>
        </div>
      </section>

      {/* Mock Interviews */}
      <section id="mock" className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Mock Interviews That Build Confidence
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our mock interview sessions simulate real-world interview experiences, helping you overcome anxiety and 
          present yourself confidently in front of hiring managers.
        </p>
        <ul className="text-gray-700 text-lg space-y-2 max-w-xl mx-auto text-left">
          <li className="flex items-center gap-2">
            <CheckCircle className="text-blue-600 w-5 h-5" /> Realistic interview simulations with industry experts.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-blue-600 w-5 h-5" /> Detailed feedback to improve your responses and body language.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-blue-600 w-5 h-5" /> Focus on technical and behavioral questions.
          </li>
        </ul>
      </section>

      {/* Marketing Team */}
      <section id="team" className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Dedicated Marketing Team For Your Success
        </h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          We don’t just train you; we market your profile aggressively so you stand out to employers. Our dedicated team 
          ensures that your skills reach the right audience, giving you a competitive edge in the job market.
        </p>
        <ul className="text-gray-700 text-lg space-y-2 max-w-xl mx-auto text-left">
          <li className="flex items-center gap-2">
            <CheckCircle className="text-blue-600 w-5 h-5" /> Active job marketing to top recruiters and companies.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-blue-600 w-5 h-5" /> Personalized job search assistance.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-blue-600 w-5 h-5" /> Networking support and exclusive hiring events.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
