import React, { useState } from "react";
import tabular from "./tabular.jpg";
import square from "./blue-square.jpg";
import { useFetch } from "./useFetch";
import "./index.css";
import { Link } from "react-router-dom";
import { data } from "./data";
const State = () => {
  // const url = "https://data.covid19india.org/v4/min/data.min.json";
  // const [data, loading] = useFetch(url);
  const [search, setSearch] = useState("");
  const [table, setTable] = useState(false);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const newState = data.statewise.filter((item) =>
    item.state.toLowerCase().startsWith(search.toLowerCase())
  );

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  return (
    <>
      {/* <marquee behavior="" direction="left">
        ***
        <b>
          The data reperesented here is last updated on 13th August 2021 (23 Hrs
          27 Mins 22 Sec)
        </b>
        ***
      </marquee> */}
      <section>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search for States..."
        />
        <button
          className="btn"
          onClick={() => {
            setTable(!table);
          }}
        >
          <img src={table ? tabular : square} alt="" width="20px" />
        </button>
      </section>
      {table && (
        <table>
          <tr>
            <th>State</th>
            <th>Active</th>
            <th>Confirmed</th>
            <th>Deceased</th>
            <th>Recovered</th>
            {/* <th>Last Updated Date</th> */}
          </tr>
          {/* {loading || */}
          {newState.map((items) => {
            return (
              <tr>
                <td>{items.state}</td>
                <td className="nums">{items.active}</td>
                <td className="nums">{items.confirmed}</td>
                <td className="nums">{items.deaths}</td>
                <td className="nums">{items.recovered}</td>
                {/* <td className="nums">{formatDate(items.lastupdatedtime)}</td> */}
              </tr>
            );
          })}
        </table>
      )}
      {!table && (
        <div className="all-cards">
          {/* {loading || */}
          {newState.map((items) => {
            return (
              <div
                key={items.statecode}
                className="outer-card col-lg-3 col-md-4 col-sm-6 col-xs-12"
              >
                <div className="cards">
                  <div className="card-item head">
                    <b>{items.state}</b>
                  </div>
                  <div className="card-item">
                    <b>Active:</b> {items.active}
                  </div>
                  <div className="card-item">
                    <b>Confirmed:</b> {items.confirmed}
                  </div>
                  <div className="card-item">
                    <b>Deceased:</b> {items.deaths}
                  </div>
                  <div className="card-item">
                    <b>Recovered:</b> {items.recovered}
                  </div>
                  {/* <div className="card-item">
                    <b>Last Updated:</b> {formatDate(items.lastupdatedtime)}
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default State;
