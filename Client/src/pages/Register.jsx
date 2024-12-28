import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
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
        <h2>Sign Up</h2>

        <form className="register_form">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            value={userData.confirm_password}
            onChange={changeInputHandler}
          />

          <button type="submit" className="btn_primary">
            Submit
          </button>
        </form>

        <small>
          Already have an account? <Link to="/login">Sign In Here</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
