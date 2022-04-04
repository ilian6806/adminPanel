import React from 'react';
import DataTable from 'react-data-table-component';
import './custom-data-table.component.scss'
import Spinner from "../common/spinner/spinner.component";

const paginationComponentOptions = {
    rowsPerPageText: 'Pages',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const customStyles = {
    header: {
        style: {
            padding: '0.75rem 1.25rem',
            marginBottom: 0,
            backgroundColor: '#f8f9fc',
            borderBottom: '1px solid #e3e6f0'
        }
    },
    tableWrapper: {
        style: {
            flex: '1 1 auto',
            minHeight: '1px',
            padding: '1.25rem'
        },
    },
    table: {
        style: {
            clear: 'both',
            color: '#858796',
            marginTop: '6px !important',
            marginBottom: '6px !important',
            maxWidth: 'none !important',
            borderCollapse: 'separate !important',
            borderSpacing: 0,
            borderRightWidth: 0,
            border: '1px solid #e3e6f0',
        },
    },
    headRow: {
        style: {
            color: '#858796',
        },
    },
    headCells: {
        style: {
            fontWeight: 'bold',
            verticalAlign: 'bottom',
            borderBottom: '2px solid #e3e6f0',
            border: '1px solid #e3e6f0',
            color: '#858796',
            fontSize: '16px',
        },
    },
    rows: {
        style: {
            color: '#858796',
        },
        highlightOnHoverStyle: {
            backgroundColor: 'rgb(230, 244, 244)',
            borderBottomColor: '#FFFFFF',
            borderRadius: '25px',
            outline: '1px solid #FFFFFF',
        },
    },
    cells: {
        style: {
            boxSizing: 'content-box',
            padding: '0.75rem',
            verticalAlign: 'top',
            border: '1px solid #e3e6f0',
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            color: '#858796',
            fontSize: '16px',
        }
    }
};

const CustomDataTable = (props) => {
    let className = 'card custom-table-container shadow mb-4'
    if (props.fullWidth) {
        className += ' full-width';
    }
    return (
        <div className={className}>
            <DataTable
                title={props.title}
                columns={props.columns}
                data={props.data}
                customStyles={customStyles}
                pagination={props.pagination}
                progressPending={props.progressPending}
                progressComponent={<Spinner inner />}
                dense
                striped
                paginationComponentOptions={paginationComponentOptions}
            />
        </div>
    );
};

export default CustomDataTable
