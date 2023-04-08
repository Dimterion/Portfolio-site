import { useState } from "react";
import { courses } from "../../data/courses";
import "./studies.css";

function Courses() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  let course = courses[index];

  function handleNextClick() {
    if (index < courses.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setShowDetails(false);
  }

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(courses.length - 1);
    }
    setShowDetails(false);
  }

  function handleShowDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="studiesPage-container">
      <h2>Completed Courses</h2>
      <div>
        <img className="course-image" src={course.image} alt={course.name} />
      </div>
      <button className="details-btn" onClick={handleShowDetails}>
        {showDetails ? "Hide" : "Show"} Details
      </button>
      {showDetails && (
        <div className="details-container">
          <h3>Platform: {course.platform}</h3>
          <p>
            <b>Program:</b> {course.name}
          </p>
          <p>
            <b>Info:</b> {course.info}
          </p>
          <div className="links-container">
            <a
              className="course-link"
              href={course.projectsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"> "}Projects list
            </a>
            <a
              className="course-link"
              href={course.courseLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"> "}Platform site
            </a>
          </div>
        </div>
      )}
      <p>
        ({index + 1} of {courses.length})
      </p>
      <button className="nav-btn" onClick={handlePreviousClick}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="nav-btn" onClick={handleNextClick}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}

export default Courses;
