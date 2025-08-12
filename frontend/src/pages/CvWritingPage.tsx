import { CheckCircle } from "lucide-react"

const CvWritingPage=()=>(
    <section id="cv-preparation" className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/cv-writing.jpg"
          alt="Why Choose Us"
          className="rounded-lg shadow-lg w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Professional CV Development</h2>
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
)

export default CvWritingPage