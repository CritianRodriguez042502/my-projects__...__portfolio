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
          <article className={style.containerItem}>
            <div className={style.containerImg}>
              <img className={style.Img} src={impactX} alt="img" />
            </div>
            <div>
              <h2 className={style.titleProject}> 🤖 IMPACT X 🤖 </h2>
              <p className={style.text}>
                IMPACT X es una plataforma de blogs completa desarrollada en el
                Frontend con (React | Vite) y Backend con (Python | Django |
                PostgreSQL) que combina características de registro de usuarios,
                login, emails automaticos, creación y gestión de blogs,
                interacción social y más.
              </p>

              <a
                href="https://github.com/CritianRodriguez042502/agency_view"
                target="_blank"
              >
                <button className={style.projectButton}>Repositorio</button>
              </a>
              <a href="https://impact-x.onrender.com" target="_blank">
                <button className={style.projectButton}> Deploy </button>
              </a>
            </div>
          </article>

          <article className={style.containerItem}>
            <div className={style.containerImg}>
              <img className={style.Img} src={bbcNews} alt="img" />
            </div>
            <div>
              <h2 className={style.titleProject}> 💢 BBC NEWS 💢</h2>
              <p className={style.text}>
                Portal de noticias que consume la API de "News api" para mostrar
                información actualizada. Utiliza Vite y React y incluye la
                página de inicio, vista con noticias principales y una vista con
                filtros de noticias por categoría, búsqueda y fecha.
              </p>

              <a
                href="https://github.com/CritianRodriguez042502/BBC-NEWS"
                target="_blank"
              >
                <button className={style.projectButton}>Repositorio</button>
              </a>
              <a href="https://api-news-v2.onrender.com" target="_blank">
                <button className={style.projectButton}> Deploy </button>
              </a>
            </div>
          </article>

          <article className={style.containerItem}>
            <div className={style.containerImg}>
              <img className={style.Img} src={calculator} alt="img" />
            </div>
            <div>
              <h2 className={style.titleProject}> 📱 CALCULADORA 📱 </h2>
              <p className={style.text}>
                Una Calculadora diseñada con HTML, CSS y JavaScript "vanilla"
                mediante Vite, Diseñada con una interfaz funcional y elegante
                brindando operaciones matemáticas precisas y funciones con las
                operaciones basicas.
              </p>

              <a
                href="https://github.com/CritianRodriguez042502/Calculator"
                target="_blank"
              >
                <button className={style.projectButton}>Repositorio</button>
              </a>
              <a
                href="https://basic-calculator-xgn4.onrender.com"
                target="_blank"
              >
                <button className={style.projectButton}> Deploy </button>
              </a>
            </div>
          </article>

          <article className={style.containerItem}>
            <div className={style.containerImg}>
              <img className={style.Img} src={clima} alt="img" />
            </div>
            <div>
              <h2 className={style.titleProject}> 🌦️ CLIMA 🌦️ </h2>
              <p className={style.text}>
                Aplicacion del clima hecha en HTML, CSS y JS.Esta aplicación te
                brinda información detallada sobre el clima actual y pronósticos
                futuros. Accede a los datos meteorológicos de cualquier ciudad
                de manera rápida y precisa.
              </p>

              <a
                href="https://github.com/CritianRodriguez042502/Climate"
                target="_blank"
              >
                <button className={style.projectButton}>Repositorio</button>
              </a>
              <a>
                <button className={style.projectButton}> Deploy </button>
              </a>
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
}
