
import "./App.css";
import "./components/BarChart"

import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

 
function App() {
  
  return (
    <div className="App">
      <LineChart />
      {/* <BarChart /> */}
    </div>
  );
}
 
export default App;
