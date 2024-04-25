import { Link, useParams } from "react-router-dom";
import dbPro from "../assets/dbProy";
import { useState } from "react";

const Details = () => {
  const { projectId } = useParams();
  const project = dbPro.find((p) => p.id === projectId);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  const { title, data, tecno, desc, linkVideo, linkGitH, web, portada, img } =
    project;

  const [portImage, setPortImage] = useState(portada);

  const handleImageClick = (e) => {
    setPortImage(e);
  };

  return (
    <div className="details-container">
      <h1>{title}</h1>
      <div className="item-info">
        <div className="year-badge">{data}</div>
        <h4>{tecno}</h4>
      </div>
      <p>{desc}</p>
      <img className="portada" src={portImage} alt="imagen" />

      <div className="mini-img">
        <div className="imagen-flex">
          {img.map((imagen, index) => (
            <div key={index} onClick={() => handleImageClick(imagen)}>
              <img src={imagen} alt={`Imagen ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="details-links">
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
            <Link className="details" to={"/works"}>
              Volver atras
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
