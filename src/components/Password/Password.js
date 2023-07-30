import React from "react";
import "./password.css";

function Password() {
  return (
    <div className="password">
      <div className="password__container form container">
        <h2 className="password__title title">Forgot password?</h2>
        <p className="password__text text">
          Enter the email address you provided during registration. We will send
          you an email with a link to reset your password.
        </p>
        <input
          className="password__input inp"
          type="email"
          placeholder="Email"
          id="email"
        />
        <button className="login__btn btn" type="submit">
          Send
        </button>
      </div>
    </div>
  );
}

export default Password;
