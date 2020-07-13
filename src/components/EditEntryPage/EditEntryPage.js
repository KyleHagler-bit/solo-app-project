import React, { Component } from "react";
// import "./Edit.css";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from 'axios';

import EmotionScale from '../EmotionScale/EmotionScale';
import ListOfIcons from '../ListOfIcons/ListOfIcons';

class EditEntryPage extends Component {

  
  componentDidMount() {
   //What all do I need to FETCH here?
    this.props.dispatch({type:'FETCH_ACTIVITY_ENTRY'})
  }

  handleChange = (event, fieldName) => {
    this.props.dispatch({
      type: 'CURRENT_ITEM', payload: {
        note: event.target.value
      }
    });
  };

 //Send currentItem data off to update entry (PUT)
  submit = () => {
    this.props.dispatch({ type: "UPDATE_ENTRY", payload: this.props.currentItem })
    this.props.history.push("/pastentry"); //move user to Past Entries Page
  }


  render() {
    const { entry, icons } = this.props;
  
    return (
      <div>
        <div className='page' id='editBox' style={{ border: '1px solid black', textAlign: 'center', width: '100%' }}>
          <div className='card'>
            <div id='head' className='card-header' >
              {/*Displays date for entry on top of page*/}
              <h2 className='card-title' style={{ border: '1px solid black', width: '60%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>{this.props.currentItem.date}</h2>

            </div> <br />
            <div className='card-body'>
              <h3>How did you feel this day?</h3>
              <EmotionScale /> <br /> <br />
              <h3>What did you do this day?</h3>
              <div style={{}}>
                <ListOfIcons />
              </div>
              <textarea rows='10' cols='100' value={this.props.currentItem.note} onChange={(event) => this.handleChange(event, 'note')}></textarea>
              <br />

              <button onClick={() => this.submit()}>Save</button>
              <button onClick={() => this.props.history.push('/pastentry')}>Cancel Edit</button>
              <br /><br />

            </div>

          </div>
        </div>
      </div>

    ); // end return

  } // end render
} // end class HomeListItem

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem,
  };
};

export default withRouter(connect(mapStateToProps)(EditEntryPage));