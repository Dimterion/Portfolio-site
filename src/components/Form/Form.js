import { useState } from "react";
import image from "../../assets/image_horizon.jpg";
import "./form.css";

function Form() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstPart, setFirstPart] = useState(
    "Normandy again."
  );
  const [secondPart, setSecondPart] = useState(
    "Because it's gorgeous."
  );

  return (
    <div>
      <div className="image-container">
        <img
          className="form-image"
          src={image}
          alt="Sea horizon at the north of France"
        />
        <i className="firstPhrase">{firstPart}</i>
        <i className="secondPhrase">{secondPart}</i>
      </div>
      <form className="form-container"
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
        <button className="editPhrase-btn" type="submit">{isEditing ? "Save" : "Edit"} phrase</button>
      </form>
    </div>
  );
}

export default Form;
