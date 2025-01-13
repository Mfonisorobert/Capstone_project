import React from "react";
import "./Report-List.css";
import Funnel1 from "./Funnel1";
import Search1 from "./Search1";
import Doc1 from "./Doc1";
import BarChart4 from "./BarChart4";
import { reportData } from "./Report-Data";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const Report = ({ item, i }) => {
  return (
    <tr className="report-body">
      <td className={i % 2 === 0 ? "" : "even"}>{item.bloodTemp || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.pulseRate || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.respRate || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.bloodPressure || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.bloodOxygen || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.bodyWeight || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.bloodGlucose || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.walking || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.jogging || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.running || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.cycling || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.skipping || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.yoga || "-"}</td>
      <td className={i % 2 === 0 ? "" : "even"}>{item.dance || "-"}</td>
    </tr>
  );
};

const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <button className="page-change">
          <ArrowLeft />
          Previous
        </button>
        <div className="page-numbers">
          <button className="bg-color">1</button>
          <button className="bg-color">2</button>
          <button className="bg-color">...</button>
          <button className="bg-color">10</button>
          <button className="bg-color">11</button>
          <button className="bg-color">12</button>
          <button className="bg-color">13</button>
        </div>
        <button className="page-change">
          Next
          <ArrowRight />
        </button>
      </div>
    </>
  );
};

const ReportDates = ({ item, i }) => {
  return (
    <tr>
      <td className={i % 2 === 0 ? "" : "even"}>{item.date || "-"}</td>
    </tr>
  );
};
//   return (

//   );
// };

const ReportList = () => {
  return (
    <>
      <main className="trackerbg">
        <h1 className="report-heading">Report List</h1>
        <div className="filters">
          <div className="filters-left">
            <div>
              <select name="from" id="from">
                <option selected value="allTime">
                  All Time
                </option>
              </select>
            </div>
            <div>
              <select name="to" id="to">
                <option selected value="allTime">
                  All Time
                </option>
              </select>
            </div>
            <button className="funnel">
              <Funnel1 />
            </button>
          </div>
          <div className="filters-right">
            <div>
              <Search1 />
              <input type="text" id="search" placeholder="Search..." />
            </div>
            <button>
              <Doc1 />
              <p className="export">Export PDF</p>
            </button>
            <button>
              <BarChart4 />
              <p className="export">Export Excel</p>
            </button>
          </div>
        </div>
        <div className="table-div">
          <table className="date-table">
            <thead>
              <tr>
                <th className="date-heading"> Date </th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <ReportDates item={item} i={index} key={index} />
              ))}
            </tbody>
          </table>
          <table className="">
            <thead>
              <tr className="report-header">
                <th>Blood Temp.</th>
                <th>Pulse Rate</th>
                <th>Resp. Rate</th>
                <th>Blood Pressure</th>
                <th>Blood Oxygen</th>
                <th>Body Weight</th>
                <th>Blood Glucose</th>
                <th>Walking</th>
                <th>Jogging</th>
                <th>Running</th>
                <th>Cycling</th>
                <th>Skipping</th>
                <th>Yoga</th>
                <th>Dance</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <Report key={index} i={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </main>
    </>
  );
};

export default ReportList;
