import React, {Component} from 'react';
import { connect } from 'react-redux';

import EntryListItem from '../EntryListItem/EntryListItem';

// import './PastEntryPage.css';

import { withRouter } from "react-router";
import chosenIconsReducer from '../../redux/reducers/chosenIconsReducer';

class PastEntryPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ENTRY' })
    
  }

  render() {
    
    return (
      <div className="page" >
        
        <button style={{margin:'2%'}} onClick={() => this.props.history.push("/home")}>Back to Home Page</button>
        <br/> <br/>

        {this.props.entry.map((item, index) => {
          let date=new Date (item.date_logged);
          console.log(item.iconsArray)
          date=date.toDateString();
          console.log('this is inside pastpagenetry',item.id)
            return (
              <div>
              <EntryListItem 
              id={item.id} //this SHOULD be the entry_id
              emotion_value={item.emotion_value}
              note={item.note}
              date_logged={date}
              
              
              />
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.entry,
  chosenIcons: state.chosenIcons

});

export default withRouter(connect(mapStateToProps)(PastEntryPage));