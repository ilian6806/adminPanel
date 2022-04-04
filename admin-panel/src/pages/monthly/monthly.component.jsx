import React  from 'react';
import { useParams } from "react-router-dom";
import PaymentsDailyTableWithData from "../../components/tables/payments/payments-daily-with-data.component";
import PaymentsMonthlyTableWithData from "../../components/tables/payments/payments-monthly-with-data.component";

const Monthly = () => {

    let params = useParams();

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className = "h3 mb-0 text-gray-800">Monthly {params.type}</h1>
            </div>
            <div className="row">
                <PaymentsMonthlyTableWithData />
                <PaymentsMonthlyTableWithData />
                <PaymentsMonthlyTableWithData />
                <PaymentsMonthlyTableWithData />
                <PaymentsDailyTableWithData />
            </div>
        </div>
    );
};

export default Monthly