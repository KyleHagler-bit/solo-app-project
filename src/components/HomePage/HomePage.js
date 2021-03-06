import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

//Bring in some components
import EntryListItem from '../EntryListItem/EntryListItem';
import PieChart from '../PieChart/PieChart';
import LineChart from '../LineChart/LineChart';

import './HomePage.css';

//This is the user's home page that displays their latest entry, and their graphs
class HomePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ENTRY' })
    this.props.dispatch({ type: 'FETCH_LAST_ENTRY' }) //I need this one or wont appear on home
    this.props.dispatch({ type: 'FETCH_PIE' }) //NEED THIS
    this.props.dispatch({ type: 'FETCH_LINE' }) //NEED THIS
  }

  render() {

    return (
      <>
        <div className="page" style={{ textAlign: 'center', border: 'none', display: 'flex', top: '38px', minHeight: '100%' }}>
          <div className='col-sm' style={{ backgroundColor: this.props.color.outlineColor, float: 'left', maxWidth: '5%' }}></div>
          <div style={{ display: 'inline-block', width: '90%', marginBottom: '5%' }}>
            {this.props.lastEntry.map((item, index) => {
              let date = new Date(item.date_logged);
              date = date.toDateString(); //This will get the date to display in a nicer way

              return (
                <div id='homeEntry' style={{ border: '1px solid white' }}>

                  <h4 style={{ textAlign: 'left', marginLeft: '13%', marginTop: '3%' }}>Latest Entry:</h4>
                  <EntryListItem //pass necessary information down into the 'individual' component
                    id={item.id}
                    emotion_value={item.emotion_value}
                    iconsArray={item.chosen_icons}
                    note={item.note}
                    date_logged={date}
                    key={`entrylistitem-${item.id}`} /> {/*Key helps make sure each entry is indeed unique */}
                </div>
              );
            })}
            <br />

            {/*This is where our pie chart lives */}
            <div className='card' id='pieChart' style={{ width: '50%', margin: 'auto', textAlign: 'center', border: 'none' }}>
              <PieChart />
            </div><br /><br /><br /><br />
            {/*This is where our line chart lives */}
            <div className='card' id='lineChart' style={{ width: '90%', margin: 'auto', border: 'none' }}>
              <LineChart />
            </div>

          </div>
          <div className='col-sm' style={{ backgroundColor: this.props.color.outlineColor, float: 'right', maxWidth: '5%' }}></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  lastEntry: state.lastEntry, //Needed to map over
  color: state.color
});

export default withRouter(connect(mapStateToProps)(HomePage));