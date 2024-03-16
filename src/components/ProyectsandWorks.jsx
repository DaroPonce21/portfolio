import { Link } from "react-router-dom";
import dbPro from "../assets/dbProy";
import dbWork from "../assets/dbWork";

const Proyects = () => {
  return (
    <div>
      {dbWork.length > 0 && (
        <>
          <h1 className="page-title">Trabajos</h1>

          <div className="content">
            <div className="works-list">
              <div className="item">
                <img src="assets/item-1.jpg" />
                <div className="details">
                  <h3>Aca va un Titulo de Proyecto</h3>
                  <div className="item-info">
                    <div className="year-badge">Aca el Año</div>
                    <h4>Aca las tecnologias</h4>
                  </div>
                  <p>Esta es la discripcion del proyecto.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {dbPro.length > 0 && (
        <>
          <h1 className="page-title">Proyectos</h1>
          {dbPro.map(
            (
              { id, title, data, tecno, desc, linkVideo, linkGitH, web, portada },
              index
            ) => (
              <div className="content" key={index}>
                <div className="works-list">
                  <div className="item">
                    <img src={portada} alt="imagen" />
                    <div className="details">
                      <h3>{title}</h3>
                      <div className="item-info">
                        <div className="year-badge">{data}</div>
                        <h4>{tecno}</h4>
                      </div>
                      <p>{desc}</p>
                      <br />
                      <div className={linkVideo ? "item-link" : "hidden"}>
                        <div className="link-badge">
                          <a href={linkVideo}>YouTube</a>
                        </div>
                      </div>
                      <div className={linkGitH ? "item-link" : "hidden"}>
                        <div className="link-badge">
                          <a href={linkGitH}>GitHub</a>
                        </div>
                      </div>
                      <div className={web ? "item-link" : "hidden"}>
                        <div className="link-badge">
                          <a href={web}>Web</a>
                        </div>
                      </div>
                      <div className="item-link">
                        <div className="link-detail">
                          <Link className="details" to={'/detail/' + id}>
                            Ver mas
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Proyects;

{
  /*
      <h1 className="page-title">Este es mi PROYECTO O TRABAJO destacado</h1>

      <div className="content">
        <div className="work-info">
          <div className="year-badge">Año</div>
          <div className="category">
            <p>Tecnologias usadas</p>
          </div>
        </div>

        <p>Descripcion</p>

        <img src="Imagen principal" alt="Imagen principal" />

        <h1>NOmbre del proyecto/trabajo</h1>
        <h2>Tipo de proyecto (ecomer)</h2>
        <h3>URL O LINKS</h3>

        <p>descripcion</p>

        <img src="assets/single-post-2.png" alt="carrete" />
      </div>
  */
}
