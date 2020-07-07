import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './EntryListItem.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';


class IconForEntry extends Component {
  state={
    iconsArray:[]
  }

  // componentDidMount() {
  //   console.log('in comp did mount', this.props.id)
  //   this.props.dispatch({type:'FETCH_CHOSEN_ICONS', payload:this.props.id})
  //   this.setState({
  //       iconsArray: this.props.chosenIcons
  //   })
  // }
  

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
  chosenIcons: state.chosenIcons
});

export default connect(mapStateToProps)(IconForEntry);