import { CiRouter, CiSettings, CiEdit } from 'react-icons/ci';

import style from './style_education.module.css';

export function Education() {
    return (
        <main id="education">
            <h1 className={style.parentTitlte}> Knowledge </h1>

            <section className={style.containerEducation}>
                <div className={style.squareContainer}>
                    <CiSettings className={style.icon} />

                    <h1 className={style.title}> Web development </h1>
                    <p className={style.text}>
                        With experience in web development using Django and React, I have created
                        dynamic and engaging web applications. My focus is on designing modern,
                        responsive and interactive pages. I look forward to expanding my skills and
                        taking on new challenges in this field.
                    </p>
                </div>

                <div className={style.squareContainer}>
                    <CiRouter className={style.icon} />

                    <h1 className={style.title}> Education </h1>
                    <p className={style.text}>
                        With a bachelor's degree, I am currently studying Software Engineering at
                        the renowned SENA, acquiring solid knowledge in application development,
                        programming and project management. Excited to expand my training and apply
                        skills in challenging projects.
                    </p>
                </div>
                <div className={style.squareContainer}>
                    <CiEdit className={style.icon} />

                    <h1 className={style.title}> Hobbies </h1>
                    <p className={style.text}>
                        In addition to my passion for technology and the technological future, I
                        have a strong interest in learning new technologies and keeping up with the
                        latest trends. My enthusiasm for exploring new horizons in the technological
                        field drives me to continue learning and developing constantly.
                    </p>
                </div>
            </section>
        </main>
    );
}
