import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/header/Header";


const LayoutPublic = () => {

  const state = useSelector((state) => state.store);
  console.log(state);

  return (
    <div>
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutPublic;
