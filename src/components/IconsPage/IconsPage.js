import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import ListOfIcons from '../ListOfIcons/ListOfIcons';
// import './IconsPage.css';

class IconsPage extends Component {

  render() {
    return (
      <div className="page">
        <button onClick={() => this.props.history.push("/welcome")}>Back</button>
        <h2> What have you been up to today?</h2>
        <h3>Please choose all that apply</h3>
        <ListOfIcons/>
        <button onClick={() => this.props.history.push("/icons")}>Next Page</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default withRouter(connect(mapStateToProps)(IconsPage));