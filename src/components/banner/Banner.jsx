import React from "react";
import "./styles.scss";

const Banner = ({ title, image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className={`bannerOver ${title ? "bannerHome" : "bannerAbout"}`}>
        {title}
      </div>
    </div>
  );
};

export default Banner;
