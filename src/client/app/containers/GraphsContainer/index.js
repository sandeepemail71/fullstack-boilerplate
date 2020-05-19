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
        title: "Time versus Power Consumption",
        subTitle: "Value Source: In-House Designed Meters",
        yAxisTitle: "Power Consumption - kW",
        lineSeriesName: "Power",
        caption: "",
        requestUrl: host + "getPowerConsumption",
        unit: "kW"
    },
    {
        title: "Time versus Average Voltage Supply",
        subTitle: "Value Source: In-House Designed Meters",
        yAxisTitle: "Average Voltage (V)",
        lineSeriesName: "Voltage",
        caption: "",
        requestUrl: host + "getAverageVoltage",
        unit: "V"
    },
    {
        title: "Time versus Maximum Voltage Supply",
        subTitle: "Value Source: In-House Designed Meters",
        yAxisTitle: "Maximum Voltage (V)",
        lineSeriesName: "Voltage",
        caption: "",
        requestUrl: host + "getMaximumVoltage",
        unit: "V"
    },
    {
        title: "Time versus Minimum Voltage Supply",
        subTitle: "Value Source: In-House Designed Meters",
        yAxisTitle: "Minimum Voltage (V)",
        lineSeriesName: "Voltage",
        caption: "",
        requestUrl: host + "getMinimumVoltage",
        unit: "V"
    },
    {
        title: "Time versus Average Current Consumption",
        subTitle: "Value Source: In-House Designed Meters",
        yAxisTitle: "Average Current (Amp)",
        lineSeriesName: "Current",
        caption: "",
        requestUrl: host + "getAverageCurrent",
        unit: "amp"
    },
    {
        title: "Time versus Maximum Current Consumption",
        subTitle: "Value Source: In-House Designed Meters",
        yAxisTitle: "Maximum Current (Amp)",
        lineSeriesName: "Current",
        caption: "",
        requestUrl: host + "getMaximumCurrent",
        unit: "amp"
    },
    {
        title: "Time versus Minimum Current Consumption",
        subTitle: "Value Source: In-House Designed Meters",
        yAxisTitle: "Minimum Current (Amp)",
        lineSeriesName: "Current",
        caption: "",
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