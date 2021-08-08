import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";

const Chart = () => {
  let labelX = [],
    labelConfirmed = [],
    labelRecovered = [],
    labelDeceased = [];
  const allData = [
    {
      label: "Daily Confirmed Cases",
      data: labelConfirmed,
      backgroundColor: "#007BFF",
    },
    {
      label: "Daily Recoverd Cases",
      data: labelRecovered,
      backgroundColor: "#28A745",
    },
    {
      label: "Daily Deceased Cases",
      data: labelDeceased,
      backgroundColor: "#FF073A",
    },
  ];

  const url = "https://api.covid19india.org/data.json";
  const [dataChange, setDataChange] = useState(0);
  const funcFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();
    await data.cases_time_series.map((item) => {
      labelX.push(item.date);
      labelConfirmed.push(item.dailyconfirmed);
      labelRecovered.push(item.dailyrecovered);
      labelDeceased.push(item.dailydeceased);
    });
    setChartData({
      labels: labelX,
      datasets: [
        {
          label: allData[`${dataChange}`].label,
          data: allData[`${dataChange}`].data,
          backgroundColor: allData[`${dataChange}`].backgroundColor,
          fill: true,
        },
      ],
    });
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Daily Confirmed Cases",
        data: [],
        backgroundColor: "blue",
        fill: true,
      },
    ],
  });
  useEffect(() => {
    funcFetch();
  }, [dataChange]);

  return (
    <div className="chart">
      {/* <button
        onClick={() => {
          setDataChange("0");
        }}
      >
        Confirmed
      </button>
      <button
        onClick={() => {
          setDataChange("1");
        }}
      >
        Recovered
      </button>
      <button
        onClick={() => {
          setDataChange("2");
        }}
      >
        Deceased
      </button> */}
      <div className="selection">
        <label for="dataChange">Select to Display any Cases: </label>
        <select
          name="dataChange"
          id="dataChange"
          onChange={(e) => {
            setDataChange(e.target.value);
          }}
        >
          <option value="0">Daily Confirmed</option>
          <option value="1">Daily Recovered</option>
          <option value="2">Daily Deceased</option>
        </select>
      </div>

      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Daily Confirmed Cases",
            font: 5,
          },
        }}
      />
    </div>
  );
};

export default Chart;
