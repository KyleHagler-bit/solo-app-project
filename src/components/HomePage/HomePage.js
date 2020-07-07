import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import EntryListItem from '../EntryListItem/EntryListItem';

import './HomePage.css';

class HomePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_LAST_ENTRY' })
    
  }
  render() {
    return (
      <div className="page" style={{textAlign:'center', border:'1px solid black', display:'block'}}>
       <h3>Today's entry  conditonally rendered</h3>
       {this.props.lastEntry.map((item, index) => {
          let date=new Date (item.date_logged);
          date=date.toDateString();
            return (
              <div id='homeEntry'>
              <EntryListItem 
              emotion_value={item.emotion_value}
              note={item.note}
              date_logged={date}
              icons={item.iconsArray}
              />
              </div>
            );
          })}
          <br/>
       <h4>Line graph</h4>
       <h5>Pie Graph</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lastEntry: state.lastEntry
});

export default withRouter(connect(mapStateToProps)(HomePage));