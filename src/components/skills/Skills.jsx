import style from './style_skills.module.css';

export function Skills() {
    return (
        <main id="skills">
            <aside className={style.containerOfMyPresentation}>
                <h1 className={style.title}> Hello, I am Cristian Rodriguez </h1>
                <p className={style.text}>
                    Como desarrollador web, cuento con una sólida experiencia en la creación y
                    mantenimiento de aplicaciones web. Mi experiencia abarca tanto el lado del
                    cliente (frontend) como el lado del servidor (backend), manejo optimo de control
                    de versiones con git y github, conocimientos y manejo basico del cloud con AWS.
                    Esto me permite abordar proyectos de manera integral y optima.
                </p>
            </aside>

            <aside className={style.languageContainer}>
                <div className={style.frontendParentContainer}>
                    <h1> Frontend </h1>
                    <div className={style.containerIcons}>
                        <img
                            className={style.icon}
                            src="https://i.ibb.co/3N4B2BV/icon-html.png"
                            alt="img"
                        />
                        <img
                            className={style.icon}
                            src="https://i.ibb.co/2yXYknd/icon-css.png"
                            alt="img"
                        />
                        <img
                            className={style.icon}
                            src="https://i.ibb.co/qRdnM9s/icon-js.png"
                            alt="img"
                        />
                        <img
                            className={style.icon}
                            src="https://i.ibb.co/G2R98mJ/icon-react.png"
                            alt="img"
                        />
                    </div>
                </div>

                <div className={style.backendParentContainer}>
                    <h1> Backend </h1>
                    <div className={style.containerIcons}>
                        <img
                            className={style.icon}
                            src="https://i.ibb.co/GHFtbwm/icon-python.png"
                            alt="img"
                        />
                        <img
                            className={style.icon}
                            src="https://i.ibb.co/2MGnstY/icon-django.png"
                            alt="img"
                        />
                        <img
                            className={style.icon}
                            src="https://i.ibb.co/233Cfv6/icon-potgresql.png"
                            alt="img"
                        />
                    </div>
                </div>

                <div className={style.gitParentContainer}>
                    <h1> Git </h1>
                    <div className={style.containerIcons}>
                        <img
                            className={style.icon}
                            src="https://i.ibb.co/s940mqp/icon-git.png"
                            alt="img"
                        />
                        <img
                            className={style.icon}
                            src="https://cdn.icon-icons.com/icons2/1476/PNG/512/github_101792.png"
                            alt="img"
                        />
                    </div>
                </div>
            </aside>
        </main>
    );
}
