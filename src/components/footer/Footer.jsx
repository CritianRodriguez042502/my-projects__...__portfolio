import { CiMemoPad } from "react-icons/ci";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import style from "./style_footer.module.css";

export function Footer() {
  
  return (
    <main id="footer">
      <section className={style.containerContact}>
        <h1> ¡Hablemos!</h1>
        <p>
          Contactame para iniciar tu proyecto de desarrollo web y hare que tu
          vision se vuelva realidad
        </p>
        <div>
          <button>
            <a href="mailto:cristianestiven1111@gmail.com" target="_blank">
              Contacto
            </a>
          </button>
        </div>
      </section>

      <section className={style.containerFooter}>
        <h1>
          <CiMemoPad />
        </h1>
        <p>
          Aprendo todos los dias. <br /> ¿Que esperas? creemos un proyecto
          juntos
        </p>
        <aside className={style.containerIcons}>
          <a
            className={style.icon}
            href="https://www.facebook.com/cristian.rodriguezbenitez.5/"
            target="_blank"
          >
            <AiFillFacebook />
          </a>
          <a
            className={style.icon}
            href="https://www.linkedin.com/in/rodriguezbenitez/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            className={style.icon}
            href="https://github.com/CritianRodriguez042502"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            className={style.icon}
            href="https://www.instagram.com/cristianrodriguez0102/"
            target="_blank"
          >
            <AiOutlineInstagram />
          </a>
        </aside>
        <p className={style.creator}> Creado por Cristian Rodriguez 2023</p>
      </section>
    </main>
  );
}
