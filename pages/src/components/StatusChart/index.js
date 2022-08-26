import React from "react";
import { Chart } from "react-google-charts";

export const StatusChart = ({ stats }) => {
  return console.log(stats.unshift(["Stats", "Value"]));
  /* <>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="300px"
        data={stats.unshift(["Stats", "Value"])}
      />
    </> */
};
