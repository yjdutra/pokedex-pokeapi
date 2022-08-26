import React from "react";
import { Chart } from "react-google-charts";

export const StatusChart = ({ stats }) => {
  const data = [["Stats", "Value", { role: "style" }], ...stats];
  return (
    <>
      <Chart chartType="ColumnChart" width="100%" height="300px" data={data} />
    </>
  );
};
