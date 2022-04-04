import React, {useEffect, useState} from "react";
import fetchData from "../../../utils/fetch/fetch.utils";
import PaymentsDailyTable from "./payments-daily.component";

const PaymentsDailyTableWithData = (props) => {

    const [testPayments, setTestPayments] = useState({ data: [], loading: true });

    useEffect(() => {
        fetchData('/payments', (response) => {
            setTestPayments({ data: response, loading: false });
        });
    }, []);

    return (
        <PaymentsDailyTable {...testPayments}/>
    );
};

export default PaymentsDailyTableWithData;