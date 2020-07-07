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
    
  </div>
);

const mapStateToProps = state => ({
  user:state.user
});

export default withRouter(connect(mapStateToProps)(InfoPage));
