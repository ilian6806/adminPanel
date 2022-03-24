import React from "react";
import CustomDataTable from "../../components/custom-data-table/custom-data-table.component";
import Badge from "../../components/badge/badge.component";
import testPaymentsData from "../../test-data/payments"
import testPaymentsMonthData from "../../test-data/payments-month"

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
            <CustomDataTable
                title="Per Month"
                columns={testPaymentsMonthData.columns}
                data={testPaymentsMonthData.data}
            />
            <CustomDataTable
                title="Payments"
                columns={testPaymentsData.columns}
                data={testPaymentsData.data}
                pagination
                fullWidth
            />
        </div>
    )
};

export default Dashboard