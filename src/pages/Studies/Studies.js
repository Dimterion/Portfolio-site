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
      <h2>Here you can see the courses I've completed</h2>
      <button className="nav-btn" onClick={handlePreviousClick}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="nav-btn" onClick={handleNextClick}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
      <h3>
        <i>Platform: {course.platform}</i>
        <p>Course: {course.name}</p>
        <img className="course-image" src={course.image} alt={course.name} />
      </h3>
      <button className="details-btn" onClick={handleShowDetails}>
        {showDetails ? "Hide" : "Show"} details
      </button>
      {showDetails && (
        <div className="details-container">
          <p>{course.info}</p>
          <div className="links-container">
            <a
              className="course-link"
              href={course.projectsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to the projects
            </a>
            <a
              className="course-link"
              href={course.courseLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to the platform
            </a>
          </div>
        </div>
      )}
      <h3>
        ({index + 1} of {courses.length})
      </h3>
    </div>
  );
}

export default Courses;
