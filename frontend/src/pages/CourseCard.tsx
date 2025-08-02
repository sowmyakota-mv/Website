import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={course.previewImage}
        alt={course.title}
        className="rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold">{course.title}</h3>
      <p className="text-gray-600 mb-2">{course.shortDescription}</p>
      <div className="flex items-center justify-between">
        <span className="text-yellow-500 font-semibold">{course.rating} ★</span>
        <span className="text-gray-500">{course.reviews.toLocaleString()}</span>
      </div>
      <Link
        to={`/course/${course.id}`}
        className="mt-4 block bg-purple-600 text-white text-center py-2 rounded hover:bg-purple-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
