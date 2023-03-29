import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: false,
            text: "Chart.js Bar Chart"
        }
    }
};

const labels = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];

export const data = {
    labels,
    datasets: [
        {
            label: "Visitors",
            data: [140, 125, 90, 60, 180, 125, 150],
            backgroundColor: "#94bbe9",
            barPercentage: 0.6
        }, {
            label: "Borrowers",
            data: [42, 60, 54, 31, 120, 40, 51],
            backgroundColor: "#9a33c9",
            barPercentage: 0.4
        }
    ]
};

export function BarChart() {
    return <Bar options={options} data={data} />
}