import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

const CoursePage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(category || "list");

  const categoriesMap = {
    backend: courses.filter((c) =>
      ["Node.js", "Express", "Django"].some((kw) =>
        c.title.toLowerCase().includes(kw.toLowerCase())
      )
    ),
    data: courses.filter((c) => c.title.toLowerCase().includes("data")),
    frontend: courses.filter((c) => c.title.toLowerCase().includes("react")),
    uiux: courses.filter((c) => c.title.toLowerCase().includes("ui/ux")),
    android: courses.filter((c) =>
      c.title.toLowerCase().includes("android")
    ),
    java: courses.filter((c) => c.title.toLowerCase().includes("java")),
  };

  useEffect(() => {
    setSelectedCategory(category || "list");
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    navigate(`/${newCategory}`);
  };

  const coursesToShow =
    selectedCategory === "list"
      ? courses
      : categoriesMap[selectedCategory] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        {selectedCategory === "list" ? "All Courses" : "Our Courses"}
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => handleCategoryChange("list")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "list"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All Courses
        </button>
        {Object.keys(categoriesMap).map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded ${
              selectedCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat === "backend" && "Backend Development"}
            {cat === "data" && "Data Analytics"}
            {cat === "frontend" && "Frontend Development"}
            {cat === "uiux" && "UI/UX Design"}
            {cat === "android" && "Android Development"}
            {cat === "java" && "Java Developer"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coursesToShow.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
