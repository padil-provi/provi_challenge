import React, { useState} from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import './style.css'

const Chart = ({ values, title }) => {
  const [chartData] = useState({
    labels: ['Loan', 'Tax'],
    datasets:
      [{
        data: [3000, 500],
        backgroundColor: ['#d2ff2f', '#89CC25'],
        borderColor: 'transparent',
        defaultFontSize: 40
      }]
  });
  
  defaults.global.animation.duration = 1200;

  return (
    <div className="chart-container">
        <h2>{title}</h2>
    <div className="chart">
      <Doughnut height={200} data={chartData}
        options={{
          responsive: true,
          legend: {
            position: 'top',
            labels: {
              fontSize: 16,
              fontFamily: 'Poppins',
            },
            animation: {
              duration: 10000
            }
          },
          plugins: {
            datalabels: {
              formatter: (value) => {
                return Math.round((value * 100) / 3500) + '%'
              }
            }
          }
        }} />
    </div>
    </div>
  )
}

export default Chart