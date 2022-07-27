//import React, { useState } from "react/cjs/react.pro"
import React, { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
//import {UserData} from './Data'

import axios from 'axios'

function App(){
  //ChartJS Test
  const [userData, setUserData] = useState({});

  const chart = () => {
    let dataA = [];
    let dataB = [];
    
    axios
      .get('http://127.0.0.1:5000/graph/getData')
      .then(response => {
        console.log(response)
        for(const dataObj of response.data){
          dataA.push(parseInt(dataObj.year))
          dataB.push(parseInt(dataObj.userGain))
        }
      }).catch(err => {
        console.log(err);
      })
      console.log(dataA, dataB);
    
    setUserData({
      labels: dataA,
      datasets: [
        {
          label: "Users Gained",
          data: dataB,
          backgroundColor: ["rgba(75. 192. 192. 0.6)"],
          borderWidth: 4
        }
      ],
    });
  };
  

  useEffect(() => {
    chart();
  }, []);
  

  return (
    <div className="App">
      <LineChart chartData={userData}/>
    </div>);
}



export default App;