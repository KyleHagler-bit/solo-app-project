import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import './HomePage.css';

class HomePage extends Component {

  render() {
    return (
      <div className="page">
       <h3>Today's entry  conditonally rendered</h3>
       <h4>Line graph</h4>
       <h5>Pie Graph</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps)(HomePage));