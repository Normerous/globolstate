import React, { useMemo, useState, useCallback, useContext } from "react";
import './App.css';
import { CounterProvider,  CounterContext } from "./store/CounterProvider";

const App = () => {



  return <CounterProvider>
    <TEST />
  </CounterProvider>
}

export default App;


const TEST = () => {
  const { counter, addCounter, subCounter } = useContext(CounterContext);
  return <div className="App">
    <header className="App-header">
      <p>{counter}</p>
      <hr />
      <button onClick={() => { addCounter(1) }}>เพิ่ม (+)</button>
      <button onClick={() => { subCounter(1) }}>ลด (-)</button>
    </header>
  </div>
}