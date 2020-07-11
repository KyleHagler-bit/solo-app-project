import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Axios from 'axios';


class SelectedIcon extends Component {
  


  render() {
    let {selected, toggleSelected, id, nameForClass} = this.props;
    let selectedIcons = this.props.currentItem.iconsArray;
    return (
      <div className="page" >
       
           {console.log('selected is', selected)}
          <a type="button" id="activity" class="btn btn-success" onClick={() =>toggleSelected(id,selected)}><i className={nameForClass}></i></a>
          <h5>{nameForClass}</h5>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry:state.entry,
  currentItem:state.currentItem,
  user:state.user
});

export default withRouter(connect(mapStateToProps)(SelectedIcon));

