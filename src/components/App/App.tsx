import React from 'react';
import './App.css';
import {data} from "../../state/state";

function App() {
  let tempState = JSON.stringify(data)
  console.log(JSON.parse(tempState))
  return (
    <div className="App">
      <h1>Here will be Sultan Shop</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
