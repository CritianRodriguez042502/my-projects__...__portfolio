import impactX from "../../assents/images/projects/IMPACT-X.png";
import bbcNews from "../../assents/images/projects/BBC-NEWS.png";
import clima from "../../assents/images/projects/CLIMA.png";
import calculator from "../../assents/images/projects/CALCULATOR.png";
import style from "./style_projects.module.css";

export function Projects() {
  return (
    <main id="projects">
      <section className={style.container}>
        <aside className={style.containerTitle}>
          <h1> Mis proyectos</h1>
        </aside>
        <aside className={style.containerProjects}>
          <div className={style.containerImg}>
            <a
              href="https://critianrodriguez042502.github.io/agency_view/"
              target="_blank"
            >
              <img className={style.Img} src={impactX} alt="img" />
            </a>
          </div>
          <div className={style.containerImg}>
            <a href="https://bbc-news-api.onrender.com/" target="_blank">
              <img className={style.Img} src={bbcNews} alt="img" />
            </a>
          </div>

          <div className={style.containerImg}>
            <a
              href="https://basic-calculator-xgn4.onrender.com"
              target="_blank"
            >
              <img className={style.Img} src={calculator} alt="img" />
            </a>
          </div>

          <div className={style.containerImg}>
            <a href="https://clima-w48p.onrender.com" target="_blank">
              <img className={style.Img} src={clima} alt="img" />
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}
