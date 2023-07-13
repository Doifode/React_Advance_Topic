import React from 'react';
import logo from './logo.svg';
import './App.css';
import Props from './Components/Props';
import Increment from './Components/Increment';
import {HandleEvent} from './Components/HandleEvent';

function App() {
  return (
    <div className="App">
      {/* <Props /> */}
      <HandleEvent />
    </div>
  );
}

export default App;
