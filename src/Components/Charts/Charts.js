import React from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';

const Charts = (props) => {

    // AGE LOGIC
    let ages = [];
    let ageValues = [];
    Object.entries(props.age).forEach(entry => {
      ages.push(entry[0]);
      ageValues.push(entry[1]);
    });

    // REGISTERATION LOGIC
    let regYears = [];
    let regPersons = [];
    Object.entries(props.registeration).forEach(entry => {
      regYears.push(entry[0]);
      regPersons.push(entry[1]);
    })

    return(
      <>

        <Pie
        data = {{
          labels: ['Male', 'Female'], // upper label (global)
          datasets: [
            {
              label: 'Num of votes', // hover label (for a dataSet)
              data: [props.gender.female, props.gender.male],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
            }
          ],
        }}

        options = {{
          title: {
            display: true,
            text: 'Gender visualiztion of 100 users',
            fontSize: 20,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
        }
        }}
        />

        <Bar
        data={{
            labels: ages,
            datasets: [
              {
                label: "Persons",
                data: ageValues,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              }
            ],
        }}

        options = {{
          title: {
            display: true,
            text: 'Age visualiztion of 100 users',
            fontSize: 20,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
        }
        }}
        />

        <Line
        data={{
          labels: regYears,
          datasets: [
            {
              label: 'Persons',
              data: regPersons,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              fill: true,
            }
          ],
        }}

        options = {{
          title: {
            display: true,
            text: 'Registeration-Date visualiztion of 100 users',
            fontSize: 20,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
        }
        }}
        />

      </>
  )
}

export default Charts;