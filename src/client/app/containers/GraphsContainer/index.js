import React from 'react';
import styled from 'styled-components';
import LineChart from '../../components/LineChart';
import GraphContainerWraper from './GraphContainerWraper';

const LineChartWrapper = styled.div`
    margin: 2em 0;
    margin-left: 2em;
    margin-bottom: 2em;
`;

const LineChartBreak = styled.div`
    height: 50px;
    padding: 2em,
    border-bottom-width: 7px;
    border-bottom-color: black;
    border-bottom-style: solid;
`;

const host = window.location.origin + '/api/v1/';

const lineChartMap = [
    {
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        yAxisTitle: "Power Consumption - kW",
        lineSeriesName: "Power",
        caption: "The installation sector sees the most growth.",
        requestUrl: host + "getPowerConsumption",
        unit: "kW"
    },
    {
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        yAxisTitle: "Average Voltage (V)",
        lineSeriesName: "Voltage",
        caption: "The installation sector sees the most growth.",
        requestUrl: host + "getAverageVoltage",
        unit: "V"
    },
    {
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        yAxisTitle: "Maximum Voltage (V)",
        lineSeriesName: "Voltage",
        caption: "The installation sector sees the most growth.",
        requestUrl: host + "getMaximumVoltage",
        unit: "V"
    },
    {
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        yAxisTitle: "Minimum Voltage (V)",
        lineSeriesName: "Voltage",
        caption: "The installation sector sees the most growth.",
        requestUrl: host + "getMinimumVoltage",
        unit: "V"
    },
    {
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        yAxisTitle: "Average current (amp)",
        lineSeriesName: "current",
        caption: "The installation sector sees the most growth.",
        requestUrl: host + "getAverageCurrent",
        unit: "amp"
    },
    {
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        yAxisTitle: "Maximum current (amp)",
        lineSeriesName: "current",
        caption: "The installation sector sees the most growth.",
        requestUrl: host + "getMaximumCurrent",
        unit: "amp"
    },
    {
        title: "Solar Employment Growth by Sector, 2010-2016",
        subTitle: "Source: thesolarfoundation.com",
        yAxisTitle: "Minimum current (amp)",
        lineSeriesName: "current",
        caption: "The installation sector sees the most growth.",
        requestUrl: host + "getMinimumCurrent",
        unit: "amp"
    }
]
function GraphsContainer(props) {
    return (
        <GraphContainerWraper>
            {lineChartMap.map((ele, index) => (
                <LineChartWrapper key={`LineChartWrapper${index}`}>
                    <LineChart key={`LineChart${index}`} buttonId={index} {...ele} location={props.location} />
                    <LineChartBreak/>
                </LineChartWrapper>
            ))
            }
        </GraphContainerWraper>
    );
}

export default GraphsContainer;