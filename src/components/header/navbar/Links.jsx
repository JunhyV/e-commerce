import React from "react";
import { Link } from "react-router-dom";
import useWindow from "../../../hooks/useWindow";

const Links = () => {
  const { windowSize } = useWindow();

  return (
    <div className="navbar">
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

      {windowSize < 768 ? (
        <Link className="navbar__link link" to="/login">
          Login
        </Link>
      ) : null}
    </div>
  );
};

export default Links;
