import { CheckCircle } from "lucide-react";

function JobPlacementPage() {
  return (
    <section id="job-placement" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Job Placement Assistance
        </h1>

        {/* Image */}
        <div className="mb-8">
          <img
            src="/job-placement.jpg" // Change to your actual image path
            alt="Job Placement Assistance"
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
          <p>
            At Data Artisans, we go beyond training by providing personalized job
            placement assistance to help you secure your ideal role in the
            competitive job market. Our dedicated team works closely with you
            to identify opportunities that align with your skills, interests, and career goals.
          </p>
          <p>
            We leverage our strong industry connections, exclusive job
            partnerships, and proactive outreach strategies to ensure your
            profile reaches the right employers. From application tracking to
            interview preparation, we guide you at every step.
          </p>
          <p>
            Whether you’re starting your career or looking for your next
            challenge, our placement assistance program is designed to give you
            the confidence and resources to succeed.
          </p>
        </div>

        {/* Bullet Points */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Placement Support Includes:
          </h2>
          <ul className="space-y-3">
            {[
              "One-on-one placement guidance",
              "Exclusive job openings",
              "Continuous career support",
              "Employer networking opportunities",
              "Resume and portfolio optimization"
            ].map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default JobPlacementPage;
