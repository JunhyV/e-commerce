import React from "react";
import { Link } from "react-router-dom";
import perrito from "../assets/perritosad.webp";

const NotFound = () => {
  return (
    <div className="error">
      <div>
        <h2>Sorry</h2>
        <h3>We couldn't find that page</h3>
        <p>
          Try to{" "}
          <Link className="link" to="/">
            Go back home
          </Link>
        </p>
      </div>
      <img className="error__img" src={perrito} alt="error-img" />
    </div>
  );
};

export default NotFound;
