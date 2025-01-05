import React from "react";
import "./Sign_Up.css";

const Sign_Up = () => {
  return (
    <>
      <main id="top" className="bg">
        <div className="bg2">
          <h1 className="h1">Create your Profile</h1>
          <form action="">
            <section id="one" className="form-section">
              <div className="">
                <label className="label" htmlFor="name">
                  {" "}
                  Full Name
                </label>
                <input className="input" type="text" id="name" />
              </div>
              <div className="">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input type="email" className="input" id="email" />
              </div>
            </section>
            <section id="two" className="form-section">
              <div className="">
                <label className="label" htmlFor="dob">
                  Date of Birth
                </label>
                <input type="date" id="dob" className="input" />
              </div>
              <div className="">
                <label className="label" htmlFor="gender">
                  Gender
                </label>
                <select className="select" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="weight" className="label">
                  Weight
                </label>
                <input type="number" id="weight" className="input" />
              </div>
              <div className="">
                <label htmlFor="height" className="label">
                  Height
                </label>
                <input type="number" id="height" className="input" />
              </div>
            </section>
            <section className="form-section">
              <div className="">
                <label htmlFor="username" className="label">
                  Username
                </label>
                <input type="text" id="username" className="input" />
              </div>
            </section>
            <section id="four" className="form-section">
              <div className="">
                <label htmlFor="password" className="label">
                  {" "}
                  Password
                </label>
                <input type="text" id="password" className="input" />
              </div>
              <div className="">
                <label htmlFor="confirm" className="label">
                  Confirm Password
                </label>
                <input type="text" id="confirm" className="input" />
              </div>
            </section>
            <section id="submit">
              <button type="submit" className="button">
                Create
              </button>
            </section>
          </form>
        </div>
      </main>
    </>
  );
};

export default Sign_Up;
