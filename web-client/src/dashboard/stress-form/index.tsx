import React, { useState } from "react";

import apiURL from "../../config";

const generateRandomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

type PredictionResponse = {
    Score: string;
    message: string;
}

const StressForm = () => {

    const [age, setAge] = useState<number>(generateRandomInteger(18, 65));
    const [dailySteps, setDailySteps] = useState<number>(generateRandomInteger(0, 10000));

    const [sleepDuration, setSleepDuration] = useState<number>(generateRandomInteger(0, 24));
    const [sleepQuality, setSleepQuality] = useState<number>(generateRandomInteger(1, 10));

    const [activityLevel, setActivityLevel] = useState<number>(generateRandomInteger(0, 100));
    const [heartRate, setHeartRate] = useState<number>(generateRandomInteger(60, 120));

    const [bpHigh, setBpHigh] = useState<number>(generateRandomInteger(90, 180));
    const [bpLow, setBpLow] = useState<number>(generateRandomInteger(50, 120));

    const [loading, setLoading] = useState<boolean>(false);
    const [textLoading, setTextLoading] = useState<boolean>(false);
    const [stressLevel, setStessLevel] = useState<number>(0.0);
    const [insight, setInsight] = useState<string>('Click on the button to recieve insights.');

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

    const getModelPrediction = async () => {
        setLoading(true);
        const url = "http://localhost:5000/model"
        const data = {
            age: age,
            sleep_duration: sleepDuration,
            quality_of_sleep: sleepQuality,
            physical_activity_level: activityLevel,
            heart_rate: heartRate,
            daily_steps: dailySteps,
            bp_high: bpHigh,
            bp_low: bpLow,
        }
        const response = await fetch(url, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const prediction: PredictionResponse = await response.json();
        setStessLevel(parseFloat(parseFloat(prediction.Score).toFixed(2)))
        setLoading(false);
    }

    const getInsightFromLLM = async () => {
        let message = `Age: ${age} Sleep Duration (hours): ${sleepDuration} Quality of Sleep (scale 1-5, 5 being excellent): ${sleepQuality} Physical Activity Level (sedentary, low, moderate, high): ${activityLevel} Average Daily Heart Rate (beats per minute): ${heartRate} Average Daily Steps: ${dailySteps} Systolic Blood Pressure (mmHg): ${bpHigh} Diastolic Blood Pressure (mmHg): ${bpLow} Please consider these metrics in your analysis and suggest actionable health advice that can help in improving overall well-being, focusing on aspects like diet, exercise, sleep hygiene, stress management, and any preventive measures for potential health risks. Respond with no more than 30 words `;
        const data = {
            'input_text': message
        }
        try {
            setTextLoading(true);
            // const response = await fetch(`${apiURL}/api`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data)
            // });
            // const result = await response.json();
            const result = "Based on the information provided, your health is generally good, but you may need to address your sleep habits and consider a healthier diet and regular exercise to maintain optimal weight and cardiovascular health. Your blood pressure and resting heart rate are within normal limits, but excessive sleep and low physical activity may increase your risk of developing certain health issues."
            setInsight(result)
        } catch (error) {
            setInsight("Some error ocurred, please try again");
        } finally {
            setTextLoading(false);
        }
    };

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

                <section style={{ margin: "1.5em 0 1em 0" }}>
                    <button
                        onClick={getModelPrediction}
                        style={{
                            backgroundColor: "#4299E1",
                            color: "white",
                            border: 0,
                            padding: "0.8em 1em",
                            fontSize: "1rem",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Find Stress Level
                    </button>
                </section>

            </div>
            <div style={{ width: "40%" }}>
                <h2 style={{ color: "white" }}>Predictions</h2>
                <p style={{ color: "#58777D" }}>These predictions are based on the parameters selected on the left</p>
                {
                    loading ? (
                        <p style={{ textAlign: 'center', color: 'white' }}>Loading...</p>
                    ) : (
                        <>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{
                                    backgroundColor: "white",
                                    width: 'fit-content',
                                    height: 'fit-content',
                                    padding: '0.5em 2em',
                                    textAlign: 'center',
                                    borderRadius: '8px',
                                    marginRight: '2em'
                                }}>
                                    <p style={{ color: '#4299E1', padding: 0, margin: 0 }}>Stress Level</p>
                                    <p style={{ color: '#414CE0', padding: 0, margin: "0.5em", fontSize: '1.1rem' }}>{`${stressLevel} / 10.0`}</p>
                                </div>
                                <div>
                                    <button
                                        onClick={getInsightFromLLM}
                                        style={{
                                            backgroundColor: "#4299E1",
                                            color: "white",
                                            border: 0,
                                            padding: "0.8em 1em",
                                            fontSize: "1rem",
                                            cursor: "pointer",
                                            fontWeight: "bold",
                                            borderRadius: "8px"
                                        }}
                                    >Generate Insights</button>
                                </div>
                            </div>
                            <div
                                style={{
                                    marginTop: '1em',
                                    backgroundColor: 'white',
                                    color: '#414CE0',
                                    padding: "1em",
                                    margin: '2em 0',
                                    borderRadius: '8px',
                                    maxWidth: '500px'
                                }}
                            >
                                {textLoading ? (
                                    <p style={{ textAlign: 'center' }}>Loading...</p>
                                ) : (<p>{insight}</p>)}
                            </div>
                        </>
                    )
                }
            </div>
        </div >
    );
}

export default StressForm;