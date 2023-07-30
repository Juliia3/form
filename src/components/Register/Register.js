import React, { useState } from "react";
import { Link } from "react-router-dom";

import hidden from "../../img/hidden.svg";
import showed from "../../img/showed.svg";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="register">
      <div className="register__container container">
        <form className="login__form form">
          <h2 className="login__title title">Sign Up</h2>
          <input
            className="register__input inp"
            type="text"
            placeholder="Username"
          />
          <input
            className="register__input inp"
            type="email"
            placeholder="Email"
          />
          <div className="register__password password">
            <input
              className="login__input inp"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <a
              className="password-control"
              href="#"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img src={showed} alt="hide" />
              ) : (
                <img src={hidden} alt="show" />
              )}
            </a>
          </div>
          <div className="register__password password">
            <input
              className="login__input inp"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <a
              className="password-control"
              href="#"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img src={showed} alt="hide" />
              ) : (
                <img src={hidden} alt="show" />
              )}
            </a>
          </div>
          <div className="register__check">
            <input className="text" type="checkbox" />
            <p className="text">I agree with Privacy Policy Terms</p>
          </div>
          <button className="login__btn btn" type="submit">
            Sign In
          </button>
        </form>
        <div className="login__right right">
          <p className="text">Already have an account?</p>
          <Link to="/">
            <button className="btn2 text">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
