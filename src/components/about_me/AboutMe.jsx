import { useState, useEffect } from "react";
import imgCristian from "../../assents/images/about_me/cristian.jpeg";
import imgDesktops from "../../assents/images/about_me/image_desktops.png";
import style from "./style_about_me.module.css";

export function AboutMe() {
  const [apparence, setApparence] = useState({
    opacity: "0.2",
    width: "57%",
  });
  const [colorFirstLetter, setColorFirstLetter] = useState("#333333");
  const [counter, setCounter] = useState(0);
  const softColors = [
    "rgb(100, 160, 180)",
    "rgb(200, 120, 130)",
    "rgb(80, 180, 80)",
    "rgb(200, 160, 130)",
    "rgb(180, 80, 80)",
  ];

  useEffect(
    function () {
      if (apparence.opacity === "0.2" && apparence.width === "57%") {
        setTimeout(function () {
          setApparence({
            opacity: "1",
            width: "74%",
          });
        }, 700);
      }

      if (apparence.opacity === "1" && apparence.width === "74%") {
        if (counter < softColors.length) {
          setTimeout(() => {
            setColorFirstLetter(softColors[counter]);
            setCounter(counter + 1);
          }, 350);
        }
      }
    },
    [apparence, counter]
  );

  return (
    <main id="about_me">
      <section className={style.containerAboutMe}>
        <img
          style={apparence}
          className={style.imgCristian}
          src={imgCristian}
          alt="img"
        />
        <h1 className={style.aboutMe}>
          <span style={{ color: colorFirstLetter}}>H</span>ola, soy Cristian
          Rodriguez
        </h1>
        <p className={style.description}>
          Desarrollador de servidores y sitios web
        </p>
        <img className={style.imgDesktops} src={imgDesktops} alt="img" />
      </section>
    </main>
  );
}
