import React, {Component} from 'react';
import { connect } from 'react-redux';

import EntryListItem from '../EntryListItem/EntryListItem';

// import './PastEntryPage.css';

import { withRouter } from "react-router";


class PastEntryPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ENTRY' })
  }

  render() {
    //Check to see if any entries exist. If none, prompt user to make an entry
    if (this.props.entry.length===0){
      return(
        <center> <br/> <br/>
      <h4 >Oops! It's empty in here... why not make an entry?</h4>
      <button style={{margin:'2%'}} onClick={() => this.props.history.push("/welcome")}>Make an Entry</button>
      </center>
      )
    } else {
    
    return (
      <div className="page" style={{ textAlign: 'center', border: 'none', display: 'flex', top:'38px', minHeight:'100%' }}>
<div className='col-sm' style={{backgroundColor:'red', float:'left', maxWidth:'5%', minHeight:'100%' }}></div>
<div style={{display:'inline-block', width:'90%', height:'100%', marginBottom:'1%'}}>
        
        <button style={{margin:'2%'}} onClick={() => this.props.history.push("/home")}>Back to Home Page</button>
        <br/> 

        {this.props.entry.map((item, index) => {
          let date=new Date (item.date_logged);
          // console.log(item.iconsArray)
          date=date.toDateString();
          //console.log('this is inside pastpagenetry',item.id)
            return (
              
              <EntryListItem 
                id={item.id} //this SHOULD be the entry_id
                emotion_value={item.emotion_value}
                iconsArray={item.chosen_icons}
                note={item.note}
                date_logged={date}
                key={`entrylistitem-${item.id}`} //need this or react can't tell them apart!
                //If props are the same, then won't re-mount
              />
              
            );
          })}
          
      </div>
      <div className='col-sm' style={{backgroundColor:'red', float:'right', maxWidth:'5%' }}></div>
      </div>
    );
  }}
}

const mapStateToProps = state => ({
  entry: state.entry,
  // chosenIcons: state.chosenIcons

});

export default withRouter(connect(mapStateToProps)(PastEntryPage));