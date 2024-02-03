import React, { useState } from "react";

const StressForm = () => {

    const [age, setAge] = useState<number>(0);
    const [dailySteps, setDailySteps] = useState<number>(0);

    const [sleepDuration, setSleepDuration] = useState<number>(0);
    const [sleepQuality, setSleepQuality] = useState<number>(0);

    const [activityLevel, setActivityLevel] = useState<number>(0);
    const [heartRate, setHeartRate] = useState<number>(0);

    const [bpHigh, setBpHigh] = useState<number>(0);
    const [bpLow, setBpLow] = useState<number>(0);

    const onAgeSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(e.target.value))
    }

    const onDailyStepsSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDailySteps(parseInt(e.target.value))
    }

    const onSleepDurationSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSleepDuration(parseInt(e.target.value))
    }

    const onSleepQualitySliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSleepQuality(parseInt(e.target.value))
    }

    const onActivityLevelSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActivityLevel(parseInt(e.target.value))
    }

    const onHeartRateSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeartRate(parseInt(e.target.value))
    }

    const onBpHighSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBpHigh(parseInt(e.target.value))
    }

    const onBpLowSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBpLow(parseInt(e.target.value))
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <div style={{ width: "55%" }}>
                <h2 style={{ color: "white" }}>Set Features</h2>

                <section style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>Age: {age}</p>
                        <input
                            style={{ width: '100%' }}
                            type="range"
                            min="18" max="65"
                            value={age}
                            onChange={onAgeSliderChange}
                            step="1"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: '#58777D', margin: 0 }}>18</p>
                            <p style={{ color: '#58777D', margin: 0 }}>65</p>
                        </div>
                    </div>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>Daily Steps: {dailySteps}</p>
                        <input
                            style={{ width: '100%' }}
                            type="range"
                            min="0" max="10000"
                            value={dailySteps}
                            onChange={onDailyStepsSliderChange}
                            step="1"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: '#58777D', margin: 0 }}>0</p>
                            <p style={{ color: '#58777D', margin: 0 }}>10000</p>
                        </div>
                    </div>
                </section>

                <section style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>{`Sleep Duration(hours) : ${sleepDuration}`}</p>
                        <input
                            style={{ width: '100%' }}
                            type="range"
                            min="0" max="24"
                            value={sleepDuration}
                            onChange={onSleepDurationSliderChange}
                            step="1"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: '#58777D', margin: 0 }}>0</p>
                            <p style={{ color: '#58777D', margin: 0 }}>24</p>
                        </div>
                    </div>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>{`Sleep Quality(1-10): ${sleepQuality}`}</p>
                        <input
                            style={{ width: '100%' }}
                            type="range"
                            min="1" max="10"
                            value={sleepQuality}
                            onChange={onSleepQualitySliderChange}
                            step="1"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: '#58777D', margin: 0 }}>1</p>
                            <p style={{ color: '#58777D', margin: 0 }}>10</p>
                        </div>
                    </div>
                </section>

                <section style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>{`Physical Activity Level(%) : ${activityLevel}`}</p>
                        <input
                            style={{ width: '100%' }}
                            type="range"
                            min="0" max="100"
                            value={activityLevel}
                            onChange={onActivityLevelSliderChange}
                            step="1"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: '#58777D', margin: 0 }}>0</p>
                            <p style={{ color: '#58777D', margin: 0 }}>100</p>
                        </div>
                    </div>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>{`Heart Rate: ${heartRate}`}</p>
                        <input
                            style={{ width: '100%' }}
                            type="range"
                            min="60" max="120"
                            value={heartRate}
                            onChange={onHeartRateSliderChange}
                            step="1"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: '#58777D', margin: 0 }}>60</p>
                            <p style={{ color: '#58777D', margin: 0 }}>120</p>
                        </div>
                    </div>
                </section>

                <section style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>{`High Blood Pressure: ${bpHigh}`}</p>
                        <input
                            style={{ width: '100%' }}
                            type="range"
                            min="90" max="180"
                            value={bpHigh}
                            onChange={onBpHighSliderChange}
                            step="1"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: '#58777D', margin: 0 }}>90</p>
                            <p style={{ color: '#58777D', margin: 0 }}>180</p>
                        </div>
                    </div>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>{`Low Blood Pressure: ${bpLow}`}</p>
                        <input
                            style={{ width: '100%' }}
                            type="range"
                            min="50" max="120"
                            value={bpLow}
                            onChange={onBpLowSliderChange}
                            step="1"
                        />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ color: '#58777D', margin: 0 }}>50</p>
                            <p style={{ color: '#58777D', margin: 0 }}>120</p>
                        </div>
                    </div>
                </section>

            </div>
            <div style={{ width: "40%" }}>
                <h2 style={{ color: "white" }}>Predictions</h2>
                <p style={{ color: "#58777D" }}>These predictions are based on the parameters selected on the left</p>
            </div>
        </div>
    );
}

export default StressForm;