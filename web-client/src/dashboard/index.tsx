import React from "react";

type Screen = 'form' | 'chat';

type Props = {
    children: string | JSX.Element | JSX.Element[];
    changeScreen: (screen: Screen) => void;
    activeScreen: Screen;
}

type NavType = {
    name: string,
    fn: (screen: Screen) => void;
    screen: Screen;
}

const Dashboard: React.FC<Props> = ({ children, changeScreen, activeScreen }) => {

    const navLinks: NavType[] = [
        {
            name: "Home",
            fn: changeScreen,
            screen: "form"
        },
        {
            name: "Chat",
            fn: changeScreen,
            screen: "chat"
        },
    ]

    return (
        <div style={{
            minWidth: "70%",
            padding: "2em 0",
        }}>
            <h1 style={{ color: "white" }}>NapNinja.ai - Stress Detection using Sleep Data</h1>
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
                        <p
                            key={item.screen}
                            style={{
                                cursor: "pointer",
                                borderBottom: activeScreen === item.screen ? "2px solid white" : "none",
                                paddingBottom: "0.5em",
                                paddingLeft:"1em",
                                paddingRight:"1em"

                            }}
                            onClick={() => item.fn(item.screen)}
                        >
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