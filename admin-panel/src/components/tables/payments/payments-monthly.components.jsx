import React from "react";
import CustomDataTable from "../../custom-data-table/custom-data-table.component";

const columns = [
    {
        name: 'Month',
        selector: row => row.month,
    },
    {
        name: 'Total Net USD',
        selector: row => row.totalNetUSD,
        right: true,
    }
];

const PaymentsMonthlyTable = (props) => {
    return (
        <CustomDataTable
            title="Per Month"
            columns={columns}
            data={props.data}
            progressPending={props.loading}
        />
    );
};

export default PaymentsMonthlyTable;