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
    console.log(this.props.entry)
    return (
      <div className="page">
        
        <button onClick={() => this.props.history.push("/home")}>Back to Home Page</button>
        <br/> <br/>

        {this.props.entry.map((item, index) => {
          let date=new Date (item.date_logged);
          date=date.toDateString();
            return (
              <div>
              <EntryListItem 
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
  entry: state.entry
});

export default withRouter(connect(mapStateToProps)(PastEntryPage));