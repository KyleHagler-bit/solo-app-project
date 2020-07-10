import React, { Component } from "react";
// import "./Edit.css";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from 'axios';

import EntryListItem from '../EntryListItem/EntryListItem';
import EmotionScale from '../EmotionScale/EmotionScale';
import ListOfIcons from '../ListOfIcons/ListOfIcons';

class EditEntryPage extends Component {

  //this only gets one id... which means all past entries look identical which is WRONG
  componentDidMount() {
    console.log('in comp did mount', this.props.id)
    //   this.props.dispatch({ type: 'FETCH_CHOSEN_ICONS', payload: this.props.id })

    // this.props.dispatch({ type: 'FETCH_ICONS' })
    // this.props.dispatch({type:'CURRENT_ITEM'})

    this.props.dispatch({type:'FETCH_ACTIVITY_ENTRY'})
  }


  handleChange = (event, fieldName) => {
    this.props.dispatch({
      type: 'CURRENT_ITEM', payload: {
        note: event.target.value
      }
    });
  };

  //CANNOT GET STATE TO UPDATE WHEN NEW EMOTION ICON IS CLICKED
  submit = () => {
    // console.log('current state of edit.js on submit', this.state)
    this.props.dispatch({ type: "UPDATE_ENTRY", payload: this.props.currentItem })
    this.props.history.push("/pastentry"); //move user to Past Entries Page
  }



  //I tried using conditional to stop refresh error but the state gets upset anyway
  render() {
    const { entry, icons } = this.props;
    // console.log('this is currentItem', this.props.currentItem)
    console.log('this is activtyEntry', this.props.activityEntry)
    return (
      <div>
        <div className='page' id='editBox' style={{ border: '1px solid black', textAlign: 'center', width: '100%' }}>
          <div className='card'>
            <div id='head' className='card-header' >
              {/*FIX THIS SO DATE ACTUALLY IS DISPLAYED */}
              <h5 className='card-title' style={{ border: '1px solid black', width: '60%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>{entry.date_logged}</h5>

            </div> <br />
            <div className='card-body'>
              {/* {entry.emotion_value}  */}
              <h3>How did you feel this day?</h3>
              <EmotionScale /> <br /> <br />
              <h3>What did you do this day?</h3>
              <div style={{}}>
                <ListOfIcons />
              </div>
              <textarea rows='10' cols='100' value={this.props.currentItem.note} onChange={(event) => this.handleChange(event, 'note')}></textarea>
              <br />

              {/* {this.state.iconsArray.map((item, index) => {

                for (let i = 0; i < icons.length; i++) {
                  if (icons[i].id === item.activity_id) {
                    return (
                      <div style={{ display: 'inline-block', margin: '5%' }}>
                        <i className={icons[i].activity_icon} id='entryIcon'></i>
                        <p>{icons[i].activity_name}</p>
                      </div>
                    )
                  }
                }

              })} end iconsArray map */}

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
    entry: state.entry,
    icons: state.icons,
    currentItem: state.currentItem,
    activityEntry: state.activityEntry
  };
};

export default withRouter(connect(mapStateToProps)(EditEntryPage));