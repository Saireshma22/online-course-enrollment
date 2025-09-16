import React, { useState } from "react";
import fakeData from "./fakedata/fakeData";
import Course from "./Course";

const CourseInfo = ({ cart, handleEnroll }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(fakeData.map((course) => course.category))];

  const filteredCourses = fakeData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mb-4">
      <div className="d-flex gap-3 mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Course key={course.id} course={course} addToCart={handleEnroll} />
          ))
        ) : (
          <p className="text-muted">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default CourseInfo;
