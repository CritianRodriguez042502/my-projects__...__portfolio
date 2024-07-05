import style from './style_skills.module.css';

// Import images
import html from '../../assents/images/skills/icon-html.png';
import css from '../../assents/images/skills/icon-css.png';
import js from '../../assents/images/skills/icon-js.png';
import react from '../../assents/images/skills/icon-react.png';
import git from '../../assents/images/skills/icon-git.png';
import python from '../../assents/images/skills/icon-python.png';
import django from '../../assents/images/skills/icon-django.jpg';
import postgresql from '../../assents/images/skills/icon-postgresql.png';

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
                        <img className={style.icon} src={html} alt="img" />
                        <img className={style.icon} src={css} alt="img" />
                        <img className={style.icon} src={js} alt="img" />
                        <img className={style.icon} src={react} alt="img" />
                    </div>
                </div>

                <div className={style.backendParentContainer}>
                    <h1> Backend </h1>
                    <div className={style.containerIcons}>
                        <img className={style.icon} src={python} alt="img" />
                        <img className={style.icon} src={django} alt="img" />
                        <img className={style.icon} src={postgresql} alt="img" />
                    </div>
                </div>

                <div className={style.gitParentContainer}>
                    <h1> Git </h1>
                    <div className={style.containerIcons}>
                        <img className={style.icon} src={git} alt="img" />
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
