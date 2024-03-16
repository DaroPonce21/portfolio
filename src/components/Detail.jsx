import { Link, useParams } from "react-router-dom";
import dbPro from "../assets/dbProy";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Details = () => {
  const { projectId } = useParams();
  const project = dbPro.find((p) => p.id === projectId);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  const { title, data, tecno, desc, linkVideo, linkGitH, web, portada, img } =
    project;

  return (
    <div className="details-container">
      <h1>{title}</h1>
      <div className="item-info">
        <div className="year-badge">{data}</div>
        <h4>{tecno}</h4>
      </div>
      <p>{desc}</p>
      <img src={portada} alt="imagen" />

      <Slider className="image-carousel" autoplay={true} autoplaySpeed={4000}>
        {img.map((imagen, index) => (
          <div key={index}>
            <img src={imagen} alt={`Imagen ${index}`} />
          </div>
        ))}
      </Slider>

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
                          <Link className="details" to={'/works'}>
                            Volver atras
                          </Link>
                        </div>
                      </div>
      </div>
    </div>
  );
};

export default Details;
