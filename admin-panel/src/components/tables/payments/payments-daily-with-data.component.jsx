import React, {useEffect, useState} from "react";
import send from "../../../utils/fetch/fetch.utils";
import PaymentsDailyTable from "./payments-daily.component";

const PaymentsDailyTableWithData = (props) => {

    const [testPayments, setTestPayments] = useState({ data: [], loading: true });

    useEffect(() => {
        send('/payments').then(response => {
            setTestPayments({ data: response, loading: false });
        });
    }, []);

    return (
        <PaymentsDailyTable {...testPayments}/>
    );
};

export default PaymentsDailyTableWithData;