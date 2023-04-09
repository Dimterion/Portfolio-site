import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import "./subHeading.css";

function SubHeading({ title, body }) {
  return (
    <div className="subHeading-container">
      <Section>
        <Heading>{title}</Heading>
        <p className="subheading-text">{body}</p>
      </Section>
    </div>
  );
}

export default SubHeading;
