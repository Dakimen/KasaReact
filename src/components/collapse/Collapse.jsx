import React, { useState } from "react";
import "./styles.scss";

const Collapse = ({ title, content }) => {
  const [Open, setOpen] = useState(false);
  return (
    <div>
      <div className="collapse" onClick={() => setOpen(!Open)}>
        {title} <i className="fa-solid fa-chevron-up"></i>
      </div>
      <div className={Open ? "collapsedTextOpen" : "collapsedTextClosed"}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
