import { useState, useEffect } from "react";
import {
  Navbar,
  AboutMe,
  Skills,
  Education,
  Projects,
  Footer,
} from "../components/index";
import style from "./final_styles.module.css";

function Portfolio() {
  const [view, setView] = useState(0);

  useEffect(function () {
    setTimeout(() => {
      setView(1);
    }, 250);
  }, []);

  return (
    <main style={{ opacity: view }}>
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
