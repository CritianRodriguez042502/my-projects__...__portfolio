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
      <a href="https://drive.google.com/file/d/1KHs6jbCm05FFEQkvft3ltVU_CXSW0xbW/view">
        <img
          title="Cv de Cristian Rodriguez Benitez"
          className={style.imgCV}
          src="https://cdn-icons-png.flaticon.com/512/6588/6588143.png"
          alt="imagen de "
        />
      </a>
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
