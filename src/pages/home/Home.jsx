import React from "react";
import logements from "../../assets/data/logements.json";
import bgroundHome from "../../assets/images/bgroundHome.png";
import Banner from "../../components/banner/Banner";
import LogementCard from "../../components/logement-card/LogementCard";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" image={bgroundHome} />
      <div className="logements">
        {logements.map((logement) => (
          <LogementCard key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Home;
