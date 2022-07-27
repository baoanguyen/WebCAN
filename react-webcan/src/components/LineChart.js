import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from "react";
import axios from 'axios'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function LineChart() {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        let dataA = [];
        let dataB = [];

    axios
        .get('http://127.0.0.1:5000/graph/getData')
        .then(response => {
        console.log(response)
        for(const dataObj of response.data){
            dataA.push(parseInt(dataObj.year))
            dataB.push(parseInt(dataObj.userGain))
        }
        }).catch(err => {
        console.log(err);
        })
        console.log(dataA, dataB);
        
        
        setChartData({
        labels: dataA,
        datasets: [
            {
            label: "Test Axios",
            data: dataB,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.4)",
            },
        ],
        });
        setChartOptions({
        responsive: true,
        plugins: {
            legend: {
            position: "top",
            },
            title: {
            display: true,
            text: "Whom'st let the dogs out",
            },
        },
        });
    }, []);

    return (
        <Line options={chartOptions} data={chartData} />
    );
}

export default LineChart;
