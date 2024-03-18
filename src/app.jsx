import React from "react";
import reactDoom from "react-dom/client";
import "./styles/index.css";
import Portfolio from "./view/Portfolio.jsx";

const root = reactDoom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Portfolio />
  </>
);
