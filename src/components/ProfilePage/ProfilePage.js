import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


import axios from 'axios';
// import './HomePage.css';

class ProfilePage extends Component {

 


  render() {
    const { icons, user } = this.props;
    return (
      <div className="page" style={{ textAlign: 'center', border: '1px solid black', display: 'block' }}>
       <h2>Add a profile pic?</h2>
       <h3>Hello {user.first_name}!</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  lastEntry: state.lastEntry,
  icons: state.icons
});

export default withRouter(connect(mapStateToProps)(ProfilePage));