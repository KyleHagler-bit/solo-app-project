import React, {Component} from 'react';
import { connect } from 'react-redux';

import EntryListItem from '../EntryListItem/EntryListItem';

// import './PastEntryPage.css';

import { withRouter } from "react-router";


class PastEntryPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ENTRY' })
    // this.props.dispatch({type: 'RESET_CURRENT_ITEM'})
    
  }

  render() {
    
    return (
      <div className="page" style={{ display:'block'}}>
        
        <button style={{margin:'2%'}} onClick={() => this.props.history.push("/home")}>Back to Home Page</button>
        <br/> <br/>

        {this.props.entry.map((item, index) => {
          let date=new Date (item.date_logged);
          console.log(item.iconsArray)
          date=date.toDateString();
          console.log('this is inside pastpagenetry',item.id)
            return (
              
              <EntryListItem 
              id={item.id} //this SHOULD be the entry_id
              emotion_value={item.emotion_value}
              note={item.note}
              date_logged={date}
              
              
              />
              
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.entry,
  // chosenIcons: state.chosenIcons

});

export default withRouter(connect(mapStateToProps)(PastEntryPage));