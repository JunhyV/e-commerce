import React from "react";
import { Link } from "react-router-dom";
import useWindow from "../../../hooks/useWindow";

const Links = () => {
  const { windowSize } = useWindow();

  return (
    <ul className="horizontal-list">
      <li>
        <Link className="navbar__link link" to="/hats">
          Hats
        </Link>
      </li>

      <li>
        <Link className="navbar__link link" to="/jackets">
          Jackets
        </Link>
      </li>

      <li>
        <Link className="navbar__link link" to="/mens">
          Mens
        </Link>
      </li>

      <li>
        <Link className="navbar__link link" to="/sneakers">
          Sneakers
        </Link>
      </li>

      <li>
        <Link className="navbar__link link" to="/womens">
          Womens
        </Link>
      </li>

      {windowSize < 768 ? (
        <li>
          <Link className="navbar__link link" to="/login">
            Login
          </Link>
        </li>
      ) : null}
    </ul>
  );
};

export default Links;
