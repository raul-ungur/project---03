import React, { useState } from "react";
import "./Bar.css";

function Login() {
  const [action, setAction] = useState("Login");

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <input type="text" placeholder="Name"></input>
            </div>
          )}
          <input type="email" placeholder="Email " />
          <br />
          <input type="password" placeholder="Password" />
          <br />
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div
            className="forgot-password"
            style={{ fontSize: "15px", marginLeft: "50px", marginTop: "20px" }}
          >
            Lost password?
            <strong style={{ cursor: "pointer" }}>Click here!</strong>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>

          <div
            id="login-button"
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
