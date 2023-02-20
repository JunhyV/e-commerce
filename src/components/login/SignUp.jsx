import axios from "axios";
import React from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { signUp } from "../../redux/features/userSlice";
import { isValidEmail } from "../../utils/validEmail";

const SignUp = () => {
  const { email, password, handleEmail, handlePassword } = useLogin();
  const dispatch = useDispatch();

  return (
    <form className="login">
      <label className="login__title">Login</label>
      <div>
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

        <Link>Forgot your password?</Link>
      </div>
      <div className="login__button">
        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:5000/api/auth/login", {
                email: email,
                password: password,
              })
              .then((res) => dispatch(signUp(res.data)))
              .catch(error =>{
                if (error.response.data.success === false) {
                  alert('Your email or password is incorrect')
                }})
          }}
        >
          Sign In
        </button>
        <p>
          New at D-shop? <Link className="link" to='/register'>Sign up now</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
