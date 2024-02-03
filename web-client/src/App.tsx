import React from 'react';
import Dashboard from './dashboard';
import StressForm from './dashboard/stress-form';

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#0E1117"
    }}>
      <Dashboard>
        <StressForm />
      </Dashboard>
    </div >
  );
}

export default App;
