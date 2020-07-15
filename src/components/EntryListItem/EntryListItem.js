import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EntryListItem.css';

import swal from "sweetalert";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactTooltip from 'react-tooltip';
import { withRouter } from "react-router";


//This page is what helps create each specific entry item
class EntryListItem extends Component {

  editEntry = (itemID) => {
    this.props.history.push('/edit');
    this.props.dispatch({ type: 'FETCH_EDIT', payload: itemID })

    this.props.dispatch({
      type: 'CURRENT_ITEM', payload:
      {
        id: itemID,
        emotionValue: this.props.emotion_value,
        note: this.props.note,
        date: this.props.date_logged
      }
    })
    this.props.dispatch({ type: 'FETCH_ENTRY' }) //Does this do anything?
  }


  //DELETE entry with selected ID
  deleteEntry = (itemID) => {

    swal({ //Make sure user wants to actually delete the entry
      title: "Are you sure you want to delete?",
      text: `Once an entry is deleted it cannot be recovered. 
              Please click 'ok' to confirm`,
      icon: "warning",
      buttons: true,
      dangerMode: true,

    }).then((response) => {
      if (response) { //if the user clicked okay, go through with deleting the item

        this.props.dispatch({ type: "DELETE_ENTRY", payload: itemID });
        this.props.dispatch({ type: 'FETCH_ENTRY' });
        this.props.dispatch({ type: 'FETCH_LAST_ENTRY' });

        swal("Entry deleted", {
          icon: "success",
        }); //end swal

      } else {
        swal("Entry has not been deleted");
        return;
      } //end else
    });

  }

  //This will display the specific emoticon associated with the entry
  emoji = (emoticonID) => {
    switch (emoticonID) {
      case 1:
        return 'fas fa-tired';
      case 2:
        return 'fas fa-sad-tear';
      case 3:
        return 'fas fa-frown-open';
      case 4:
        return 'fas fa-meh';
      case 5:
        return 'fas fa-smile';
      case 6:
        return 'fas fa-grin';
      case 7:
        return 'fas fa-grin-stars'
    }
  }


  render() {
    const { id, emotion_value, note, date_logged, icons } = this.props;

    let noteEntry = ''; //conditional rendering to see if note field is left empty
    if (note === '' || note === undefined || note === null) {
      noteEntry = 'No entry written for today'
    } else {
      noteEntry = note;
    }

    return (

      <div id='entrylist' style={{ textAlign: 'center' }}>

        <div className='card' style={{minHeight:'450px'}}>

          <div id='head' className='card-header' >
            <a data-tip data-for='edit' onClick={() => this.editEntry(id)}>
              <i className='fa fa-pencil' aria-hidden='true' style={{ float: 'left' }}></i>
            </a> <ReactTooltip id='edit'><span>Edit Entry?</span></ReactTooltip>

            <a data-tip data-for='delete' onClick={() => this.deleteEntry(id)}>
              <i className='fa fa-trash' aria-hidden='true' style={{ float: 'right' }}></i>
            </a> <ReactTooltip id='delete'><span>Delete Entry?</span></ReactTooltip>

            <h5 className='card-title' style={{ width: '60%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}><i>{date_logged}</i></h5>

          </div> <br />
          <div className='card-body'>

            <i style={{ fontSize: '500%' }} className={this.emoji(emotion_value)}></i> <br /> <br />

            {noteEntry}<br /> <br /> {/*The note section of the entry */}

            {/*The will map over and display the chosen icons for the specific entry */}
            {this.props.iconsArray.map((item, index) => {

              for (let i = 0; i < icons.length; i++) {
                if (icons[i].id === item.activity_id) {

                  return (
                    <div key={index} style={{ display: 'inline-block', margin: '5%', fontSize: '90%' }}>
                      <i className={icons[i].activity_icon} id='entryIcon'></i>
                      <p>{icons[i].activity_name}</p>
                    </div>
                  )
                }
              }

            })}

          </div>

        </div>

      </div>
    );
  }

}

const mapStateToProps = state => ({
  icons: state.icons,
  entry: state.entry
});

export default withRouter(connect(mapStateToProps)(EntryListItem));