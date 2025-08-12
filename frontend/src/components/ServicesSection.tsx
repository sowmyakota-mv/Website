import { FaCheckCircle } from "react-icons/fa";

const stories = [
  {
    name: "John Doe",
    degree: "Master in Data Science",
    university: "University of London",
    course: "Data Engineering",
    company: "Amazon",
    review:
      "It was the perfect place to join for the course, and they helped me throughout the entire process. I joined for Data Engineering and got placed at Amazon.",
    rating: 4.8,
  },
  {
    name: "David Brown",
    degree: "Master in Cloud Computing",
    university: "King's College London",
    course: "Cloud Computing",
    company: "Microsoft",
    review:
      "The team was extremely supportive and guided me through every step. I joined for Cloud Computing and secured a position at Microsoft.",
    rating: 4.7,
  },
  {
    name: "Arjun Kumar",
    degree: "Master in AI & ML",
    university: "Imperial College London",
    course: "Machine Learning",
    company: "Google",
    review:
      "Excellent experience! They provided hands-on training and placement assistance. I joined for Machine Learning and landed a role at Google.",
    rating: 4.9,
  },
];

const sectors = [
  { name: "Health", percentage: 45 },
  { name: "Banking", percentage: 55 },
  { name: "Insurance", percentage: 40 },
  { name: "Fashion", percentage: 50 },
];

// Transparent PNG filenames
const companyLogos = [
  "yash-removebg-preview.png",
  "yahoo-removebg-preview.png",
  "tcs-removebg-preview.png",
  "tata-removebg-preview.png",
  "sony-removebg-preview.png",
  "shieldon-removebg-preview.png",
  "samsung-removebg-preview.png",
  "rolex-removebg-preview.png",
  "puma-removebg-preview.png",
  "p_g-removebg-preview.png",
  "microsoft-removebg-preview.png",
  "meta-removebg-preview.png",
  "mastercard-removebg-preview.png",
  "lloyds-removebg-preview.png",
  "lg-removebg-preview.png",
  "lacoste-removebg-preview.png",
  "intel-removebg-preview.png",
  "infosys-removebg-preview.png",
  "ibm-removebg-preview.png",
  "hp-removebg-preview.png",
  "harvey-removebg-preview.png",
  "google-removebg-preview.png",
  "goodbox-removebg-preview.png",
  "deloitte-removebg-preview.png",
  "dell-removebg-preview.png",
  "cisco-removebg-preview.png",
  "blackberry-removebg-preview.png",
  "accenture-removebg-preview.png",
  "amazon-logo.png",
  "apple.png",
];

function PlacementsSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Your Gateway to Top Careers in the UK
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          350+ successful placements with leading companies and across multiple
          sectors.
        </p>

        {/* Stats section */}
        <div
          className="w-full rounded-lg shadow-md px-6 border border-gray-200 mx-auto mb-12 flex flex-col-reverse md:flex-row items-center gap-8"
          style={{
            background: "linear-gradient(135deg, #9bf0ef, #92eff3)",
          }}
        >
          {/* Left - Sector cards */}
          <div className="flex-1 text-left text-black">
            <p className="text-2xl font-bold mb-4">
              We have successfully placed our students across multiple sectors
              in the UK.
            </p>
            <p className="text-base mb-8">
              Our industry connections and tailored training ensure that
              students find rewarding careers in their chosen fields.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="bg-white text-gray-800 rounded-lg p-4 shadow-md flex items-center gap-3 hover:shadow-lg transition-shadow"
                >
                  <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{sector.name} Sector</p>
                    <p className="text-sm text-gray-600">
                      {sector.percentage}% of our students are placed here.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Company Logos Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6  items-center">
            {companyLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center p-2 rounded-lg hover:shadow-lg transition-shadow"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src={`/${logo}`}
                  alt={`Company Logo ${idx}`}
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Success stories */}
        <section id="success" className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              Our Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {story.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {story.degree}
                    </p>
                    <p className="text-gray-600">{story.university}</p>
                    <div className="mt-4">
                      <p className="text-gray-700 italic">
                        “{story.review}”
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700 font-semibold">
                      Rating: {story.rating.toFixed(1)} / 5
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${(story.rating / 5) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust tag */}
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
      </div>
    </section>
  );
}

export default PlacementsSection;
