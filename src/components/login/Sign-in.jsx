import React from "react";
import "./Sign-in.css";
import "./Beat";
import Beat from "./Beat";
import Locked2 from "./Locked2";
import User4 from "./User4";

const SignIn = () => {
  return (
    <>
      <main className="loginbg">
        <div className="title">
          <h1 className="heading">Welcome</h1>
          <Beat />
        </div>
        <form action="">
          <div className="field">
            <label className="labelText" htmlFor="username">
              Username
            </label>
            <div className="username" type="text">
              <input type="text" className="lInput" />
              <User4 />
            </div>
          </div>
          <div className="field">
            <label className="labelText" htmlFor="password">
              Password
            </label>
            <div className="password" type="text">
              <input type="text" className="lInput" />
              <Locked2 />
            </div>
          </div>
          <div className="submit">
            <button className="transparent">Forgot Password</button>
            <button className="button">Login</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default SignIn;
