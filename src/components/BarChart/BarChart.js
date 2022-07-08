import React, { useEffect, useState } from "react";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

const Daily = () => {
 
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Martin Gabriel','Petit Marie','Robert Luc','Richard Stéphanie'],
      datasets: [
        {
          label: 'Nombre d\'articles consultés',
          data: [4,5,7,2],
          backgroundColor: [
            "rgba(68,220,195)",
            "rgba(55,64,100)",
            "rgba(158,198,190)",
            "rgba(63,0,208)"
          ],

        }
      ]
    });
    setChartOptions({
      responsive: true,
      plugins : {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: 'Nombre d\'articles consultés par client'
        }
      }
    })
  }, [])

  return (
    <React.Fragment>
    <div className="container-fluid">
        <div className="row d-flex justify-content-center">
            <div className=" col-md-5 mb-3 mt-3">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default Daily;