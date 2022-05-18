import { CircularProgress } from "@material-ui/core";
import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const history = useHistory();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  console.log(isFetching);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="registerLogo">
            <img src="assets/social.png" alt="logo" />
            <h3 className="registerLogo">Social</h3>
          </div>
          <img
            src="assets/Testimonial.png"
            alt="welcome"
            height={450}
            width={450}
          />
        </div>
        <div className="loginRight">
          <div>
            <h1 className="loginRight-heading">Log into Your Account</h1>
          </div>
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput passwordInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <p className="callToRegister">
              Don't have an account ?{" "}
              <span onClick={() => history.push("/register")}>Register</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
