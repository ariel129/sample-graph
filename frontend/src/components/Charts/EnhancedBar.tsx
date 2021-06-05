import React from "react";
import { Bar } from "react-chartjs-2";

interface Props {
  labels: string[];
  label1: string;
  label2: string;
  data1: number[];
  data2: number[];
}

export const EnhancedBar: React.FC<Props> = ({
  labels,
  label1,
  label2,
  data1,
  data2,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: label1,
        data: data1,
        backgroundColor: ["rgb(255,126,0)"],
        borderColor: ["rgb(255,126,0)"],
        borderWidth: 0,
      },
      {
        label: label2,
        data: data2,
        backgroundColor: ["rgb(0,156,73)"],
        borderColor: ["rgb(0,156,73)"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 500,
          callback: function (value: number, index: number) {
            return "$" + value;
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar type data={data} options={options} />
    </div>
  );
};
