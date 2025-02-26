import React from "react";
import bgroundAbout from "../../assets/images/bgroundAboutUs.png";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import { aboutList } from "./AboutList";
import "./styles.scss";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div>
        <Banner title="" image={bgroundAbout} />
      </div>
      <div className="collapseAboutUs">
        {aboutList.map((about) => (
          <Collapse
            title={about.title}
            content={about.content}
            key={about.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
