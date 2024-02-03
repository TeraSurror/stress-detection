import React from "react";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const Dashboard: React.FC<Props> = ({ children }) => {

    return (
        <div style={{
            minWidth: "70%",
            padding: "2em 0",
        }}>
            <h1 style={{ color: "white" }}>Stress Detection using Sleep Data</h1>
            <p>This app predicts the stress levels of a person, by using the Fitbit sleep data</p>
            {children}
        </div>
    );

}

export default Dashboard;