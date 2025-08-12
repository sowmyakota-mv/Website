import { CheckCircle } from "lucide-react";


const Training=()=>(
<section id="training" className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Hands-On Course Training</h2>
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
          src="/training.jpg"
          alt="Who We Are"
          className="rounded-lg shadow-lg w-full"
        />
      </section>
)
export default Training