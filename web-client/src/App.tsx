import React, { useState } from 'react';
import Dashboard from './dashboard';
import StressForm from './dashboard/stress-form';
import ChatBotComponent from './Chatbot/ChatBotComponent';
import Visualization from './visualization';

type Screen = 'form' | 'chat' | 'chart';

function App() {

  const [screen, setScreen] = useState<Screen>('form');

  const changeScreen = (newScreen: Screen) => {
    setScreen(newScreen);
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }}>
      <Dashboard changeScreen={changeScreen} activeScreen={screen}>
        {
          screen === 'form' ? <StressForm /> : <></>
        }
        {
          screen === 'chat' ? <ChatBotComponent /> : <></>
        }
        {
          screen === 'chart' ? <Visualization /> : <></>
        }
      </Dashboard>
    </div >
  );
}

export default App;
