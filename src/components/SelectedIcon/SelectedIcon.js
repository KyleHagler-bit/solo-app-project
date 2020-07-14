import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import './SelectedIcon.css';

class SelectedIcon extends Component {
  

  render() {
    let {selected, toggleSelected, id, nameForClass,name} = this.props;
    
    return (
      <div>
          <a type="button" style={{backgroundColor:this.props.color.iconColor}} id={selected? "activityClicked":"activity"} class="btn btn-success" onClick={() =>toggleSelected(id,selected)}><i className={nameForClass}></i></a>
          <h5>{name}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
color:state.color
});

export default withRouter(connect(mapStateToProps)(SelectedIcon));

