import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import UserOptions from "./userOptions/UserOptions";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <Link className="header__link link" to="/">
        <h1 className="header__title">
          {" "}
          <span className="header__span">D-S</span>hop, Inc
          <span className="header__span">.</span>{" "}
        </h1>
      </Link>
      <UserOptions />
    </header>
  );
};

export default Header;
