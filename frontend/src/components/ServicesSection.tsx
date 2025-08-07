import { useEffect, useRef, useState } from "react";

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
  const [animatedPercentages, setAnimatedPercentages] = useState(
    sectors.map(() => 0)
  );
  const chartRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % companyLogos.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectors.forEach((sector, index) => {
            let start = 0;
            const end = sector.percentage;
            const duration = 1500;
            const stepTime = Math.floor(duration / end);

            const counter = setInterval(() => {
              start += 1;
              setAnimatedPercentages((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
              });

              if (start === end) clearInterval(counter);
            }, stepTime);
          });
        } else {
          setAnimatedPercentages(sectors.map(() => 0));
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (chartRef.current) {
      observerRef.current.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observerRef.current.unobserve(chartRef.current);
      }
    };
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

        <div className="flex justify-center items-center mb-10 h-24 py-45">
          <img
            src={companyLogos[currentLogo]}
            alt="Company Logo"
            className="h-100 w-160 object-contain transition-all duration-1000"
          />
        </div>

        <div
          className="w-155 h-[150px] rounded-lg shadow-md px-2 border border-gray-200 mx-auto mb-12 flex items-center justify-center"
          style={{ backgroundColor: "#1e156bff" }} 
        >
          <div
            ref={chartRef}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 justify-items-center"
          >
            {sectors.map((sector, index) => {
              const radius = 60;
              return (
                <div key={sector.name} className="flex flex-col items-center p-2">
                  <svg className="w-24 h-24">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#2563EB"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={
                        2 * Math.PI * 40 -
                        (animatedPercentages[index] / 100) * 2 * Math.PI * 40
                      }
                      strokeLinecap="round"
                      style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
                      transform="rotate(-90 48 48)"
                    />
                    <text
                      x="50%"
                      y="52%"
                      textAnchor="middle"
                      className="fill-white text-sm font-semibold"
                    >
                      {animatedPercentages[index]}%
                    </text>
                  </svg>
                  <p className="text-sm font-medium text-white">
                    {sector.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

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
                    <p className="text-blue-600 font-medium">{story.degree}</p>
                    <p className="text-gray-600">{story.university}</p>
                    <div className="mt-4">
                      <p className="text-gray-700 italic">“{story.review}”</p>
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

        <div className="text-white py-6 rounded-xl shadow-lg mt-12" style={{background: "#0b282cdd", fontWeight: "600"}}>
          <h3 className="text-2xl font-bold">
            Trust Us! Get settled in the United Kingdom.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default PlacementsSection;
