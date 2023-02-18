import React from "react";
import useDisplay from "../../../hooks/useDisplay";
import Links from "./Links";

const HiddenNavBar = () => {
  const { displayContent, handleContent } = useDisplay();

  return (
    <>
      <button className="btn" onClick={handleContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#353535"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>

      {displayContent ? (
        <div className="navbar__hidden">
            <button className="closeButton" onClick={handleContent}>x</button>
          <Links />
        </div>
      ) : null}
    </>
  );
};

export default HiddenNavBar;
