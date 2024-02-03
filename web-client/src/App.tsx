import React from 'react';
import Dashboard from './dashboard';
import StressForm from './dashboard/stress-form';
// import ChatBotComponent from './Chatbot/ChatBotComponent';

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }}>
      <Dashboard>
        <StressForm />
      </Dashboard>
      {/* <ChatBotComponent/> */}
    </div >
  );
}

export default App;
