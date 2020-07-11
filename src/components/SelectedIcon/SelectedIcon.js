import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import './SelectedIcon.css';

class SelectedIcon extends Component {
  


  render() {
    let {selected, toggleSelected, id, nameForClass,name} = this.props;
    let selectedIcons = this.props.currentItem.iconsArray;
    return (
      <div className="page" >
       
           {console.log('selected is', selected)}
          <a type="button" id={selected? "activityClicked":"activity"} class="btn btn-success" onClick={() =>toggleSelected(id,selected)}><i className={nameForClass}></i></a>
          <h5>{name}</h5>
        
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

