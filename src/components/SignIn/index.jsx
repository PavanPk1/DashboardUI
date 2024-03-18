import { useState } from "react";
import "./index.css";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const clientID =
  "838285250878-vd1tdk71ml4m74nus9mp4mfhjrnfdgb1.apps.googleusercontent.com";

const SignIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isSignedIn = Cookies.get("isSignedIn");
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const onSuccess = (response) => {
    console.log(response);
    Cookies.set("isSignedIn", true);
    navigate("/dashboard");
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <div className="container">
      <div className="board">
        <h1 className="board-title">BOARD</h1>
      </div>
      <div className="signinContainer">
        <h1 className="signIn-title">Sign In</h1>
        <p className="signIn-subtitle">Sign in to your account</p>
        <div className="signInbuttons">
          <GoogleOAuthProvider clientId={clientID}>
            <GoogleLogin
              clientId={clientID}
              buttonText="Sign in with Google"
              onSuccess={(response) => onSuccess(response, navigate)}
              onFailure={onFailure}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
              scope={"profile email"}
            />
          </GoogleOAuthProvider>
          <button type="button" className="appleBtn">
            <FaApple /> Sign in with Apple
          </button>
        </div>
        <form onSubmit={onSubmitForm} className="signin-form">
          <label htmlFor="email" className="label">
            E-mail
          </label>
          <input
            type="text"
            value={email}
            placeholder="Enter Email Address"
            id="email"
            className="userInput"
            onChange={onChangeEmail}
          ></input>
          <label htmlFor="pass" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            id="pass"
            value={password}
            className="userInput"
            onChange={onChangePassword}
          ></input>
          <p className="forgetPass">Forget Password?</p>
          <button type="submit" className="signin-Btn">
            Sign In
          </button>
        </form>
        <p className="register">
          Don&apos;t have an account? <span>Register here</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
