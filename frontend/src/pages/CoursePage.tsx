import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";
import ScrollAnimation from "@/animation/ScrollAnimation"; // ✅ Import

const CoursePage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(category || "list");

  const categoriesMap = {
    engineer: courses.filter((c) => c.title.toLowerCase().includes("engineer")),
    developer: courses.filter((c) => c.title.toLowerCase().includes("developer")),
    analyst: courses.filter((c) => c.title.toLowerCase().includes("analyst")),
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
    <ScrollAnimation direction="up" delay={0.2}> {/* Base fade-up for section */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Title */}
        <ScrollAnimation direction="up" delay={0.3}>
          <h1 className="text-3xl font-bold text-center mb-8">
            {selectedCategory === "list" ? "All Job Roles" : "Job Roles"}
          </h1>
        </ScrollAnimation>

        {/* Category Buttons */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => handleCategoryChange("list")}
              className={`px-4 py-2 rounded ${
                selectedCategory === "list"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              All Roles
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
                {cat === "engineer" && "Engineers"}
                {cat === "developer" && "Developers"}
                {cat === "analyst" && "Analysts"}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Course Cards Grid */}
        <ScrollAnimation direction="up" delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coursesToShow.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </ScrollAnimation>
  );
};

export default CoursePage;
