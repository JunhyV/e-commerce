import React from "react";
import useWindow from "../../../hooks/useWindow";
import Cart from "../../cart/Cart";
import User from "./User";

const UserOptions = () => {
  const {windowSize} = useWindow();
  return (
    <div className="user__options">
      {windowSize > 768 ? <User/> : null}
      <Cart/>
    </div>
  );
};

export default UserOptions;
