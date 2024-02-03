import React from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const navLinks = [
    {
        name: "Home"
    },
    {
        name: "Dataset"
    },
    {
        name: "Prediction"
    },
    {
        name: "Time Pass"
    },
]

const Dashboard: React.FC<Props> = ({ children }) => {

    return (
        <div style={{
            minWidth: "70%",
            padding: "2em 0",
        }}>
            <h1 style={{ color: "white" }}>Stress Detection using Sleep Data</h1>
            <p style={{ color: "#58777D" }}>This app predicts the stress levels of a person, by using the Fitbit sleep data</p>

            <div style={{
                backgroundColor: "#262730",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                color: "white",
                margin: "1em 0 2em 0"
            }}>
                {
                    navLinks.map((item) => (
                        <p style={{
                            cursor: "pointer"
                        }}>
                            {item.name}
                        </p>
                    ))
                }
            </div>

            {children}
        </div>
    );

}

export default Dashboard;