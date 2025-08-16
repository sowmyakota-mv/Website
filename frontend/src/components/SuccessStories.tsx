const stories = [
  {
    name: "Abdul",
    degree: "Master in Data Science",
    university: "University of London",
    course: "Data Engineering",
    company: "Amazon",
    review:
      "It was the perfect place to join for the course, and they helped me throughout the entire process. I joined for Data Engineering and got placed at Amazon.",
    rating: 4.8,
  },
  {
    name: "Adithyan",
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

function SuccessStories() {
  return (
    <section className="py-16 bg-gray-50">
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
                <h3 className="text-xl font-semibold text-gray-800">{story.name}</h3>
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
                    style={{ width: `${(story.rating / 5) * 100}%` }}
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
