import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Error404 = () => {
  return (
    <div className="errorPage">
      <div className="error">
        <span>404</span>
        <p>Oops! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="retourAccueil">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Error404;
