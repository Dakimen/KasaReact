import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./styles.scss";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <img className="logo" src={Logo} alt="Kasa logo" />
      <nav className="nav">
        <ul>
          <li>
            <Link
              to="/"
              className={`${pathname !== "/" ? "notCurrentPage" : ""}`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`${pathname !== "/about-us" ? "notCurrentPage" : ""}`}
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
