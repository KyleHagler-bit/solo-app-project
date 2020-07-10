import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './EntryListItem.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';


class IconForEntry extends Component {
  state={
    iconsArray:[]
  }

  
  

  render() {
    const {id, activity} = this.props;
    return (
      <div className='page' id='' style={{border:'1px solid black'}}>
       {this.state.iconsArray}
       {activity}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry:state.entry,
  
});

export default connect(mapStateToProps)(IconForEntry);