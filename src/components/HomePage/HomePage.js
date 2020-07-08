import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import EntryListItem from '../EntryListItem/EntryListItem';
import axios from 'axios';
import './HomePage.css';

class HomePage extends Component {

  state = {
    iconsArray: []
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_LAST_ENTRY' })



    this.props.dispatch({ type: 'FETCH_ICONS' })

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
      <div className="page" style={{ textAlign: 'center', border: '1px solid black', display: 'block' }}>
        <h3>Today's entry  conditonally rendered</h3>
        {this.props.lastEntry.map((item, index) => {
          let date = new Date(item.date_logged);
          date = date.toDateString();
          return (
            <div id='homeEntry'>
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
        <h4>Line graph</h4>
        <h5>Pie Graph</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lastEntry: state.lastEntry,
  icons: state.icons
});

export default withRouter(connect(mapStateToProps)(HomePage));