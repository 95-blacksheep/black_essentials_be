import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    
    <section className="register">
<ErrorMessage />


      <div className="form_container">
        <h2>Sign In</h2>

        <form className="register_form">

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />

          <button type="submit" className="btn_primary">
            Signin
          </button>
        </form>

        <small>
          Don't have an account? <Link to="/register"><p>Sign Up Here</p></Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
