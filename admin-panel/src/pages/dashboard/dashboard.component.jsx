import React from 'react';
import CustomDataTable from "../../components/custom-data-table/custom-data-table.component";
import testPaymentsData from "../../test-data/payments"
import testPaymentsMonthData from "../../test-data/payments-month"

const Dashboard = () => {
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
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