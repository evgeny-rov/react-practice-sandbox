import React from 'react';
import './App.css';
import Theater from './components/Theater';
import Theater2 from './components/Theater2';
import StateTest from './components/stateTest';

function App() {
  return (
    <div className="App">
      <div className="seats-wrapper">
        <StateTest />
      </div>
    </div>
  );
}

export default App;
