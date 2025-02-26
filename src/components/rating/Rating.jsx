import React, { useEffect, useState } from "react";
import "../rating/styles.scss";

const Rating = ({ rate }) => {
  const [starArray, setStarArray] = useState([]);
  useEffect(() => {
    let starArrayTemp = [];
    for (let i = 0; i < 5; i++) {
      if (rate > i) {
        starArrayTemp.push(true);
      } else {
        starArrayTemp.push(false);
      }
    }
    setStarArray(starArrayTemp);
  }, []);
  return (
    <div>
      {starArray.map((star, i) =>
        star ? (
          <i key={i} className="fa-solid fa-star star activeStar"></i>
        ) : (
          <i key={i} className="fa-solid fa-star star inactiveStar"></i>
        )
      )}
    </div>
  );
};

export default Rating;
