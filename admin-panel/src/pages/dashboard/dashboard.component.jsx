import React from 'react';
import DataTable from 'react-data-table-component';

const Dashboard = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ];


    const paginationComponentOptions = {
        rowsPerPageText: 'Pages',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className = "h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div>
                <DataTable
                    title="Daily"
                    columns={columns}
                    data={data}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            </div>
        </div>
    )
};

export default Dashboard