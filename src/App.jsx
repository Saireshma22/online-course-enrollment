import React, { useState, useEffect } from "react";
import CourseInfo from "./components/CourseInfo";
import Cart from "./components/Cart";
import EnrolledCourses from "./components/EnrolledCourses";

function App() {
  const [cart, setCart] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
  localStorage.removeItem("enrolled"); 
}, []);

  // Load cart and enrolled from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedEnrolled = JSON.parse(localStorage.getItem("enrolled")) || [];
    setCart(storedCart);
    setEnrolled(storedEnrolled);
  }, []);

  // Update localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Update localStorage when enrolled changes
  useEffect(() => {
    localStorage.setItem("enrolled", JSON.stringify(enrolled));
  }, [enrolled]);

  // Add course to cart
  const handleEnroll = (course) => {
    if (!cart.find((c) => c.id === course.id)) {
      const updatedCart = [...cart, course];
      setCart(updatedCart);
    }
  };

  // Remove course from cart
  const handleRemoveFromCart = (courseId) => {
    const updatedCart = cart.filter((course) => course.id !== courseId);
    setCart(updatedCart);
  };

  // Confirm enrollment from cart
  const handleConfirmEnrollment = () => {
    const newEnrollments = cart
      .filter((course) => !enrolled.find((c) => c.id === course.id))
      .map((c) => ({ ...c, progress: 0 }));

    const updatedEnrolled = [...enrolled, ...newEnrollments];
    setEnrolled(updatedEnrolled);
    setCart([]);
  };

  // Update course progress
  const updateProgress = (courseId) => {
    const updatedEnrolled = enrolled.map((course) =>
      course.id === courseId
        ? { ...course, progress: course.progress === 100 ? 100 : course.progress + 25 }
        : course
    );
    setEnrolled(updatedEnrolled);
  };

  return (
    <div className="container-fluid mt-3">
      <h2 className="text-center text-info mb-4">🎓 Online Course Enrollment System</h2>

      {/* Available Courses */}
      <CourseInfo cart={cart} handleEnroll={handleEnroll} />

      {/* Cart */}
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />

      {/* Confirm Enrollment Button */}
      {cart.length > 0 && (
        <div className="text-center my-3">
          <button className="btn btn-success" onClick={handleConfirmEnrollment}>
            Confirm Enrollment
          </button>
        </div>
      )}

      {/* Enrolled Courses */}
      <EnrolledCourses enrolled={enrolled} updateProgress={updateProgress} />
    </div>
  );
}

export default App;