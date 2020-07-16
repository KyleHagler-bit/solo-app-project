import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import './NotesPage.css';

//Page where user can add notes to their entry if they wish
class NotesPage extends Component {
  state = {
    emotionValue:this.props.currentItem.emotionValue,
    iconsArray:this.props.currentItem.iconsArray,
    note: '',
    userID: this.props.user.id,
  }

  //handle changes
  handleChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
  };

  submitInfo = (event) => {
    this.props.history.push('/home') //push user to the home page once submission completes
    this.postHandler(this.state)
   
  }

  //Handle case where user does not want to write any notes
  skipNotes = (event) => {
    this.setState({ note: 'No entry written for today' })
    this.postHandler(this.state)
    this.props.history.push('/home')
     
  }

  postHandler = (entry) =>{
    this.props.dispatch({type:'ADD_ENTRY', payload:entry})
  }

  render() {
    
    return (
      <div className="page" style={{display:'flex', border:'none', height:'92%', top:'38px'}}>
      <div className='col-sm' style={{backgroundColor:this.props.color.outlineColor, float:'left', maxWidth:'5%' }}></div> {/*Sidebar */}
        <div style={{width:'90%'}}>
        <br/><br/><br/>
        <h2> Have any notes you would like to log today?</h2> <br/>
        <textarea rows ='10' cols='100' placeholder='Write here' onChange={(event) => this.handleChange(event, "note")}></textarea>
        <br /> <br/>
        <button id='backToIcons' className='btn btn-info' onClick={() => this.props.history.push("/icons")}>Back</button>
        {/*The next page becomes clickable and the skip button disabled if the user decides to write something in the textarea */}
        {this.state.note === ''  ? <button id='nextToHome' className='btn btn-info' disabled>Next Page</button> : <button id='nextToHome' className='btn btn-info' onClick={() => this.submitInfo()}>Next Page</button>}
        {this.state.note !== ''  ? <button id='skipHome' className='btn btn-info' disabled>No Notes! Skip</button> : <button id='skipHome' className='btn btn-info' onClick={() => this.skipNotes()}>No Notes! Skip</button>}

      </div>
      <div className='col-sm' style={{backgroundColor:this.props.color.outlineColor, float:'right', maxWidth:'5%' }}></div> {/*Sidebar */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry:state.entry,
  currentItem:state.currentItem,
  user:state.user,
  color:state.color
});

export default withRouter(connect(mapStateToProps)(NotesPage));