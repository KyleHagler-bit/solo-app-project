import React, { Component } from 'react';
import { connect } from 'react-redux';
//npm install --save react-chartjs-2 chart.js
import { Bar, Pie } from 'react-chartjs-2';

class PieChart extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PIE' })
    
  }

  values = () => {
    let activityCount = [];
    this.props.pieChart.map((item, index) => {
      activityCount.push(item.count);
      

      // return (
      //   item.emotion_value
      // )
    })
    console.log(activityCount)
    return activityCount;
}

//LOOK INTO OTHER PROGRAM TO MAKE SURE COLORS ARE TRULY RANDOMIZED
colors = () =>{
  let generatedColors = [];

  for (let i = 0; i < this.props.pieChart.length; i++) {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let c = '';
    let h =''
    // let c = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    //let h = 'rgb(' + (r+20) + ', ' + (g+20) + ', ' + (b+20) + ')';
    generatedColors.push( 
      'rgb(' + r + ', ' + g + ', ' + b + ')'
      // highlight: h
    ) ;
    
};
console.log(generatedColors)
return generatedColors;
}

// highlights = () =>{
  
//   let generatedHighlights=[];
  
//   for (let i = 0; i < this.props.pie.length; i++) {
//     let r = Math.floor(Math.random() * 200);
//     let g = Math.floor(Math.random() * 200);
//     let b = Math.floor(Math.random() * 200);
//     let c = '';
//     let h =''
//     // let c = 'rgb(' + r + ', ' + g + ', ' + b + ')';
//     //let h = 'rgb(' + (r+20) + ', ' + (g+20) + ', ' + (b+20) + ')';
    
//     generatedHighlights.push(
//     'rgb(' + (r+20) + ', ' + (g+20) + ', ' + (b+20) + ')'
//     )
// };

// return generatedHighlights;
// }

  state = {
    chartData: {
      labels: this.props.pieChart.map((item, index) => {
        return (
          item.activity_name
        )
      }), //need to be the date of entries
      datasets: [
        {
          label: 'Activities',
          data: this.values(), //dont have an array in an array
          backgroundColor:this.colors(),
          hoverBackgroundColor:'black'
        }
        //end dataset
      ] //end datset
    }
  } //end chartData


  render() {
    console.log('inside render', this.props.pie)
    return (
      <div className="chart" style={{ width: "100%", textAlign:'center' }}>
        <Pie
          data={this.state.chartData}
          width={7}
          height={3}
          options={{
            maintainAspectRatio: true,
            title:{
              display: true,
              fontSize:24,
              text: 'Activities Breakdown'
            }
          }} />

        <pre>{JSON.stringify(this.props.pie)}</pre>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  pieChart:state.pieChart,
});

export default connect(mapStateToProps)(PieChart);