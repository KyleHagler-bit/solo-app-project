import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import EntryListItem from '../EntryListItem/EntryListItem';
import PieChart from '../PieChart/PieChart';
import LineChart from '../LineChart/LineChart';
import axios from 'axios';
import './HomePage.css';

class HomePage extends Component {

  state = {
    iconsArray: []
  }

  //NEED TO FIX SO DATA POPULATES PAGE RIGHT AWAY
  //TODO try to keep data even upon refresh
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_LAST_ENTRY' })
    this.props.dispatch({ type: 'FETCH_ICONS' })
    this.props.dispatch({ type: 'FETCH_LINE' })
    this.props.dispatch({ type: 'FETCH_PIE' })

    axios({
      method: 'GET',
      url: `/api/chosen/${this.props.id}`,
    }).then((response) => {
      console.log('Success in getting ');

      this.setState({
        iconsArray: response.data
      })
    }).catch((error) => {
      console.log('Error getting, ', error);
    });
  }


  render() {
    const { icons } = this.props;
    return (
      <div className="page" style={{ textAlign: 'center', border: '1px solid black', display: 'block', height:'825px' }}>
        <div style={{minHeight:'100%',width:'5%', backgroundColor:'red', float:'left'}}></div>
        <div style={{minHeight:'100%',width:'5%', backgroundColor:'red', float:'right'}}></div>
       
        {this.props.lastEntry.map((item, index) => {
          let date = new Date(item.date_logged);
          date = date.toDateString();
          return (
            
            <div id='homeEntry'>
              <br/>
              <EntryListItem
              id={item.id}
                emotion_value={item.emotion_value}
                note={item.note}
                date_logged={date}
                
              />
              
            </div>
          );
        })}
        <br />
        
       
        <div className='card' id='pieChart' style={{width:'40%', margin:'auto', textAlign:'center'}}>
        <PieChart/>
        </div><br/><br/><br/><br/><br/><br/>
        <div className='card' id='lineChart' style={{width:'80%', margin:'auto'}}>
          <LineChart/>
        </div>
        
       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lastEntry: state.lastEntry,
  icons: state.icons
});

export default withRouter(connect(mapStateToProps)(HomePage));