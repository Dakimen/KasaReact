import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const LogementCard = ({ logement }) => {
  return (
    <Link to={`/logement/${logement.id}`} className="logementCardContainer">
      <div
        className="logementCard"
        style={{ backgroundImage: `url(${logement.cover})` }}
      >
        <div className="logementCardCover">
          <h2>{logement.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default LogementCard;
