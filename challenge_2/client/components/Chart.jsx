import React from "react";
import { Line } from "react-chartjs-2";

const Chart = props => {
  let prices = [];
  let dates = [];
  for (var key in props.data) {
    dates.push(key);
    prices.push(props.data[key]);
  }
  let charData = {
    labels: dates,
    datasets: [
      {
        label: "Bitcoin (BTC)",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: prices
      }
    ]
  };
  let charOptions = {
    pointRadius: 0
  };
  return (
    <div>
      <Line data={charData} options={charOptions} />
    </div>
  );
};

export default Chart;
