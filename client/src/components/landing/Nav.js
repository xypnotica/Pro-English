import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            O name
          </Link>
          <div className="hover__line" />
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Kursevi
          </Link>
          <div className="hover__line" />
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Modeli Nastave
          </Link>
          <div className="hover__line" />
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Predstojeci Dogadjaji
          </Link>
          <div className="hover__line" />
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Blog
          </Link>
          <div className="hover__line" />
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Profesori
          </Link>
          <div className="hover__line" />
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Kontakt
          </Link>
          <div className="hover__line" />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
