
import React, { useState } from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerwrapper = styled.div`
    display: inline-block;
    margin: 0 1em;
    flex-direction: 'row';
`;

const DatePickerLabel = styled.span`
    padding-right: 1em;
    font-size: 14px;
    font-weight: 600;
`

function DatePickerComponent(props) {
    const [startDateDatePicker, setStartDateDatePicker] = useState(props.startDate);
    const [endDateDatePicker, setEndDateDatePicker] = useState(props.endDate);

    const handleFromDateChange = (date, event) => {
        setEndDateDatePicker(date);
        if (!event) {
            props.setEndDate(date);
        }
    };

    const handleToDateChange = (date, event) => {
        setStartDateDatePicker(date);
        if (!event) {
            props.setStartDate(date);
        }
    };

    return (
        <div>
            <DatePickerwrapper>
                <DatePickerLabel>Start Date</DatePickerLabel>
                <DatePicker
                    selected={startDateDatePicker}
                    onChange={(date, event) => handleToDateChange(date, event)}
                    className="form-input"
                    dateFormat="MMMM d, yyyy HH:mm"
                    showTimeSelect
                    timeIntervals={60}
                />
            </DatePickerwrapper>
            <DatePickerwrapper>
                <DatePickerLabel>end Date</DatePickerLabel>
                <DatePicker
                    selected={endDateDatePicker}
                    onChange={(date, event) => handleFromDateChange(date, event)}
                    className="form-input"
                    dateFormat="MMMM d, yyyy HH:mm"
                    showTimeSelect
                    timeIntervals={60}
                />
            </DatePickerwrapper>
            <button id={props.buttonId} onClick={props.handelClick}>Plot graph</button>
        </div>
    )
}

export default DatePickerComponent