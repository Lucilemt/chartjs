import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {



  return (
    <React.Fragment>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-5 mb-3 mt-3'>
            <Pie  
            width={200}
            height={100}
            data={{
              labels: ['Levis', 'Gap', 'Diesel'],
              datasets: [
                {
                  label: 'nombre de jeans achetés',
                  data: [1, 3, 1],
                  backgroundColor: [
                    'rgba(68,220,195, 0.2)',
                    'rgba(55,64,100, 0.2)',
                    'rgba(158,198,190, 0.2)',
                  ],
                  borderColor: [
                    'rgba(68,220,195, 1)',
                    'rgba(55,64,100, 1)',
                    'rgba(158,198,190, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            }}

            options={{
              responsive: true,
              plugins:{
                title:{
                  text:'Marques de jeans les plus vendus',
                  display:true,
                }
              }
            }}        
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PieChart;