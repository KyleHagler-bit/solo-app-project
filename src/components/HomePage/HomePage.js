import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import EntryListItem from '../EntryListItem/EntryListItem';
import PieChart from '../PieChart/PieChart';
import LineChart from '../LineChart/LineChart';
import axios from 'axios';
import './HomePage.css';

class HomePage extends Component {



  componentDidMount() {
    // this.props.dispatch({type: 'FETCH_CHOSEN_ICONS'}) //This I guess does NOTHING
    this.props.dispatch({ type: 'FETCH_ENTRY' }) //is this needed?
    this.props.dispatch({ type: 'FETCH_LAST_ENTRY' }) //I need this one or wont appear on home
    this.props.dispatch({ type: 'FETCH_LINE' }) //I do this in lineChart.js
   
  }

  render() {

    return (
      <>
        <div className="page" style={{ textAlign: 'center', border: '1px solid black', display: 'block', margin: 'auto', width: '', height: '100%', marginBottom: '5%' }}>

          {this.props.lastEntry.map((item, index) => {
            let date = new Date(item.date_logged);
            date = date.toDateString(); //This will get the date to display in a nicer way

            return (
              <div id='homeEntry' style={{ border: '1px solid white' }}>
                <br />
                <h4 style={{ textAlign: 'left', marginLeft: '200px' }}>Latest Entry:</h4>
                <EntryListItem
                  id={item.id}
                  emotion_value={item.emotion_value}
                  note={item.note}
                  date_logged={date} />
              </div>
            );
          })}
          <br />

          {/*This is where our pie chart lives */}
          <div className='card' id='pieChart' style={{ width: '50%', margin: 'auto', textAlign: 'center' }}>
            <PieChart />
          </div><br /><br /><br /><br />
          {/*This is where our line chart lives */}
          <div className='card' id='lineChart' style={{ width: '80%', margin: 'auto' }}>
            <LineChart />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  lastEntry: state.lastEntry, //Needed to map over
});

export default withRouter(connect(mapStateToProps)(HomePage));