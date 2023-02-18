import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
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
    </ul>
  );
};

export default Links;
