import { useEffect, useState } from "react";
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

const companyLogos = [
  "/amazon.jpg",
  "/barclays-bank.jpg",
  "/lloyds-bank.jpg",
  "/harvey-nichols.jpg",
];

function PlacementsSection() {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % companyLogos.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

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

        {/* Stats section - Left text / Right logo */}
        <div
  className="w-full sm:w-[90%] md:w-full h-auto rounded-lg shadow-md px-2 border border-gray-200 mx-auto mb-12 flex flex-col md:flex-row items-center"
  style={{ backgroundColor: "#1e156bff" }}
>
  {/* Left - Sector info with heading + paragraph + check icons */}
  <div className="flex-1 text-left text-white space-y-4">
    <p className="text-xl font-semibold">
      We have successfully placed our students across multiple sectors in the UK.
    </p>
    <p className="text-base text-gray-200">
      Our industry connections and tailored training ensure that students find    rewarding careers in their chosen fields.
    </p>

    {sectors.map((sector) => (
      <p key={sector.name} className="text-lg flex items-start gap-2">
        <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
        <span>
          {sector.name} Sector – {sector.percentage}% of our students are placed in this field.
        </span>
      </p>
    ))}
  </div>

  {/* Right - Logo full width/height */}
  <div className="flex-1 flex justify-center items-center mt-6 md:mt-0 w-full h-full">
    <img
      src={companyLogos[currentLogo]}
      alt="Company Logo"
      className="w-full h-full object-contain transition-all duration-1000"
    />
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
