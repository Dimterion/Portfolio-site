import { useState } from "react";
import image from "../../assets/image_cliffs.jpg";
import "./quiz.css";

function Quiz() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return (
      <div className="quiz-container">
        <h3>Good job on those geography skills!</h3>
        <p>Here is another picture for you.</p>
        <img
          className="quiz-image"
          src={image}
          alt="Cliffs and sea at the north of France"
        />
        <button className="quiz-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  function handleReset() {
    setStatus("typing");
    setAnswer("");
  }

  return (
    <>
      <h3>You do know where Normandy is, right?</h3>
      <i>
        Type the country name. Just letters (capital or not doesn't matter).
      </i>
      <form onSubmit={handleSubmit}>
        <textarea
          className="quiz-textarea"
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button
          className="quiz-button"
          disabled={answer.length === 0 || status === "submitting"}
        >
          Of course I know!
        </button>
        {error !== null && <p>{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "france";
      if (shouldError) {
        reject(
          new Error(
            "Oh no! That's not correct. Try again (hint: it starts with F)."
          )
        );
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default Quiz;
