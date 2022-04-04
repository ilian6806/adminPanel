import React from "react";
import CustomDataTable from "../../custom-data-table/custom-data-table.component";

const columns = [
    {
        name: 'Offer Id',
        selector: row => row.promoName,
        sortable: true,
        minWidth: '600px'
    },
    {
        name: 'Price USD',
        selector: row => row.priceUSD,
        sortable: true,
        right: true,
    },
    {
        name: 'Orders',
        selector: row => row.orders,
        sortable: true,
        right: true,
    },
    {
        name: 'Unique',
        selector: row => row.uniqueBuyers,
        sortable: true,
        right: true,
    },
    {
        name: 'Total USD',
        selector: row => row.totalUSD,
        sortable: true,
        right: true,
    },
    {
        name: 'Total Net USD',
        selector: row => row.totalNetUSD,
        sortable: true,
        right: true,
    },
    {
        name: 'Ratio',
        selector: row => row.ratio,
        minWidth: '200px'
    },
];

const PaymentsDailyTable = (props) => {
    return (
        <CustomDataTable
            title="Payments"
            columns={columns}
            data={props.data}
            progressPending={props.loading}
            pagination
            fullWidth
        />
    )
};

export default PaymentsDailyTable;