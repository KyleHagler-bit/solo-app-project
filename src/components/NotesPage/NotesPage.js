import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Axios from 'axios';

// import './NotesPage.css';

class NotesPage extends Component {
  state = {
    emotionValue:this.props.currentItem[0].emotionValue,
    iconsArray:this.props.currentItem.iconsArray,
    note: '',
    userID: this.props.user.id
  }

  //Will probably need for this page to save notes if user goes back?
  handleChange = (event, fieldName) => {

    this.setState({ [fieldName]: event.target.value });
  };

  submitInfo = (event) => {

    // if (this.state.note==='' )
    this.props.history.push('/home')
    this.postHandler(this.state)
  }

  skipNotes = (event) => {

    this.setState({note: 'No notes logged'})
    this.props.history.push('/home')
    this.postHandler(this.state)
  }

  postHandler = (entry) =>{
    Axios.post(`/api/entry`, entry)
    .then(response =>{
      this.props.dispatch({type:'CLEAR', payload: {} });
    })
    .catch(error=>{
      alert(`ERROR`);
    })
    // Axios.post(`/api/entryActivity`, entry)
    // .then(response =>{
    //   this.props.dispatch({type:'CLEAR', payload: {} });
    // })
    // .catch(error=>{
    //   alert(`ERROR`);
    // })
    
  }

  render() {
    return (
      <div className="page">
        <button onClick={() => this.props.history.push("/icons")}>Back</button>
        <h2> Have any notes you would like to log today?</h2> <br/>
        <textarea rows ='10' cols='100' placeholder='Write here' onChange={(event) => this.handleChange(event, "note")}></textarea>
        <br /> <br/>
        {this.state.note === undefined || this.state.note === '' ? <button disabled>Next Page</button> : <button onClick={() => this.submitInfo()}>Next Page</button>}
        

        <button onClick={() => this.skipNotes()}>No Notes! Skip</button>
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