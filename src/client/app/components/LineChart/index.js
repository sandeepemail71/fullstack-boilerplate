
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Highcharts from 'highcharts';
var moment = require('moment')
import {
    HighchartsChart,
    Chart, withHighcharts, XAxis, YAxis, Title,
    Subtitle, Legend, LineSeries, Caption, Tooltip,
} from 'react-jsx-highcharts';

import DatePickerComponent from './DatePicker';
import request from 'utils/request';
import { getQueryVariable } from 'utils';


const GraphWrapper = styled.div`
`;


function LineChart(props) {
    const clientId = getQueryVariable('client-id');
    const [startDate, setStartDate] = useState(new Date(Date.now() - 60 * 60 * 1000));
    const [endDate, setEndDate] = useState(new Date());
    const [power, setPower] = useState([]);
    const [loader, setLoader] = useState(true);

    const requestUrl = props.requestUrl || `http://localhost:8000/api/v1/getPowerConsumption`;


    let tmp = {
        plotOptions: {
            series: {
                pointInterval: 60 * 1000,
                pointStart: Date.UTC(startDate.getFullYear(),
                    startDate.getMonth(),
                    startDate.getDate(),
                    startDate.getHours(),
                    startDate.getMinutes())
            },
            tooltip: {
                enabled: true, // This is assumed when component is mounted
                padding: 10,
                hideDelay: 250,
                shape: 'square',
                split: true,
                formatter: function () {
                    return `<b> ${moment(this.value).format()}</b>`
                }
            }
        },
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        xAxisTitle: "Time",
        yAxisTitle: "Power Consumption - kWh",
        lineSeries: [{
            data: power,
            name: props.lineSeriesName || "Installation"
        }],
        caption: "The installation sector sees the most growth."
    }

    tmp = { ...tmp, ...props };

    const xAxisOptions = {
        type: "dateTime",
        tickInterval: tmp.plotOptions.series.pointInterval,
        labels: {
            formatter: function () {
                return `<b> ${Highcharts.dateFormat('%d %b %y%y   %H:%M', this.value)}</b>`
            }
        },
        endOnTick: true,
        startOnTick: true
    }

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "startDate": startDate,
                "endDate": endDate,
                "clientId": clientId
            })
        }
        request(requestUrl, options).then((data) => {
            setPower(data.data);
            setLoader(false);
        }).catch((err) => {
            console.log(err);
            setLoader(false);
        })
    }, [])

    // if (loader) {
    //     return <LoadingIndicator />
    // }


    const handelClick = (e) => {
        const chartNo = Number(e.target.id);
        Highcharts.charts[chartNo].showLoading();
        setLoader(true);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "startDate": startDate,
                "endDate": endDate,
                "clientId": "1"
            })
        }
        request(requestUrl, options).then((data) => {
            Highcharts.charts[chartNo].hideLoading();
            setPower(data.data);
            setLoader(false);
            console.log(Highcharts, "==============Highcharts");
            Highcharts.charts[chartNo].update({
                series: {
                    pointInterval: 60 * 1000,
                    pointStart: Date.UTC(startDate.getFullYear(),
                        startDate.getMonth(),
                        startDate.getDate(),
                        startDate.getHours(),
                        startDate.getMinutes())
                },
            });
            console.log(Highcharts.charts[chartNo].update, "===============Highcharts.charts[0].update")
        }).catch((err) => {
            console.log(err);
            setLoader(false);
        })
    }


    return (
        <GraphWrapper >
            <HighchartsChart plotOptions={tmp.plotOptions} allowChartUpdate={true} >
                <Chart allowChartUpdate={true} />
                <Tooltip padding={10} hideDelay={250} shape="square" />
                <Title>{tmp.title}</Title>

                <Subtitle>{tmp.subTitle}</Subtitle>

                <Legend layout="vertical" align="right" verticalAlign="middle" />

                <XAxis {...xAxisOptions} dynamicAxis>
                    <XAxis.Title>{tmp.xAxisTitle}</XAxis.Title>
                </XAxis>

                <YAxis key="test">
                    <YAxis.Title>{tmp.yAxisTitle}</YAxis.Title>
                    {tmp.lineSeries.map(ele => <LineSeries key={ele.name} name={ele.name} data={ele.data} />)}
                </YAxis>
                <Caption align="center">{tmp.caption}</Caption>
            </HighchartsChart>
            <DatePickerComponent startDate={startDate} setStartDate={setStartDate}
                endDate={endDate} setEndDate={setEndDate} handelClick={handelClick} buttonId={props.buttonId} />
        </GraphWrapper>

    );
}



export default withHighcharts(LineChart, Highcharts);;
