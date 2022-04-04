
import { Line } from 'react-chartjs-2';

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

let dataSetOptions = {
    lineTension: 0.3,
    backgroundColor: "rgba(78, 115, 223, 0.05)",
    borderColor: "rgba(78, 115, 223, 1)",
    pointRadius: 3,
    pointBackgroundColor: "rgba(78, 115, 223, 1)",
    pointBorderColor: "rgba(78, 115, 223, 1)",
    pointHoverRadius: 3,
    pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
    pointHoverBorderColor: "rgba(78, 115, 223, 1)",
    pointHitRadius: 10,
    pointBorderWidth: 2,
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false
        },
        maintainAspectRatio: false,
        tooltip: {
            backgroundColor: "rgb(255,255,255)",
            titleMarginBottom: 10,
            titleColor: "black",
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 105,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
                labelColor: function(context) {
                    return {
                        borderColor: 'rgb(0, 0, 255)',
                        backgroundColor: 'rgb(255, 0, 0)',
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderRadius: 2,
                    };
                },
                labelTextColor: function(context) {
                    return '#543453';
                },
                label: function(context) {
                    return '$' + (context.parsed.y);
                },
                title: function(context) {
                    return context[0].label;
                },
            }
        }
    },
};

const CustomLineChart = (props) => {

    props.data.datasets = props.data.datasets.map((o) => { return { ...dataSetOptions, ...o }} );
    options.plugins.legend.display = !!props.legend;

    return (
        <div className="col-xl-6 col-lg-7">
            <div className="card shadow mb-4">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{ props.title }</h6>
                </div>
                <div className="card-body">
                    <Line options={ options } data={ props.data } />
                </div>
            </div>
        </div>
    );
};

export default CustomLineChart;
