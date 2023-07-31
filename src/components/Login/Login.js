import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./login.css";

import hidden from "../../img/hidden.svg";
import showed from "../../img/showed.svg";

import google from "../../img/google.svg";
import apple from "../../img/apple.svg";
import twitter from "../../img/twitter.svg";
import facebook from "../../img/facebook.svg";

import bg from "../../img/bg.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://playground.tesonet.lt/v1/tokens",
        {
          username: username,
          password: password,
        }
      );
      console.log("response:", response.data);
    } catch (error) {
      setError("Oops, email or password is wrong.");
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     login({
  //       email: email,
  //       password: password,
  //       loggedIn: true,
  //     })
  //   );
  // };

  return (
    <div className="login">
      <div className="login__container container">
        <form className="login__form form" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="login__title title">Sign In</h2>
          <input
            className="login__input inp"
            type="text"
            placeholder="Email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="login__password password">
            <input
              className="login__input inp"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <Link to="password">
            <p className="login__text">Forgot password?</p>
          </Link>
          <button className="login__btn btn" type="submit">
            Sign In
          </button>
          <div className="login__check check">
            <p className="text">Remember me</p>
            <input type="checkbox" id="highload1" name="highload1" />
            <label
              htmlFor="highload1"
              data-onlabel="on"
              data-offlabel="off"
              className="lb1"
            ></label>
          </div>
          <p className="small-text">or login with</p>
          <div className="social-media">
            <a href="#">
              <img className="icon" src={google} />
            </a>
            <a href="#">
              <img className="icon" src={apple} />
            </a>
            <a href="#">
              <img className="icon" src={twitter} />
            </a>
            <a href="#">
              <img className="icon" src={facebook} />
            </a>
          </div>
        </form>
        <div className="login__right right">
          <img className="bg" src={bg} />
          <div className="login__right-text right-text">
            <p className="text">Don’t have an account?</p>
            <Link to="register">
              <button className="btn2 text">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Login;
