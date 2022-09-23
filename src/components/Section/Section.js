import { useContext } from "react";
import { AboutPageContext } from "../../context/AboutPageContext.js";

function Section({ children }) {
  const level = useContext(AboutPageContext);

  return (
    <section>
      <AboutPageContext.Provider value={level + 1}>
        {children}
      </AboutPageContext.Provider>
    </section>
  );
}

export default Section;
