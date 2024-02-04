import React, { useState } from 'react';
import Dashboard from './dashboard';
import StressForm from './dashboard/stress-form';
import ChatBotComponent from './Chatbot/ChatBotComponent';

type Screen = 'form' | 'chat';

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
      </Dashboard>
    </div >
  );
}

export default App;
