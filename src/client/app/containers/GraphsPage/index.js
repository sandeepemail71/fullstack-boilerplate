
import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DatePicker from 'react-datepicker';
import LineChart from '../../components/LineChart';
import "react-datepicker/dist/react-datepicker.css";


// import { createStructuredSelector } from 'reselect';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import reducer from './reducer';
// import saga from './saga';


const GraphWrapper = styled.div`
    flex-direction: 'row';
`;

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

function GraphsPage(props) {
    const now = new Date();
    const beforeAnHour = new Date(now.setHours(now.getHours() - 1));
    const [startDate, setStartDate] = useState(beforeAnHour);
    const [endDate, setEndDate] = useState(new Date());
    const tmp = {
        plotOptions: {
            series: {
                pointInterval: 60 * 1000, // one hour
                pointStart: Date.UTC(startDate.getFullYear(),
                    startDate.getMonth() + 1,
                    startDate.getDate(),
                    startDate.getHours(),
                    startDate.getMinutes())
            },
            tooltip: {
                enabled: true, // This is assumed when component is mounted
                padding: 10,
                hideDelay: 250,
                shape: 'square',
                split: true
            }
        },
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        xAxisTitle: "Time",
        yAxisTitle: "Power Consumption - kWh",
        lineSeries: [{
            data: [
                4.39,
                2.49,
                1.9,
                7.24,
                6.29,
                3.28,
                9.46,
                11,
                8.15,
                5.13,
                0.36,
                7.28,
                9.49,
                1.14,
                14.55,
                7.76,
                14.97,
                1.45,
                3.2,
                1.55,
                22.72,
                14.74,
                5.43,
                8.55,
                5.56,
                3.01,
                10.51,
                12.09,
                7.33,
                3.79,
                0.53,
                0.59,
                3.56,
                9.39,
                4.48,
                8.53,
                16.16,
                1.01,
                15.65,
                0.68,
                6.26,
                20.67,
                1.09,
                0.38,
                3.49,
                6.59,
                2.55,
                0.88,
                0.84,
                2.64,
                12.6,
                6.68,
                11.5
            ],
            name: "Installation"
        }]
    }
    return (

        <GraphWrapper>
            <LineChart {...tmp} />
            <DatePickerwrapper>
                <DatePickerLabel>Start Date</DatePickerLabel>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    className="form-input"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    showTimeSelect
                    timeIntervals={30}
                />
            </DatePickerwrapper>
            <DatePickerwrapper>
                <DatePickerLabel>end Date</DatePickerLabel>
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    className="form-input"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    showTimeSelect
                    timeIntervals={30}
                />
            </DatePickerwrapper>
        </GraphWrapper>

    );
}

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

function mapDispatchToProps(dispatch) {
    return {
        triggerDispatch: () => dispatch({ type: 'FETCH_STATIONS' }),
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'test', reducer });
// const withSaga = injectSaga({ key: 'test', saga }); // `mode` is an optional argument, default value is `RESTART_ON_REMOUNT`
export default compose(
    //   withReducer,
    //   withSaga,
    withConnect,
    memo
)(GraphsPage);