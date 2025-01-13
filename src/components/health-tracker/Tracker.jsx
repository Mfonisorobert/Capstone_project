import React from "react";
import "./Tracker.css";
import Bell1 from "./Bell1";
import ChevronDown from "./ChevronDown";

const Tracker = () => {
  return (
    <>
      <main className="trackerbg">
        <section className="hayft">
          <div className="a1">
            <h1 className="tracker-title">How are you feeling today?</h1>
            <div className="a2">
              <p>Edit Personal Data</p>
              <span className="notif">
                <div className="bell">
                  <Bell1 />
                </div>
                <div className="dot"></div>
              </span>
            </div>
          </div>
          <div className="a1">
            <p className="subtitle">Log your health stats for today!</p>
            <input className="date-input" type="date" />
          </div>
        </section>
        <section className="vitals">
          <div className="vitals-header">
            <h2 className="vitals-title">Vitals</h2>
            <ChevronDown />
          </div>
          <div className="vitals-list">
            <div className="vitals-row">
              <div className="vitals-name">
                <label className="vitals-label" htmlFor="">
                  Body Temperature
                </label>
              </div>
              <span className="parameter">
                <input type="number" />
                <p>°C</p>
              </span>
            </div>
            <div className="vitals-row">
              <div className="vitals-name">
                {" "}
                <label className="vitals-label" htmlFor="">
                  Pulse Rate{" "}
                </label>
              </div>
              <span className="parameter">
                <input type="number" />
                <p>beats per minute</p>
              </span>
            </div>
            <div className="vitals-row">
              <div className="vitals-name">
                {" "}
                <label className="vitals-label" htmlFor="">
                  Respiration Rate
                </label>
              </div>
              <span className="parameter">
                <input type="number" />
                <p>breaths per minute</p>
              </span>
            </div>
            <div className="vitals-row">
              <div className="vitals-name">
                {" "}
                <label className="vitals-label" htmlFor="">
                  Blood Pressure
                </label>
              </div>
              <span className="parameter">
                <input type="number" />
                <p>mmHg</p>
              </span>
            </div>
            <div className="vitals-row">
              <div className="vitals-name">
                {" "}
                <label className="vitals-label" htmlFor="">
                  Blood Oxygen
                </label>
              </div>
              <span className="parameter">
                <input type="number" />
                <p>PaO2</p>
              </span>
            </div>
            <div className="vitals-row">
              <div className="vitals-name">
                {" "}
                <label className="vitals-label" htmlFor="">
                  Weight
                </label>
              </div>
              <span className="parameter">
                <input type="number" />
                <p>kg</p>
              </span>
            </div>
            <div className="vitals-row">
              <div className="vitals-name">
                <label className="vitals-label" htmlFor="">
                  Blood Glucose Level
                </label>
              </div>
              <span className="parameter">
                <input type="number" />
                <p>mmol/L</p>
              </span>
            </div>
            <div className="vitals-row">
              <div className="vitals-name">
                {" "}
                <label className="vitals-label" htmlFor="">
                  Body Temperature
                </label>
              </div>
              <span className="parameter">
                <input type="number" />
                <p>°C</p>
              </span>
            </div>
          </div>
        </section>

        <hr className="rule" />
        <section className="del">
          <div className="vitals">
            <div className="vitals-header">
              <h2 className="vitals-title">Daily Exercise Log</h2>
              <ChevronDown />
            </div>
            <p className="faa">Fill as applicable</p>
            <div className="vitals-list">
              <div className="vitals-row">
                <div className="vitals-name">
                  <label className="vitals-label" htmlFor="">
                    Walking{" "}
                  </label>
                </div>
                <span className="parameter">
                  <input type="number" />
                  <p>km</p>
                </span>
              </div>
              <div className="vitals-row">
                <div className="vitals-name">
                  {" "}
                  <label className="vitals-label" htmlFor="">
                    Jogging
                  </label>
                </div>
                <span className="parameter">
                  <input type="number" />
                  <p>km</p>
                </span>
              </div>
              <div className="vitals-row">
                <div className="vitals-name">
                  {" "}
                  <label className="vitals-label" htmlFor="">
                    Running
                  </label>
                </div>
                <span className="parameter">
                  <input type="number" />
                  <p>km</p>
                </span>
              </div>
              <div className="vitals-row">
                <div className="vitals-name">
                  {" "}
                  <label className="vitals-label" htmlFor="">
                    Cycling
                  </label>
                </div>
                <span className="parameter">
                  <input type="number" />
                  <p>km</p>
                </span>
              </div>
              <div className="vitals-row">
                <div className="vitals-name">
                  {" "}
                  <label className="vitals-label" htmlFor="">
                    Rope Skipping{" "}
                  </label>
                </div>
                <span className="parameter">
                  <input type="number" />
                  <p>counts</p>
                </span>
              </div>
              <div className="vitals-row">
                <div className="vitals-name">
                  {" "}
                  <label className="vitals-label" htmlFor="">
                    Yoga
                  </label>
                </div>
                <span className="parameter">
                  <input type="number" />
                  <p>mins</p>
                </span>
              </div>
              <div className="vitals-row">
                <div className="vitals-name">
                  {" "}
                  <label className="vitals-label" htmlFor="">
                    Dance
                  </label>
                </div>
                <span className="parameter">
                  <input type="number" />
                  <p>mins</p>
                </span>
              </div>
            </div>
          </div>
          <a className="vitals-label" id="ccb">
            Calculate calories burned
          </a>
        </section>
        <hr className="rule" />
        <section className="print-report">
          <h2 className="vitals-title">Print report</h2>
          <div className="report-date">
            <div>
              <label htmlFor="">From</label>
              <input type="date" className="date-input" name="" id="" />
            </div>
            <div className="report-field">
              <label htmlFor="">To</label>
              <input type="date" className="date-input" name="" id="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tracker;
