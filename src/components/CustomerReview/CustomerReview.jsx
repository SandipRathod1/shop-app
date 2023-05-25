import React from "react";
import Chart from "react-apexcharts";
import "./CustomerReview.css"

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [30, 50, 30, 60, 40, 70, 10, 63, 58, 96, 47, 56]
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: "500px", 
      },
      fill: {
        colors: ["#0ff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
        colors: ["#0000ff"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-05-19T00:00:00.000Z",
          "2023-05-19T01:30:00.000Z",
          "2023-05-19T02:30:00.000Z",
          "2023-05-19T03:30:00.000Z",
          "2023-05-19T04:30:00.000Z",
          "2023-05-19T05:30:00.000Z",
          "2023-05-19T07:30:00.000Z",
          "2023-05-19T08:30:00.000Z",
          "2023-05-19T09:30:00.000Z",
          "2023-05-19T10:30:00.000Z",
          "2023-05-19T11:30:00.000Z",
          "2023-05-19T12:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <div className="CustomerReview">
      <Chart options={data.options} series={data.series} type="line" />
    </div>
  );
};

export default CustomerReview;
