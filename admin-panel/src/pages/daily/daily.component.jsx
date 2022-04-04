import React, {useEffect, useState} from 'react';
import CustomDataTable from "../../components/custom-data-table/custom-data-table.component";
import Spinner from "../../components/common/spinner/spinner.component";
import fetchData from "../../utils/fetch/fetch.utils"

const Daily = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData('/payments', (response) => {
            setData(response);
            setIsLoading(false);
        });
    }, []);

    const columns =  [
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

    return (
        <div> { isLoading ?
            <Spinner/> :
            <CustomDataTable
                title="Daily"
                columns={columns}
                data={data}
                pagination
                fullWidth
            />
        }
        </div>
    )
};

export default Daily