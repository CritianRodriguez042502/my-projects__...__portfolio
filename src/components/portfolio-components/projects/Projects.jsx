// Images
import impactX from '@/assents/images/projects/impact-x.png';
import bbc_news from '@/assents/images/projects/bbc-news.png';
import calculator from '@/assents/images/projects/calculator.png';
import rijksmuseum from '@/assents/images/projects/rijksmuseum.jpeg';

import style from './style_projects.module.css';

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
                            <img className={style.Img} src={bbc_news} alt="img" />
                        </div>
                        <div>
                            <h2 className={style.titleProject}> 💢 BBC NEWS 💢</h2>
                            <p className={style.text}>
                                Portal de noticias que consume la API de News api para mostrar
                                información actualizada. Utiliza Vite y React y incluye la página de
                                inicio, vista con noticias principales y una vista con filtros de
                                noticias por categoría, búsqueda y fecha.
                            </p>

                            <a
                                href="https://github.com/CritianRodriguez042502/BBC-NEWS"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}>Repositorio</button>
                            </a>
                            <a
                                href="https://api-news-v2.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}> Deploy </button>
                            </a>
                        </div>
                    </article>

                    <article className={style.containerItem}>
                        <div className={style.containerImg}>
                            <img className={style.Img} src={rijksmuseum} alt="img" />
                        </div>
                        <div>
                            <h2 className={style.titleProject}> 🖼️ RIJKSMUSEUM 🖼️ </h2>
                            <p className={style.text}>
                                Esta aplicación te permite explorar las principales obras de arte
                                del museo, seleccionar tus favoritas y guardarlas en una base de
                                datos para visualizarlas posteriormente. Descubre y disfruta del
                                arte de una manera interactiva y personalizada.
                            </p>

                            <a
                                href="https://github.com/CritianRodriguez042502/my-projects__...__rijksmuseum"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}>Repositorio</button>
                            </a>
                            <a
                                href="https://rijksmuseum-app.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}> Deploy </button>
                            </a>
                        </div>
                    </article>

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
                                login, emails automaticos, creación y gestión de blogs, interacción
                                social y más.
                            </p>

                            <a
                                href="https://github.com/CritianRodriguez042502/agency_view"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}>Repositorio</button>
                            </a>
                            <a
                                href="https://impact-x.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                            >
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
                                Una Calculadora diseñada con HTML, CSS y JavaScript vanilla mediante
                                Vite, Diseñada con una interfaz funcional y elegante brindando
                                operaciones matemáticas precisas y funciones con las operaciones
                                basicas.
                            </p>

                            <a
                                href="https://github.com/CritianRodriguez042502/Calculator"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}>Repositorio</button>
                            </a>
                            <a
                                href="https://basic-calculator-xgn4.onrender.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className={style.projectButton}> Deploy </button>
                            </a>
                        </div>
                    </article>
                </aside>
            </section>
        </main>
    );
}
