import React from 'react';
import CustomDataTable from "../../components/custom-data-table/custom-data-table.component";
import testData from "../../test-data/payments"

const Daily = () => {
    return (
        <CustomDataTable
            title="Daily"
            columns={testData.columns}
            data={testData.data}
            pagination
            fullWidth
        />
    )
};

export default Daily