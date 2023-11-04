import React from "react";
import { useState, useEffect } from "react";
import reactDoom from "react-dom/client";
import "./styles/style.css";

// import Components
import {
  Navbar,
  AboutMe,
  Skills,
  Education,
  Projects,
  Footer,
} from "./components/index";

const App = () => {
  const [view, setView] = useState(0);

  useEffect(function () {
    setTimeout(() => {
      setView(1);
    }, 250);
  }, []);

  return (
    <article style={{ opacity: view }}>
      <Navbar />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </article>
  );
};

reactDoom.createRoot(document.getElementById("root")).render(<App />);
