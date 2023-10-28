import { useState } from "react";
import { FiAnchor } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import style from "./style_navbar.module.css";

export function Navbar() {
  const [apperance, setApperance] = useState("none");

  const onClickApperanceNavbar = (e) => {
    if (apperance === "none") {
      setApperance("flex");
    } else {
      setApperance("none");
    }
  };

  const navigate = (e) => {
    window.setTimeout(() => {
      setApperance("none");
    }, 300);
  };

  return (
    <main>
      <section className={style.containerNavbarMobile}>
        <aside className={style.containerIcons}>
          <div onClick={onClickApperanceNavbar} className={style.iconClose}>
            <AiOutlineMenu />
          </div>
          <div className={style.iconMain}>
            <FiAnchor />
          </div>
        </aside>

        <aside style={{ display: apperance }} className={style.containerFixed}>
          <nav className={style.containerLinks}>
            <a onClick={navigate} className={style.links} href="#about_me">
              Sobre mi
            </a>
            <a onClick={navigate} className={style.links} href="#skills">
              Habilidades
            </a>
            <a onClick={navigate} className={style.links} href="#projects">
              Proyectos
            </a>
            <a onClick={navigate} className={style.links} href="#footer">
              Contacto
            </a>
          </nav>
        </aside>
      </section>

      <section className={style.containerNavbarDesktop}>
        <div className={style.iconMain}>
          <FiAnchor />
        </div>
        <nav className={style.containerLinks}>
          <a className={style.links} href="#about_me">
            Sobre mi
          </a>
          <a className={style.links} href="#skills">
            Habilidades
          </a>
          <a className={style.links} href="#projects">
            Proyectos
          </a>
          <a className={style.links} href="#footer">
            Contacto
          </a>
        </nav>
      </section>
    </main>
  );
}
