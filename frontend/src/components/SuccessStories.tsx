import React, { useState, useEffect } from "react";
import ScrollAnimation from "@/animation/ScrollAnimation"; // ✅ Added animation import

function SuccessStories() {
  const stories = [
    { name: "Abdul", degree: "Master in Data Science", university: "University of London", review: "It was the perfect place to join for the course, and they helped me throughout the entire process. I joined for Data Engineering and got placed at Amazon.", rating: 4.8 },
    { name: "Adithyan", degree: "Master in Cloud Computing", university: "King's College London", review: "The team was extremely supportive and guided me through every step. I joined for Cloud Computing and secured a position at Microsoft.", rating: 4.7 },
    { name: "Arjun Kumar", degree: "Master in AI & ML", university: "Imperial College London", review: "Excellent experience! They provided hands-on training and placement assistance. I joined for Machine Learning and landed a role at Google.", rating: 4.9 },
    { name: "Priya Sharma", degree: "MSc in Data Analytics", university: "University of Edinburgh", review: "The program was very comprehensive and practical. I felt fully prepared for interviews and got placed at Facebook.", rating: 4.8 },
    { name: "Rohan Verma", degree: "Master in AI", university: "University of Oxford", review: "The instructors were amazing and always available. My learning experience was seamless, and I got a role at Apple.", rating: 4.9 },
    { name: "Sneha Gupta", degree: "MSc in Cloud Computing", university: "University of Cambridge", review: "I loved the hands-on approach and career support. It helped me secure a position at IBM without any hassle.", rating: 4.7 },
    { name: "Vikram Singh", degree: "Master in Data Engineering", university: "King's College London", review: "The mentors were excellent, and the assignments were very practical. I successfully got placed at Tesla.", rating: 4.8 },
    { name: "Ananya Roy", degree: "MSc in Machine Learning", university: "Imperial College London", review: "Supportive environment and detailed feedback helped me improve significantly. I am now working at Netflix.", rating: 4.9 },
    { name: "Karan Mehta", degree: "Master in AI & Data Science", university: "University of London", review: "The career guidance and mentorship made a huge difference. Got placed at Amazon with confidence.", rating: 4.8 },
    { name: "Isha Patel", degree: "MSc in Cloud Computing", university: "King's College London", review: "Great curriculum, practical exercises, and placement support. Secured my role at Microsoft easily.", rating: 4.7 },
    { name: "Rahul Desai", degree: "MSc in AI & ML", university: "Imperial College London", review: "Excellent guidance throughout the course. Hands-on projects helped me get placed at Google.", rating: 4.9 },
    { name: "Neha Kapoor", degree: "Master in Data Analytics", university: "University of Edinburgh", review: "Amazing learning experience and placement support. I am now happily working at Facebook.", rating: 4.8 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const itemsPerPage = 3;

  const isMobile = window.innerWidth < 768;
  const itemsToShow = isMobile ? 1 : itemsPerPage;

  useEffect(() => {
    let zoomInterval;
    let moveTimeout;

    const startAnimation = () => {
      let index = 0;
      zoomInterval = setInterval(() => {
        setActiveCard(index);
        index++;

        if (index === itemsToShow) {
          clearInterval(zoomInterval);
          moveTimeout = setTimeout(() => {
            setCurrentIndex((prev) =>
              prev + itemsToShow >= stories.length ? 0 : prev + itemsToShow
            );
            setActiveCard(0);
          }, 1300);
        }
      }, 1200);
    };

    startAnimation();

    return () => {
      clearInterval(zoomInterval);
      clearTimeout(moveTimeout);
    };
  }, [currentIndex, itemsToShow]);

  const visibleStories = stories.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Heading Animation */}
        <ScrollAnimation direction="up" delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6">
            Inspiring Success Stories
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4}>
          <p className="text-gray-600 text-center text-lg md:text-xl max-w-3xl mb-6">
            Our students have achieved remarkable milestones, gaining the skills,
            confidence, and guidance to thrive in the competitive tech industry.
          </p>
        </ScrollAnimation>

        {/* Stories Card Animation */}
          <div
            className={`md:w-4/5 w-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl shadow-xl p-10 
            grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out`}
          >
            {visibleStories.map((story, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-md flex flex-col justify-between transform transition-all duration-700 
                ${activeCard === index ? "scale-110 bg-blue-200 shadow-2xl" : "scale-100 bg-blue-50"}`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {story.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {story.degree}
                  </p>
                  <p className="text-gray-600 mb-4">{story.university}</p>
                  <p className="text-gray-700 italic">“{story.review}”</p>
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
  );
}

export default SuccessStories;
