import React, { Component } from 'react';
import { connect } from 'react-redux';
//npm install --save react-chartjs-2 chart.js
import { Line } from 'react-chartjs-2';

//This gets the data and builds the line graph based on the user
class LineChart extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_LINE' })
  }

  //makes array of emotionValues from database
  values = () => {
    let emotionValues = [];
    this.props.lineChart.map((item, index) => {
      emotionValues.push(item.emotion_value);
    })
    return emotionValues;
  }


  render() {
    const chartData = {
      labels: this.props.lineChart.map((item, index) => {
        let x = new Date(item.date_logged) //want date to be friendlier looking
        return (
          x.toDateString()
        )
      }),
      datasets: [
        {
          data: this.values(), //dont have an array in an array
          backgroundColor: this.props.color.iconColor
        }],
    }

    if (this.props.lineChart.length < 5) { //conditional to see if any data can be displayed
      return (
        <div>
          <h3>Sorry! More data is needed before we display your mood graph</h3>
          <h4>Check back after 5 entries have been logged :)</h4>
        </div>
      )
    } else {
      return (
        <div className="chart" style={{ width: "100%", height: '100%' }}>
          <Line
            data={chartData}
            width={10}
            height={3}
            options={{
              responsive: true,
              legend: {
                display: false //allows legend to be hidden i.e. no box under graph title
              },
              title: {
                display: true,
                fontColor: 'black',
                fontSize: 28,
                text: 'Mood Over Time' //title for graph
              },
              scales: {
                xAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Date of Entry', //x-axis title
                    fontColor: 'black',
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
                        default: //Expects default case or gives warning
                          return 'Error'
                      }
                    }
                  },
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Mood', //y-axis title
                    fontColor: 'black',
                    fontSize: 24

                  }
                }]
              }
            }} />

        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  lineChart: state.lineChart,
  color: state.color
});

export default connect(mapStateToProps)(LineChart);