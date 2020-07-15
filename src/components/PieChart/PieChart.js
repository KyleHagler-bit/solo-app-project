import React, { Component } from 'react';
import { connect } from 'react-redux';
//npm install --save react-chartjs-2 chart.js
import { Pie } from 'react-chartjs-2';
import { withRouter } from "react-router";

//This takes care of getting data from the datbase and creating the pie chart
class PieChart extends Component {

  componentDidMount() {
      this.props.dispatch({ type: 'FETCH_PIE' })
  }

  values = () => {
    let activityCount = [];
    this.props.pieChart.map((item, index) => {
      activityCount.push(item.count);
    })
    return activityCount;
}

//randomly generates colors for pie slices
colors = () =>{
  let generatedColors = [];

  for (let i = 0; i < this.props.pieChart.length; i++) {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
  
    generatedColors.push( 
      'rgb(' + r + ', ' + g + ', ' + b + ')'
    ) ;
};

return generatedColors;
}



  render() {
    const chartData = {
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
          hoverBackgroundColor:'black',
          
        }
        //end dataset
      ], //end datset
      
    }

    if (this.props.pieChart.length===0 || this.props.pieChart.length===undefined){ //conditional rendering
      return(
        <div style={{marginTop:'10%'}}>
        <h3>Oops! It looks like you may not have any data to display at the moment...</h3>
       
        <button className = 'btn btn-info' style={{margin:'2%'}} onClick={() => this.props.history.push("/welcome")}>Make an Entry</button>
        </div>
      )
    } else {
    return (
      <div className="chart" style={{ width: "100%", textAlign:'center' }}>
        <Pie
          data={chartData}
          width={7}
          height={3}
          options={{
            maintainAspectRatio: true,
            title:{
              display: true,
              fontSize:24,
              text: 'Activities Breakdown',
              fontColor:'black'
            }
          }} />

        <pre>{JSON.stringify(this.props.pie)}</pre>

      </div>
    );}
  }
}

const mapStateToProps = state => ({
  pieChart:state.pieChart,
});

export default withRouter(connect(mapStateToProps)(PieChart));