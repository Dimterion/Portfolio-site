import { useState } from "react";
import { courses } from "../../data/courses";

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
    <div>
      <h1>
        WORK IN PROGRESS. But you can check the links at the bottom of the
        page. Thanks!
      </h1>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{course.platform}</i>
        <p>Course: {course.name}</p>
      </h2>
      <h3>
        ({index + 1} of {courses.length})
      </h3>
      <button onClick={handleShowDetails}>
        {showDetails ? "Hide" : "Show"} details
      </button>
      {showDetails && <p>{course.link}</p>}
    </div>
  );
}

export default Courses;
