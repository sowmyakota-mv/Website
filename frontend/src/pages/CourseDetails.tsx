import { courses } from "../data/courses";
import { useParams } from "react-router-dom";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) return <h2 className="mt-20 text-center">Course Not Found</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600">{course.shortDescription}</p>
      <img
        src={course.previewImage}
        alt={course.title}
        className="w-full rounded-lg"
      />
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-yellow-500">
          {course.rating}★
        </span>
        <span className="text-gray-500">
          {course.reviews.toLocaleString()} reviews
        </span>
      </div>

      <section>
        <h2 className="text-xl font-semibold">What you'll learn</h2>
        <ul className="list-disc list-inside mt-2">
          {course.whatYouWillLearn.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">This course includes</h2>
        <ul className="list-disc list-inside mt-2">
          {course.courseIncludes.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Requirements</h2>
        <ul className="list-disc list-inside mt-2">
          {course.requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="mt-2 whitespace-pre-line">{course.longDescription}</p>
      </section>
    </div>
  );
};

export default CourseDetailPage;
