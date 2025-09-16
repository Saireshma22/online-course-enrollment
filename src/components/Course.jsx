import React from 'react';

const Course = ({ course, addToCart }) => {
  const { title, author, price, img, category } = course;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img src={img} className="card-img-top" alt={title} style={{ height: '180px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title fw-bold">{title}</h6>
          <p className="card-text text-secondary mb-1">By {author}</p>
          <span className="badge bg-info mb-2">{category}</span>
          <h5 className="text-danger mt-auto">${price}</h5>
          <button className="btn btn-success mt-2" onClick={() => addToCart(course)}>
            Enroll
          </button>
        </div>
      </div>
    </div>  );
};

export default Course;