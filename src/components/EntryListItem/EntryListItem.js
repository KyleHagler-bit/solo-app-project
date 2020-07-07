import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './ListOfIcons.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

//Will I need to pass anything up? Need to have some sort of toggle
//so that I can show what icons are chosen
//And need to update state or whatever with values(ids) chosen
class EntryListItem extends Component {


  render() {
    const {emotion_value, note, date_logged} = this.props;
    return (
      <div className='page' style={{border:'1px solid black'}}>

          {date_logged} <br/>
           {emotion_value} <br/>
           {note}<br/> <br/>
            
     
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry:state.entry
});

export default connect(mapStateToProps)(EntryListItem);