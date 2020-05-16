
import React from 'react';
import styled from 'styled-components';

import Highcharts from 'highcharts';
import {
    HighchartsChart,
    Chart, withHighcharts, XAxis, YAxis, Title,
    Subtitle, Legend, LineSeries, Caption, Tooltip
} from 'react-jsx-highcharts';


const GraphWrapper = styled.div`
`;


function LineChart(props) {
    const xAxisOptions = {
        type: "datetime",
        startOnTick: "true",
        endOnTick: "true",
        dateTimeLabelFormats: {
            day: '%e %b %Y'
        }

    }
    return (
        <GraphWrapper>
            <HighchartsChart plotOptions={props.plotOptions}>
                <Chart />
                <Tooltip padding={10} hideDelay={250} shape="square" />
                <Title>{props.title}</Title>

                <Subtitle>{props.subTitle}</Subtitle>

                <Legend layout="vertical" align="right" verticalAlign="middle" />

                <XAxis {...xAxisOptions} >
                    <XAxis.Title>{props.xAxisTitle}</XAxis.Title>
                </XAxis>

                <YAxis>
                    <YAxis.Title>{props.yAxisTitle}</YAxis.Title>
                    {props.lineSeries.map(ele => <LineSeries key={ele.name} name={ele.name} data={ele.data} />)}
                </YAxis>
                <Caption align="center">The installation sector sees the most growth.</Caption>
            </HighchartsChart>
        </GraphWrapper>
    );
}


export default withHighcharts(LineChart, Highcharts);;
