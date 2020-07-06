import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

// import './IconsPage.css';

class HomePage extends Component {

  render() {
    return (
      <div className="page">
        
        
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default withRouter(connect(mapStateToProps)(HomePage));