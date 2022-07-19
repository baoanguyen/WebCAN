import logo from './logo.svg';
import './App.css';
import { Line } from 'react-chartjs-2'
import { useEffect } from 'react';


function App() {
  //ChartJS
  //const labels = Utils.months({count: 7});
  const labels = ['month1', 'month2']
  const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
  };
  const config = {
    type: 'line',
    data: data,
  };

  // //API
  // useEffect(() => {
  //   fetch('/line').then(res => res.json()).then(data => {
      
  //   })
  // }, [])

  //React Part
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Line data={data} />
      </header>
    </div>
  );
}

export default App;
