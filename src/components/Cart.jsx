import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="mt-4">
      <h3 className="text-danger">🛒 Cart</h3>
      {cart.length === 0 ? (
        <p className="text-muted">No courses added to cart.</p>
      ) : (
        <div className="row">
          {cart.map((course, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={course.img}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text text-secondary">By {course.author}</p>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleRemoveFromCart(course.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
