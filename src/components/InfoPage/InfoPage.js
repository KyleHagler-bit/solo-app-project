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
        <p>Lose graph data upon page refresh</p>
        <p>Cannot properly update past entry</p>
  </div>
);

const mapStateToProps = state => ({
  user:state.user
});

export default withRouter(connect(mapStateToProps)(InfoPage));
