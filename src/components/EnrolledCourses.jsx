import React from 'react';

const EnrolledCourses = ({ enrolled, updateProgress }) => {
  return (
    <div className="mt-5">
      <h3 className="text-primary">📚 Enrolled Courses</h3>

      {enrolled.length === 0 ? (
        <p className="text-muted">No courses enrolled yet.</p>
      ) : (
        <div className="row">
          {enrolled.map((course) => (
            <div className="col-md-6 mb-4" key={course.id}>
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{course.title}</h5>
                      <p className="text-muted mb-2">By {course.author}</p>

                      <div className="progress mb-2" style={{ height: '10px' }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: `${course.progress || 0}%` }}
                        ></div>
                      </div>

                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => updateProgress(course.id)}
                        disabled={course.progress === 100}
                      >
                        {course.progress === 100 ? 'Completed' : 'Mark as Completed'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
