import { CiMemoPad } from 'react-icons/ci';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import style from './style_footer.module.css';

export function Footer() {
    return (
        <main id="footer">
            <section className={style.containerContact}>
                <h1> ¡Hablemos!</h1>
                <p>
                    Contactame para iniciar tu proyecto de desarrollo web y hare que tu vision se
                    vuelva realidad
                </p>

                <div>
                    <a href="mailto:cristianestiven1111@gmail.com" target="_blank" rel="noreferrer">
                        <button className={style.buttonContact}>Contacto</button>
                    </a>
                </div>

                <div>
                    <a
                        href="https://drive.google.com/file/d/18Ne1wyDS71zorAzQZd8AOBgmvAM-k6Uh/view"
                        target="_blank"
                        rel="noreferrer">
                        <button className={style.buttonCv}>Mirar Cv</button>
                    </a>
                </div>
            </section>

            <section className={style.containerFooter}>
                <h1>
                    <CiMemoPad />
                </h1>
                <p>
                    Aprendo todos los dias. <br /> ¿Que esperas? empezemos a trabajar juntos
                </p>
                <aside className={style.containerIcons}>
                    <a
                        className={style.icon}
                        href="https://www.facebook.com/cristian.rodriguezbenitez.5/"
                        target="_blank"
                        rel="noreferrer">
                        <AiFillFacebook />
                    </a>
                    <a
                        className={style.icon}
                        href="https://www.linkedin.com/in/rodriguezbenitez/"
                        target="_blank"
                        rel="noreferrer">
                        <AiFillLinkedin />
                    </a>
                    <a
                        className={style.icon}
                        href="https://github.com/CritianRodriguez042502"
                        target="_blank"
                        rel="noreferrer">
                        <AiFillGithub />
                    </a>
                    <a
                        className={style.icon}
                        href="https://www.instagram.com/cristianrodriguez0102/"
                        target="_blank"
                        rel="noreferrer">
                        <AiOutlineInstagram />
                    </a>
                </aside>
                <p className={style.creator}> Creado por Cristian Rodriguez 2023</p>
            </section>
        </main>
    );
}
