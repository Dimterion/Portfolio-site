import { useState } from "react";
import { images } from "../../data/images";
import "./form.css";

function Form() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstPart, setFirstPart] = useState("Normandy again.");
  const [secondPart, setSecondPart] = useState("Because it's gorgeous.");
  const [index, setIndex] = useState(0);

  const hasNext = index < images.length - 1;
  let image = images[index].src;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div className="mainForm">
      <button className="nextImg-btn" onClick={handleClick}>
        Change Image
      </button>
      <p>
        <i>
          Image {index + 1} out of {images.length}
        </i>
      </p>
      <div className="image-container">
        <img
          className="form-image"
          src={image}
          alt="Sea horizon at the north of France"
        />
        <i className="firstPhrase">{firstPart}</i>
        <i className="secondPhrase">{secondPart}</i>
      </div>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(!isEditing);
        }}
      >
        <label>
          {isEditing && (
            <input
              value={firstPart}
              onChange={(e) => {
                setFirstPart(e.target.value);
              }}
            />
          )}
        </label>
        <label>
          {isEditing && (
            <input
              value={secondPart}
              onChange={(e) => {
                setSecondPart(e.target.value);
              }}
            />
          )}
        </label>
        <button className="editPhrase-btn" type="submit">
          {isEditing ? "Save" : "Edit"} Text
        </button>
        <button
          className="clearPhrase-btn"
          onClick={(e) => {
            e.preventDefault();
            setFirstPart("");
            setSecondPart("");
          }}
        >
          Clear Text
        </button>
      </form>
    </div>
  );
}

export default Form;
