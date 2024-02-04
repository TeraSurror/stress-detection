import React from "react"
import { Chart } from "react-google-charts";

import sleepDurationData from '../data/sleep_duration.json';


const Visualization: React.FC = () => {

    const sleepDurationObj = {}
    const sleepDurationList: string[][] = []

    Object.keys(sleepDurationData).forEach((item) => {
        let idx = sleepDurationData[item]
        if (sleepDurationObj[idx]) {
            sleepDurationObj[idx] += 1
        } else {
            sleepDurationObj[idx] = 1
        }
    })

    Object.keys(sleepDurationObj).sort().forEach(key => {
        let val = sleepDurationObj[key]
        sleepDurationList.push([key, val])
    })

    sleepDurationList.unshift(["Hours", "Count"])

    const options = {
        title: "Sleep Duration",
        curveType: "function",
    }

    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={sleepDurationList}
            options={options}
        />
    );
}

export default Visualization;