import React, { useState } from "react";
import "./styles.scss";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    let newIndex = index + 1;
    if (newIndex > pictures.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const prevImage = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }
    setIndex(newIndex);
  };
  return (
    <div className="Carousel">
      <img className="carouselImg" src={pictures[index]} />
      {pictures.length > 1 && (
        <>
          <i
            className="fa-solid fa-chevron-left arrows left"
            onClick={prevImage}
          ></i>
          <i
            className="fa-solid fa-chevron-right arrows right"
            onClick={nextImage}
          ></i>
          <span className="counter">
            {index + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
};

export default Carousel;
