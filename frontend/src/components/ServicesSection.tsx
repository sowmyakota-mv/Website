import {
  FaStethoscope, // Health
  FaUniversity,  // Banking
  FaShieldAlt,   // Insurance
  FaTshirt,      // Fashion
} from "react-icons/fa";
import SuccessStories from "./SuccessStories";
import ScrollAnimation from "@/animation/ScrollAnimation"; // ✅ Animation import

// Map sector names to their icons
const sectorIcons: Record<string, JSX.Element> = {
  Health: <FaStethoscope className="text-blue-500 text-2xl flex-shrink-0" />,
  Banking: <FaUniversity className="text-green-500 text-2xl flex-shrink-0" />,
  Insurance: <FaShieldAlt className="text-purple-500 text-2xl flex-shrink-0" />,
  Fashion: <FaTshirt className="text-pink-500 text-2xl flex-shrink-0" />,
};

const sectors = [
  { name: "Health", percentage: 45 },
  { name: "Banking", percentage: 55 },
  { name: "Insurance", percentage: 40 },
  { name: "Fashion", percentage: 50 },
];

const companyLogos = [
  "gsk.png",
  "astrazeneca.png",
  "smith&nephew.png",
  "bupa.png",
  "nuffield.png",
  "hca.png",
  "hsbc.png",
  "barclays.png",
  "lloyds.png",
  "natwest.png",
  "santander.png",
  "nationwide.png",
  "tsb.png",
  "l&g.png",
  "prudential.png",
  "phoenix.png",
  "rsa.png",
  "asos.png",
  "riverisland.png",
  "allsaints.png",
  "topshop.png",
  "superdry.png",
  "coats.png",
  "money.png",
  "metro.png",
  "monzo.png",
  "revolut.png",
  "accenture.png",
  "amazon-logo.png",
  "apple.png",
];

function PlacementsSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section heading animation */}
        <ScrollAnimation direction="up" delay={0.2}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your Gateway to Top Careers in the UK
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4}>
          <p className="text-lg text-gray-600 mb-10">
            350+ successful placements with leading companies and across multiple sectors.
          </p>
        </ScrollAnimation>

        {/* Stats + Logos Section */}
        <ScrollAnimation direction="up" delay={0.6}>
          <div
            className="w-full rounded-lg shadow-md px-6 py-6 border border-gray-200 mx-auto mb-12 flex flex-col-reverse md:flex-row items-center gap-8"
            style={{
              background: "linear-gradient(135deg, #9bf0ef, #92eff3)",
            }}
          >
            {/* Left - Sector cards */}
            <div className="flex-1 text-left text-black">
              <ScrollAnimation direction="left" delay={0.8}>
                <p className="text-2xl font-bold mb-4">
                  We have successfully placed our students across multiple sectors in the UK.
                </p>
              </ScrollAnimation>

              <ScrollAnimation direction="left" delay={1.0}>
                <p className="text-base mb-8">
                  Our industry connections and tailored training ensure that students find rewarding careers in their chosen fields.
                </p>
              </ScrollAnimation>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {sectors.map((sector, i) => (
                  <ScrollAnimation key={sector.name} direction="up" delay={1.2 + i * 0.1}>
                    <div
                      className="bg-white text-gray-800 rounded-lg p-4 shadow-md flex items-center gap-3 hover:shadow-lg transition-shadow"
                    >
                      {sectorIcons[sector.name]}
                      <div>
                        <p className="font-semibold">{sector.name} Sector</p>
                        <p className="text-sm text-gray-600">
                          {sector.percentage}% of our students are placed here.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            {/* Right - Company Logos Grid */}
            <ScrollAnimation direction="right" delay={0.8}>
              <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
                {companyLogos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex justify-center items-center hover:shadow-md transition-shadow"
                  >
                    <img
                      src={`/${logo}`}
                      alt={`Company Logo ${idx}`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        {/* Success Stories Animation */}
        <ScrollAnimation direction="up" delay={1.2}>
          <SuccessStories />
        </ScrollAnimation>

        {/* Final trust message */}
        <ScrollAnimation direction="up" delay={1.4}>
          <div
            className="text-white py-6 rounded-xl shadow-lg mt-12"
            style={{
              background: "#0b282cdd",
              fontWeight: "600",
            }}
          >
            <h3 className="text-2xl font-bold">
              Trust Us! Get settled in the United Kingdom.
            </h3>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
}

export default PlacementsSection;
