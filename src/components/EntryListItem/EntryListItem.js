import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EntryListItem.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactTooltip from 'react-tooltip';
import { withRouter } from "react-router";

import IconForEntry from '../IconForEntry/IconForEntry';
import axios from 'axios';

//Will I need to pass anything up? Need to have some sort of toggle
//so that I can show what icons are chosen
//And need to update state or whatever with values(ids) chosen
class EntryListItem extends Component {

  state = {
    id:0, //should be entry_id
    iconsArray: [],
    emotionValue:0,
    note:'',

  }

  //this only gets one id... which means all past entries look identical which is WRONG
  componentDidMount() {

    console.log('in comp did mount', this.props.id)
    //   this.props.dispatch({ type: 'FETCH_CHOSEN_ICONS', payload: this.props.id })

    // this.setState({ id:this.props.id, emotionValue:this.props.emotion_value}, () => this.props.dispatch({
    //   type: 'CURRENT_ITEM', payload: [{
    //     id:this.props.id, emotionValue:this.props.emotion_value

    //   }]
    //   }))

      
//move this t the appropriate reducer thing?
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

  editEntry = (itemID) => {
    this.props.history.push('/edit');
    this.props.dispatch({type: 'FETCH_EDIT', payload: itemID})

    this.props.dispatch({
      //Here, we grab the movie we are currently clicked on
      type: 'CURRENT_ITEM', payload: 
        {
          id: itemID,
          emotionValue: this.props.emotion_value,
          note: this.props.note
        }
    })
    
  }


  deleteEntry = (itemID) => {
    this.props.dispatch({
      type: "DELETE_ENTRY",
      payload: itemID
    })
    //window.location.reload(); //if don't have this, home page may not update correctly
  }

  // getIconValues=(id) => {
  //   this.props.dispatch({type:'FETCH_CHOSEN_ICONS', payload:id})
  //   return(

  //   )
  // }

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
    const { text } = this.state;
    
    let noteEntry=''
    if (note ==='' || note===undefined || note===null){
      noteEntry = 'No entry written for today'
    } else {
      noteEntry = note;
    }
    //TURN THIS INTO COMPONENT?
    if (!this.props.entry) {
      return (
        <h3>Oops! Nothing to display. Why not make an entry?</h3>
      )
    } else {

      return (
        <div className='page' id='entrylist' style={{ border: '1px solid black', textAlign: 'center' }}>
          <div className='card'>

            <div id='head' className='card-header' >
              <a data-tip data-for='edit' onClick={() => this.editEntry(id)}>

                <i className='fa fa-pencil' aria-hidden='true' style={{ float: 'left' }}></i>
              </a>
              <ReactTooltip id='edit'><span>Edit Entry?</span></ReactTooltip>
              <a data-tip data-for='delete' onClick={() => this.deleteEntry(id)}>
                <i className='fa fa-trash' aria-hidden='true' style={{ float: 'right' }}></i>
              </a> <ReactTooltip id='delete'><span>Delete Entry?</span></ReactTooltip>
              <h5 className='card-title' style={{ border: '1px solid black', width: '60%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>{date_logged}</h5>

            </div> <br />
            <div className='card-body'>
              
              <i style={{fontSize:'70px'}} className={this.emoji(emotion_value)}></i> <br/> <br/>
            
              {noteEntry}<br /> <br />

              {/* {this.props.chosenIcons.map((item, index) => {
              // console.log('inside entry list item', item);
              return (
                <div>
                {/* {item.activity_id} */}
              {/* <IconForEntry id ={id} activity={item.activity_id}/> */} {/*
                {item.entry_id} <br/>
                {item.activity_id}
                </div>
              );})} */}

              {this.state.iconsArray.map((item, index) => {
                console.log('this is icons array item.id',item.id)

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
                // return(
                //   <div>
                // {item.activity_id}
                // </div>
                // )
              })}

            </div>

          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  entry: state.entry,
  // chosenIcons: state.chosenIcons,
  icons: state.icons
});

export default withRouter(connect(mapStateToProps)(EntryListItem));