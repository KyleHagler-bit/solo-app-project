import React, { Component } from 'react';
import { connect } from 'react-redux';
//npm install --save react-chartjs-2 chart.js
import { Bar, Line } from 'react-chartjs-2';
import moment from 'moment';

class LineChart extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_LINE' })
  }

  
  values = () => {
    let emotionValues = [];
    this.props.lineChart.map((item, index) => {
      emotionValues.push(item.emotion_value);
    })
    return emotionValues; 
  }



  render() {
   const chartData =  {
      labels: this.props.lineChart.map((item, index) => {
        let x = new Date(item.date_logged)
        return (
          x.toDateString()
        )
      }), 
      datasets: [
        {
          data: this.values(), //dont have an array in an array
          backgroundColor: '#7FFFD4'
        }],

    }
    
    if (this.props.lineChart.length<5){
      return(
        <div>
        <h3>Sorry! More data is needed before we display your mood graph</h3>
        <h4>Check back after 5 entries have been logged :)</h4>
        </div>
      )
    } else {
    return (
      <div className="chart" style={{ width: "100%", height:'100%' }}>
        <Line
          data={chartData}
          width={10}
          height={3}
          options={{
            responsive: true,
            legend:{
              display:false //allows legend to be hidden i.e. no box under graph title
            },
            title: {
              display: true,
              fontColor: 'blue',
              fontSize: 24,
              text: 'Mood Over Time'
            },
            scales: {
              xAxes: [{

                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Date',
                  fontColor: 'red',
                  fontSize: 24
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0, max: 8,
                  fontColor: 'black',
                  callback: function (label, index, labels) {
                    switch (label) { //Allows us to change the yaxis labels
                      case 1:
                        return 'Horrible';
                      case 2:
                        return 'Bad';
                      case 3:
                        return 'Poor';
                      case 4:
                        return 'Neutral';
                      case 5:
                        return 'Okay';
                      case 6:
                        return 'Good';
                      case 7:
                        return 'Great!';
                    }
                  }
                },
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Mood',
                  fontColor: 'red',
                  fontSize: 24

                }
              }]
            }


          }} />

      </div>
    )}
  }
}

const mapStateToProps = state => ({
  lineChart: state.lineChart,
});

export default connect(mapStateToProps)(LineChart);