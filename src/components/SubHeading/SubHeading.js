import Section from "../Section/Section";
import Heading from "../Heading/Heading";

function SubHeading({ title, body }) {
  return (
    <Section>
      <Heading>{title}</Heading>
      <p>{body}</p>
    </Section>
  );
}

export default SubHeading;
