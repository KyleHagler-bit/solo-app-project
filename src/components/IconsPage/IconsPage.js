import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

// import './IconsPage.css';

class IconsPage extends Component {

  render() {
    return (
      <div className="page">
        <button onClick={() => this.props.history.push("/welcome")}>Back</button>
        
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default withRouter(connect(mapStateToProps)(IconsPage));