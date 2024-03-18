import { useState, useEffect } from "react";
import {
  Navbar,
  AboutMe,
  Skills,
  Education,
  Projects,
  Footer,
} from "../components/index";

function Portfolio() {
  const [view, setView] = useState(0);

  useEffect(function () {
    setTimeout(() => {
      setView(1);
    }, 250);
  }, []);

  return (
    <main style={{ opacity: view, overflow : "hidden" }}>
      <Navbar />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </main>
  );
}

export default Portfolio;
