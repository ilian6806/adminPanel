import React, { useEffect, useState } from "react";

import Badge from "../../components/badge/badge.component";
import CustomLineChart from "../../components/custom-line-chart/custom-line-chart.component";
import CustomPieChart from "../../components/custom-pie-chart/custom-pie-chart.component";
import PaymentsDailyTableWithData from "../../components/tables/payments/payments-daily-with-data.component";
import PaymentsMonthlyTableWithData from "../../components/tables/payments/payments-monthly-with-data.component";

const Dashboard = () => {

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
                <Badge title="EARNINGS (MONTHLY)" value="$40,000" />
                <Badge title="EARNINGS (ANNUAL)" value="$215,000" color="success" icon="calendar" />
                <Badge title="RETENTION (FIRST DAY)" progress="22" color="info" icon="comments" />
            </div>
            <div className="row">

                <PaymentsMonthlyTableWithData />

                <CustomLineChart title="Earnings Overview" legend data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'Earnings',
                            data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
                        },
                        {
                            label: 'Earnings Last Year',
                            data: [0, 25000, 13000, 17000, 12000, 24000, 10000, 20000, 21000, 20000, 26000, 42000],
                            borderColor: "rgba(223, 115, 90, 1)",
                            pointBackgroundColor: "rgba(223, 115, 90, 1)",
                            pointBorderColor: "rgba(223, 115, 90, 1)",
                        },
                    ],
                }}/>
                <CustomPieChart title="Active Users" data={{
                    labels: ['Android', 'iOS', 'Windows'],
                    datasets: [
                        {
                            label: 'Active Users',
                            data: [60213, 45133, 5133],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}/>
            </div>
            <div className="row">
                <PaymentsDailyTableWithData />
            </div>
        </div>
    )
};

export default Dashboard