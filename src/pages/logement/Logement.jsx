import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logements from "../../assets/data/logements.json";
import Carousel from "../../components/carousel/carousel";
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";
import "./styles.scss";

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const activeLogement = logements.find((logement) => logement.id === id);
    if (activeLogement) {
      setLogement(activeLogement);
      setLoading(false);
    } else {
      navigate("/error-404");
    }
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="logementInfoContainer">
      <Carousel pictures={logement.pictures} />
      <div className="logementInfo">
        <div className="infoLeft">
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="tags">
            {logement.tags.map((tag, i) => (
              <div className="tag" key={i}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="hostAndRating">
          <div className="hostInformation">
            <div className="hostName">
              <p>{logement.host.name.split(" ")[0]}</p>
              <p>{logement.host.name.split(" ")[1]}</p>
            </div>
            <img src={logement.host.picture} className="hostPicture" />
          </div>
          <Rating rate={logement.rating} />
        </div>
      </div>
      <div className="collapseContainer">
        <div className="collapseItem">
          <Collapse title="Description" content={logement.description} />
        </div>
        <div className="collapseItem">
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
