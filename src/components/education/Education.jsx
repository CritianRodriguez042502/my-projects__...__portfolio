import { CiRouter } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci';
import { CiEdit } from 'react-icons/ci';
import style from './style_education.module.css';

export function Education() {
    return (
        <main id="education">
            <h1 className={style.parentTitlte}> Aptitudes </h1>
            <section className={style.containerEducation}>
                <div className={style.squareContainer}>
                    <h1 className={style.icon}>
                        <CiSettings />
                    </h1>
                    <h1 className={style.title}> Desarrollo web </h1>
                    <p className={style.text}>
                        Con experiencia en desarrollo web usando Django y React, he creado
                        aplicaciones web dinámicas y atractivas. Mi enfoque se centra en el diseño
                        de páginas modernas, responsivas e interactivas. Ansío expandir mis
                        habilidades y enfrentar nuevos desafíos en este campo.
                    </p>
                </div>
                <div className={style.squareContainer}>
                    <h1 className={style.icon}>
                        <CiRouter />
                    </h1>
                    <h1 className={style.title}> Educacion </h1>
                    <p className={style.text}>
                        Titulado como bachiller, actualmente estudio Ingeniería de Software en el
                        reconocido SENA, adquiriendo sólidos conocimientos en desarrollo de
                        aplicaciones, programación y gestión de proyectos. Emocionado por ampliar mi
                        formación y aplicar habilidades en desafiantes proyectos.
                    </p>
                </div>
                <div className={style.squareContainer}>
                    <h1 className={style.icon}>
                        <CiEdit />
                    </h1>
                    <h1 className={style.title}> Hobbies </h1>
                    <p className={style.text}>
                        Además de mi pasión por la tecnología y el futuro tecnológico, tengo un
                        fuerte interés en aprender nuevas tecnologías y mantenerme al día con las
                        últimas tendencias. Mi entusiasmo por explorar nuevos horizontes en el
                        ámbito tecnológico me impulsa a seguir aprendiendo y desarrollándome
                        constantemente.
                    </p>
                </div>
            </section>
        </main>
    );
}
