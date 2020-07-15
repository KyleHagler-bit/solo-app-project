import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import ListOfIcons from '../ListOfIcons/ListOfIcons';
import './IconsPage.css';

//This is the page where the user clicks on what they were up to that day
class IconsPage extends Component {

  render() {
    return (
      <div className="page" style={{display:'flex', border:'none', height:'92%', top:'38px'}}>
      <div className='col-sm' style={{backgroundColor:this.props.color.outlineColor, float:'left', maxWidth:'5%' }}></div>
        <div style={{width:'90%'}}>
        <br /> <br />
        <h2> What have you been up to today?</h2>
        <h4>(Please choose all that apply)</h4>
        <ListOfIcons getValue={this.getValue} toggleSelected={this.toggleSelected} />
        <button id='backToWelcome' className='btn btn-info' onClick={() => this.props.history.push("/welcome")}>Back</button>
        {/*Button will be clickable when it detects an icon has been selected */}
        {this.props.currentItem.iconsArray.length === 0 ?
          <button id='nextIcon' className='btn btn-info' disabled>Next Page</button> :
          <button id='nextIcon' className='btn btn-info' onClick={() => this.props.history.push("/notes")}>Next Page</button>}
          </div>
          <div className='col-sm' style={{backgroundColor:this.props.color.outlineColor, float:'right', maxWidth:'5%' }}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentItem: state.currentItem,
  color:state.color

});

export default withRouter(connect(mapStateToProps)(IconsPage));