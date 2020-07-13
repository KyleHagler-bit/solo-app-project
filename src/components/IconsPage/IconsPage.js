import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import ListOfIcons from '../ListOfIcons/ListOfIcons';
import './IconsPage.css';

class IconsPage extends Component {


  render() {
    console.log('what is count?', this.props.currentItem.count)
    return (
      <div className="page" style={{ height: '100%', marginBottom: '2%' }}>
        <br /> <br />
        <h2> What have you been up to today?</h2>
        <h3>Please choose all that apply</h3>
        <ListOfIcons getValue={this.getValue} toggleSelected={this.toggleSelected} />
        <button id='backToWelcome' onClick={() => this.props.history.push("/welcome")}>Back</button>
        {/*Button will be clickable when it detects an icon has been selected */}
        {this.props.currentItem.iconsArray.length === 0 ?
          <button id='nextIcon' disabled>Next Page</button> :
          <button id='nextIcon' onClick={() => this.props.history.push("/notes")}>Next Page</button>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentItem: state.currentItem,

});

export default withRouter(connect(mapStateToProps)(IconsPage));