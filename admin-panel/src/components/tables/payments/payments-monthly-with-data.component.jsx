import React, {useEffect, useState} from "react";
import fetchData from "../../../utils/fetch/fetch.utils";
import PaymentsMonthlyTable from "./payments-monthly.components";

const PaymentsMonthlyTableWithData = (props) => {

    const [testPaymentsMonth, setTestPaymentsMonth] = useState({ data: [], loading: true });

    useEffect(() => {
        fetchData('/paymentsMonthly', (response) => {
            setTestPaymentsMonth({ data: response, loading: false });
        });
    }, []);

    return (
        <PaymentsMonthlyTable {...testPaymentsMonth} />
    );
};

export default PaymentsMonthlyTableWithData;