import React from "react";
import useWindow from "../../../hooks/useWindow";
import Links from "./Links";
import HiddenNavBar from "./HiddenNavBar";

const NavBar = () => {
  const { windowSize } = useWindow();

  return (
    <div className="navbar">
      {windowSize < 1140 ? <HiddenNavBar /> : <Links />}
    </div>
  );
};

export default NavBar;
