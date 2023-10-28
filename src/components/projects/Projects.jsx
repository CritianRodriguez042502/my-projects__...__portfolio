import style from "./style_projects.module.css";

export function Projects() {
  
  function navigateImpactX(e) {
    window.location.href =
      "https://critianrodriguez042502.github.io/agency_view/";
  }

  return (
    <main id="projects">
      <section className={style.containerProjects}>
        <aside className={style.containerTitle}>
          <h1> Mis proyectos</h1>
        </aside>
        <aside className={style.containerProjects}>
          <div className={style.containerImg}>
            <img
              onClick={navigateImpactX}
              className={style.Img}
              src="https://assets.genial.ly/s3fs-public/images/id112.jpg?VersionId=EXhsnbTHzgZ6nXIk2kRszmXdT1gnDl9d"
              alt="img"
            />
          </div>
          <div className={style.containerImg}>
            <img
              className={style.Img}
              src="https://assets.genial.ly/s3fs-public/images/id112.jpg?VersionId=EXhsnbTHzgZ6nXIk2kRszmXdT1gnDl9d"
              alt="img"
            />
          </div>
          <div className={style.containerImg}>
            <img
              className={style.Img}
              src="https://assets.genial.ly/s3fs-public/images/id112.jpg?VersionId=EXhsnbTHzgZ6nXIk2kRszmXdT1gnDl9d"
              alt="img"
            />
          </div>
          <div className={style.containerImg}>
            <img
              className={style.Img}
              src="https://assets.genial.ly/s3fs-public/images/id112.jpg?VersionId=EXhsnbTHzgZ6nXIk2kRszmXdT1gnDl9d"
              alt="img"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
