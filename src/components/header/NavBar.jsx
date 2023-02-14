import { set } from "immutable";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

const NavBar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  const display = false;

  return (
    <>
      {windowSize < 1140 ? (
        <>
          <button className="btn">
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
          {display 
          ? (
            <div className="navbar">
              <Links/>
            </div>) 
            : null}
        </>
      ) : (
        <div className="navbar">
          <Links/>
        </div>
      )}
    </>
  );
};

export default NavBar;
