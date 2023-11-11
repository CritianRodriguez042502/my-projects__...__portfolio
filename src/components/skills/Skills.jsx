// Import icons lenguajes
import HTML from "../../assents/images/skills/icon-html.png";
import CSS from "../../assents/images/skills/icon-css.png";
import JavaScript from "../../assents/images/skills/icon-js.png";
import React from "../../assents/images/skills/icon-react.png";
import Python from "../../assents/images/skills/icon-python.png";
import Django from "../../assents/images/skills/icon-django.jpg";
import Potsgresql from "../../assents/images/skills/icon-potgresql.png";
import Git from "../../assents/images/skills/icon-git.png";
import style from "./style_skills.module.css";

export function Skills() {
  return (
    <main id="skills">
      <section className={style.containerSkills}>
        <aside className={style.text}>
          <p>
            Como desarrollador web, poseo sólidos conocimientos sólidos del lado
            del cliente (frontend) y del lado del servidor (backend) todo
            manejado con buenas practicas y complementado con el uso de control
            de versiones git y github.
          </p>
        </aside>

        <aside className={style.containerIcons}>
          <div className={style.frontendParentContainer}>
            <div className={style.containerIconsFrontend}>
              <h1> Frontend </h1>
              <img className={style.icon} src={HTML} alt="img" />
              <img className={style.icon} src={CSS} alt="img" />
              <img className={style.icon} src={JavaScript} alt="img" />
              <img className={style.icon} src={React} alt="img" />
            </div>
          </div>

          <div className={style.backendParentContainer}>
            <div className={style.containerIconsBackend}>
              <h1> Backend </h1>
              <img className={style.icon} src={Python} alt="img" />
              <img className={style.icon} src={Django} alt="img" />
              <img className={style.icon} src={Potsgresql} alt="img" />
            </div>
          </div>
          <div className={style.containerIconsGit}>
            <img className={style.icon} src={Git} alt="img" />
            <img className={style.icon} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="img" />
          </div>
        </aside>
      </section>
    </main>
  );
}
