import { CheckCircle } from "lucide-react";

const MockInterviewPage=()=>(
      <section id="mock-interviews" className="text-center">
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
)
export default MockInterviewPage