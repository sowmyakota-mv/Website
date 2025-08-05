import { CheckCircle, ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";

function WhyDataArtisan() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why <span className="text-blue-700">Data Artisan</span>?
        </h2>

        {/* Two Main Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Box - Course Training */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col text-center relative">
            <img
              src="/background-img.jpg"
              alt="Course Training"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Expert Course Training
            </h3>
            <p className="text-gray-600 mb-4">
              Gain in-demand skills with our industry-oriented curriculum:
            </p>
            <ul className="text-gray-700 text-lg space-y-2">
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-blue-600 w-5 h-5" /> SQL
              </li>
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-blue-600 w-5 h-5" /> Power BI
              </li>
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-blue-600 w-5 h-5" /> Azure
              </li>
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-blue-600 w-5 h-5" /> and more...
              </li>
            </ul>

            {/* Arrow Button */}
            <Link
              to="/about#training"
              className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800"
              title="Go to Training Section"
            >
              <ArrowRightCircle size={28} />
            </Link>
          </div>

          {/* Right Box - CV Writing */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col text-center relative">
            <img
              src="/images/cv-writing.jpg"
              alt="CV Writing"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              CV Writing & Guaranteed Picks
            </h3>
            <p className="text-gray-600 mb-4">
              Stand out from the competition with:
            </p>
            <ul className="text-gray-700 text-lg space-y-2">
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-blue-600 w-5 h-5" /> Professionally crafted CVs
              </li>
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-blue-600 w-5 h-5" /> Guaranteed job interview calls
              </li>
            </ul>

            {/* Arrow Button */}
            <Link
              to="/about#cv-writing"
              className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800"
              title="Go to CV Writing Section"
            >
              <ArrowRightCircle size={28} />
            </Link>
          </div>
        </div>

        {/* Additional Blocks */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mock Interviews */}
          <div className="bg-gray-100 rounded-xl shadow-md p-6 flex gap-4 relative">
            <img
              src="/images/mock-interview.jpg"
              alt="Mock Interviews"
              className="w-28 h-28 object-cover rounded-lg"
            />
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Mock Interviews
              </h4>
              <p className="text-gray-600 mb-3">
                Prepare like a pro with our expert-driven mock sessions.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Real interview scenarios</li>
                <li>Feedback from industry experts</li>
                <li>Confidence building</li>
              </ul>
            </div>

            {/* Arrow Button */}
            <Link
              to="/about#mock"
              className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800"
              title="Go to Mock Interviews"
            >
              <ArrowRightCircle size={24} />
            </Link>
          </div>

          {/* Marketing Team */}
          <div className="bg-gray-100 rounded-xl shadow-md p-6 flex gap-4 relative">
            <img
              src="/images/marketing-team.jpg"
              alt="Marketing Team"
              className="w-28 h-28 object-cover rounded-lg"
            />
            <div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                Dedicated Marketing Team
              </h4>
              <p className="text-gray-600 mb-3">
                Our team ensures your CV reaches the right recruiters.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Active job marketing</li>
                <li>Network with top employers</li>
                <li>Personalized support</li>
              </ul>
            </div>

            {/* Arrow Button */}
            <Link
              to="/about#team"
              className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800"
              title="Go to Marketing Team"
            >
              <ArrowRightCircle size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDataArtisan;
