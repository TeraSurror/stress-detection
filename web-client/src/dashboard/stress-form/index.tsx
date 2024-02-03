import React, { useState } from "react";

const StressForm = () => {
    const [age, setAge] = useState<number>(0);
    const [heartRate, setHeartRate] = useState<number>(0);
    const [gender, setGender] = useState<string>('Male');
    const [weight, setWeight] = useState<string>('Overweight');

    const onAgeSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(e.target.value))
    }

    const onHeartRateSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeartRate(parseInt(e.target.value))
    }

    const onGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value)
    }

    const onWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setWeight(e.target.value)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <div style={{ width: "50%" }}>
                <h2 style={{ color: "white" }}>Set Features</h2>
                <section style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <select
                        value={gender}
                        onChange={onGenderChange}
                        style={{
                            padding: "0.5em",
                            backgroundColor: "#262730",
                            border: "1px solid #262730",
                            color: "white",
                            fontSize: "1.2rem",
                            width: "49%"
                        }}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select
                        value={weight}
                        onChange={onWeightChange}
                        style={{
                            padding: "0.5em",
                            backgroundColor: "#262730",
                            border: "1px solid #262730",
                            color: "white",
                            fontSize: "1.2rem",
                            width: "49%"
                        }}
                    >
                        <option value="Overweight">Overweight</option>
                        <option value="Normal">Normal</option>
                        <option value="Obese">Obese</option>
                    </select>
                </section>

                <section style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>Age: {age}</p>
                        <input
                            width='inherit'
                            type="range"
                            min="18" max="65"
                            value={age}
                            onChange={onAgeSliderChange}
                            step="1"
                        />
                    </div>
                    <div style={{ width: "49%" }}>
                        <p style={{ color: "#58777D" }}>Resting heart rate: {heartRate}</p>
                        <input
                            type="range"
                            min="60" max="120"
                            value={heartRate}
                            onChange={onHeartRateSliderChange}
                            step="1"
                        />
                    </div>
                </section>
            </div>
            <div style={{ width: "45%" }}>
                <h2 style={{ color: "white" }}>Predictions</h2>
                <p style={{ color: "#58777D" }}>These predictions are based on the parameters selected on the left</p>
            </div>
        </div>
    );
}

export default StressForm;