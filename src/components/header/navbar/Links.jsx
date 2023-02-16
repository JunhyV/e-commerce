import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Link className="navbar__link link" to="/hats">
        Hats
      </Link>
      <Link className="navbar__link link" to="/jackets">
        Jackets
      </Link>
      <Link className="navbar__link link" to="/mens">
        Mens
      </Link>
      <Link className="navbar__link link" to="/sneakers">
        Sneakers
      </Link>
      <Link className="navbar__link link" to="/womens">
        Womens
      </Link>
    </>
  );
};

export default Links;
