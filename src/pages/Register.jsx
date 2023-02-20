import axios, { AxiosError } from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { isValidEmail } from "../utils/validEmail";

const Register = () => {
  const {
    email,
    password,
    username,
    handleEmail,
    handlePassword,
    handleUsername,
  } = useLogin();

  return (
    <div>
      <Link to="/login">&laquo; Back</Link>
      <form>
        <label>Register Now!</label>
      </form>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsername}
      />
      {password.length >= 8 ? <p>{"-"}</p> : <p>Minimum 8 characters</p>}
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={handleEmail}
      />
      {isValidEmail(email) ? <p>{"-"}</p> : <p>Write a valid email</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
      />
      {password.length >= 8 ? <p>{"-"}</p> : <p>Minimum 8 characters</p>}
      <button
        onClick={(e) => {
          e.preventDefault();
            axios
              .post("http://localhost:5000/api/auth", {
                displayName: username,
                email: email,
                password: password,
              })
              .then((res) => console.log(res.data.success))
              .catch(error => alert(error.response.data.message))

        }}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
