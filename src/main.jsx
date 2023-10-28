import React from "react";
import reactDoom from "react-dom/client";
import "./styles/style.css"

// import Components
import {
  Navbar,
  AboutMe,
  Skills,
  Education,
  Projects,
  Footer,
} from "./components/index";

const router = reactDoom.createRoot(document.getElementById("root"));

router.render(
  <>
    <Navbar />
    <AboutMe />
    <Skills />
    <Education />
    <Projects />
    <Footer />
  </>
);
