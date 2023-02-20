import React from "react";
import { useSelector } from "react-redux";
import SignOut from "../components/login/SignOut";
import SignUp from "../components/login/SignUp";

const Login = () => {
  const login = useSelector((state) => state.user.userState.signUp);
  return <div>{login ? <SignOut /> : <SignUp />}</div>;
};

export default Login;
