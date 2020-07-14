import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

// import './IconsPage.css';
const InfoPage = (props) => (
  <div className="page">
      
    <h1 id="welcome">
      Welcome, 
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <p>Your name is: {props.user.first_name}</p>
    {/* <div style={{minHeight:'100%',width:'5%', backgroundColor:'red', float:'left'}}></div>
        <div style={{minHeight:'100%',width:'5%', backgroundColor:'red', float:'right'}}></div> */}
        <h3>LIST OF BUGS</h3>
        <p>1.Home page delte of entry works but does not update correctly</p>
        <p>2. Pages do not seem to be 100% in height (see borders on pages)</p>
        <p>3.'Cannot proxy request' error when deleting. But it still works?</p>
        <p>^-- this is fixed if no window.location.reload() is done on delete function</p>
       
        <p>5.When logging in as different user, graphs show their latest data (INCORRECT USER)</p>
        <p>Is it okay to have seperate FETCH for line and pie when they are coming from entry table?</p>
       
        <p>Why is there not a better way for the computer to tell you the client has crashed?</p>
        <p>So if I am updating something and then doing a fetch, if some things dont do an update with it...</p>
        <p>...do they do a fetch BEFORE things are updated?</p>
        
  </div>
);

const mapStateToProps = state => ({
  user:state.user
});

export default withRouter(connect(mapStateToProps)(InfoPage));
