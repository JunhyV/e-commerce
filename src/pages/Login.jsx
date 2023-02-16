import React from "react";

const Login = () => {
  return (
    <form className="login">
      <label className="login__title">Login</label>
      <div>
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Password" />
        <p>Forgot your password?</p>
      </div>
      <div className="login__">
              <button>Sign In</button>
      </div>

    </form>
  );
};

export default Login;
