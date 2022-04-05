import React, {useEffect, useState} from "react";
import send from "../../../utils/fetch/fetch.utils";
import PaymentsMonthlyTable from "./payments-monthly.components";

const PaymentsMonthlyTableWithData = (props) => {

    const [testPaymentsMonth, setTestPaymentsMonth] = useState({ data: [], loading: true });

    useEffect(() => {
        send('/paymentsMonthly').then(response => {
            setTestPaymentsMonth({ data: response, loading: false });
        });
    }, []);

    return (
        <PaymentsMonthlyTable {...testPaymentsMonth} />
    );
};

export default PaymentsMonthlyTableWithData;