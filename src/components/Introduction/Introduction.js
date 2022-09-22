import Section from "../Section/Section";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";

function Introduction() {
  return (
    <Section>
      <Heading>Hi! I'm Dmitrii</Heading>
      <SubHeading
        title="I live in France and learn Web Development focusing on Front-End (with some bits of Back-End)."
        body="This small site was made in order to learn React using its oficial documentation. I'm mostly focusing on testing some of the techniques rather than making everything ideal."
      />
    </Section>
  );
}

export default Introduction;
