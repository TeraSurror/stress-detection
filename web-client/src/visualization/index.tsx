import React from "react"
import { Chart } from "react-google-charts";

import sleepDurationData from '../data/sleep_duration.json';
import dailyStepsData from '../data/daily_steps.json';
import bpHigh from '../data/bp_high.json';
import bpLow from '../data/bp_low.json';

const Visualization: React.FC = () => {

    const getDistribution = (data: any, title: string) => {
        const dataObj = {}
        const dataList: string[][] = []

        Object.keys(data).forEach((item) => {
            let idx = data[item]
            if (dataObj[idx]) {
                dataObj[idx] += 1
            } else {
                dataObj[idx] = 1
            }
        })

        Object.keys(dataObj).sort().forEach(key => {
            let val = dataObj[key]
            dataList.push([key, val])
        })

        dataList.unshift([title, "Count"])

        const options = {
            title,
            curveType: "function",
        }

        return { dataList, options }
    }

    const sleepDurationList = getDistribution(sleepDurationData, "Duration");
    const dailyStepsList = getDistribution(dailyStepsData, "Daily Steps");
    const bpHighList = getDistribution(bpHigh, "High BP")
    const bpLowList = getDistribution(bpLow, "Low BP")


    return (
        <div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={sleepDurationList.dataList}
                options={sleepDurationList.options}
            />

            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={dailyStepsList.dataList}
                options={dailyStepsList.options}
            />

            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={bpHighList.dataList}
                options={bpHighList.options}
            />

            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={bpLowList.dataList}
                options={bpLowList.options}
            />
        </div>
    );
}

export default Visualization;