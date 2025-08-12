import { CheckCircle } from "lucide-react";

const MarketingTeamPage=()=>(
    <section id="cv-marketing" className="text-center">
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
)
export default MarketingTeamPage