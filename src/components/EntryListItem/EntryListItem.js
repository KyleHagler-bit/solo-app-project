import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EntryListItem.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

//Will I need to pass anything up? Need to have some sort of toggle
//so that I can show what icons are chosen
//And need to update state or whatever with values(ids) chosen
class EntryListItem extends Component {

  // componentDidMount() {
  //   console.log('in comp did mount', this.props.id)
  //   this.props.dispatch({type:'FETCH_CHOSEN_ICONS', payload:this.props.id})
    
  // }

  // getIconValues=(id) => {
  //   this.props.dispatch({type:'FETCH_CHOSEN_ICONS', payload:id})
  //   return(
      
  //   )
  // }
  

  render() {
    const {id,emotion_value, note, date_logged, icons} = this.props;
    return (
      <div className='page' id='entrylist' style={{border:'1px solid black'}}>
        <div className = 'card'>

          <div className='card-header'><h5 className='card-title'>{date_logged}</h5></div> <br/>
           <div className='card-body'>
           {emotion_value} <br/>
           {note}<br/> <br/>
           
           {this.props.chosenIcons.map((item, index) => {
         
            return (
              <div>
              {item.activity_id}
              {/* {this.getIconValues(id)} */}
              </div>
            );
          })}
           </div>
            
           </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry:state.entry,
  chosenIcons: state.chosenIcons
});

export default connect(mapStateToProps)(EntryListItem);