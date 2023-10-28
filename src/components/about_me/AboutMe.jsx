import imgCristian from "../../assents/images/about_me/cristian.jpeg";
import imgDesktops from "../../assents/images/about_me/image_desktops.png";
import style from "./style_about_me.module.css";

export function AboutMe() {
  return (
    <main id="about_me">
      <section className={style.containerAboutMe}>
        <img className={style.imgCristian} src={imgCristian} alt="img" />
        <h1 className={style.aboutMe}> Hola, soy Cristian Rodriguez </h1>
        <p className={style.description}>
          Desarrollador de servidores y sitios web
        </p>
        <img className={style.imgDesktops} src={imgDesktops} alt="img" />
      </section>
    </main>
  );
}
