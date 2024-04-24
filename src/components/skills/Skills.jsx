// Import icons lenguajes
import HTML from '../../assents/images/skills/icon-html.png';
import CSS from '../../assents/images/skills/icon-css.png';
import JavaScript from '../../assents/images/skills/icon-js.png';
import React from '../../assents/images/skills/icon-react.png';
import Python from '../../assents/images/skills/icon-python.png';
import Django from '../../assents/images/skills/icon-django.jpg';
import Potsgresql from '../../assents/images/skills/icon-potgresql.png';
import Git from '../../assents/images/skills/icon-git.png';
import style from './style_skills.module.css';

export function Skills() {
    return (
        <main id="skills">
            <aside className={style.containerOfMyPresentation}>
                <h1 className={style.title}> Hello, I'm Cristian Rodriguez </h1>
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
                        <img className={style.icon} src={HTML} alt="img" />
                        <img className={style.icon} src={CSS} alt="img" />
                        <img className={style.icon} src={JavaScript} alt="img" />
                        <img className={style.icon} src={React} alt="img" />
                    </div>
                </div>

                <div className={style.backendParentContainer}>
                    <h1> Backend </h1>
                    <div className={style.containerIcons}>
                        <img className={style.icon} src={Python} alt="img" />
                        <img className={style.icon} src={Django} alt="img" />
                        <img className={style.icon} src={Potsgresql} alt="img" />
                    </div>
                </div>

                <div className={style.gitParentContainer}>
                    <h1> Git </h1>
                    <div className={style.containerIcons}>
                        <img className={style.icon} src={Git} alt="img" />
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
