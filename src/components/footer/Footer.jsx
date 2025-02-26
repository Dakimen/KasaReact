import React from "react";
import footerDesk from "../../assets/images/footerDesk.png";
import footerMobile from "../../assets/images/footerMobile.png";
import "./styles.scss";

const Footer = () => {
  return (
    <div>
      <img src={footerDesk} className="footerDesk" alt="footer" />
      <img src={footerMobile} className="footerMobile" alt="footer" />
    </div>
  );
};

export default Footer;
