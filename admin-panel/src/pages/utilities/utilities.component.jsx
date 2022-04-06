import {useState} from "react";
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const json = {
    array: [1, 2, 3],
    bool: true,
    object: {
        foo: 'bar',
    }
};

const Utilities = () => {

    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));

    return (
        <div>
            <div className="card mb-3">
                <div className="card-header">JSONInput</div>
                <div className="card-body">
                    <div className="d-inline-block">
                        <JSONInput
                            id = 'a_unique_id'
                            placeholder = { json }
                            theme = 'light_mitsuketa_tribute'
                            locale = { locale }
                            height = '250px'
                            style={{ body: { fontSize: '14px', } }}
                        />
                    </div>
                    <div className="d-inline-block">
                        <JSONInput
                            id = 'a_unique_id'
                            placeholder = { json }
                            theme = 'dark_vscode_tribute'
                            locale = { locale }
                            height = '250px'
                            style={{ body: { fontSize: '14px', } }}
                            viewOnly={true}
                        />
                    </div>
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">DatePicker</div>
                <div className="card-body" style={{'height': '360px'}}>
                    <DatePicker
                        className="form-control d-inline-block w-auto"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <DatePicker
                        className="form-control d-inline-block w-auto"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </div>
            </div>

            <div className="card mb-3">
                <div className="card-header">FullCalendar</div>
                <div className="card-body">
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default Utilities;