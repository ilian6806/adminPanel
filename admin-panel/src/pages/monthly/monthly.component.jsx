import React  from 'react';
import { useParams } from "react-router-dom";

const Monthly = () => {

    let params = useParams();

    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className = "h3 mb-0 text-gray-800">Monthly {params.type}</h1>
        </div>
    )
};

export default Monthly