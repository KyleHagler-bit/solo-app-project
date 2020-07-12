import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Axios from 'axios';

import './NotesPage.css';

class NotesPage extends Component {
  state = {
    emotionValue:this.props.currentItem.emotionValue,
    iconsArray:this.props.currentItem.iconsArray,
    note: '',
    userID: this.props.user.id,
    // date_logged: 
  }

  //Will probably need for this page to save notes if user goes back?
  handleChange = (event, fieldName) => {

    this.setState({ [fieldName]: event.target.value });
  };

  submitInfo = (event) => {

    // if (this.state.note==='' )
    this.props.history.push('/home')
    this.postHandler(this.state)
    this.props.dispatch({ type: 'FETCH_LINE' })
    this.props.dispatch({ type: 'FETCH_PIE' })
    window.location.reload();
  }

  skipNotes = (event) => {

    // this.setState({note: 'No notes logged'})
    this.props.history.push('/home')
    this.setState({ note: 'No entry written for today' });
    this.postHandler(this.state)
    
  }

  postHandler = (entry) =>{
    // Axios.post(`/api/entry`, entry)
    // .then(response =>{
    //   this.props.dispatch({type:'CLEAR', payload: {} });
    // })
    // .catch(error=>{
    //   alert(`ERROR`); 
    // })
    // Axios.post(`/api/entryActivity`, entry)
    // .then(response =>{
    //   this.props.dispatch({type:'CLEAR', payload: {} });
    // })
    // .catch(error=>{
    //   alert(`ERROR`);
    // })

    this.props.dispatch({type:'ADD_ENTRY', payload:entry})
    
  }

  render() {
    console.log('inside note', this.state.note)
    return (
      <div className="page" style={{height:'100%', display:'block'}}>
        
        
        <h2> Have any notes you would like to log today?</h2> <br/>
        <textarea rows ='10' cols='100' placeholder='Write here' onChange={(event) => this.handleChange(event, "note")}></textarea>
        <br /> <br/>
        <button id='backToIcons' onClick={() => this.props.history.push("/icons")}>Back</button>
        {this.state.note === ''  ? <button id='nextToHome' disabled>Next Page</button> : <button onClick={() => this.submitInfo()}>Next Page</button>}
        {this.state.note !== ''  ? <button id='skipHome' disabled>No Notes! Skip</button> : <button id='skipHome' onClick={() => this.skipNotes()}>No Notes! Skip</button>}

        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry:state.entry,
  currentItem:state.currentItem,
  user:state.user
});

export default withRouter(connect(mapStateToProps)(NotesPage));