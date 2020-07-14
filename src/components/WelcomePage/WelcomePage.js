import React, {Component} from 'react';
import { connect } from 'react-redux';
import EmotionScale from '../EmotionScale/EmotionScale';
import './WelcomePage.css';

import { withRouter } from "react-router";

class WelcomePage extends Component {

  componentDidMount() {
    this.props.dispatch({type:'RESET_CURRENT_ITEM'}) //try to make sure data gets cleared if user goes to first question
  }

  submitInfo = (event) =>{
    this.props.history.push("/icons")
  }

 
  render() {

    return (
      <div className="page" style={{display:'flex', border:'none', height:'94%', top:'38px'}}>
        <div className='col-sm' style={{backgroundColor:'red', float:'left', maxWidth:'5%' }}></div>
        <div style={{width:'90%'}}>
        <br/><br/>
        <h2>Welcome!</h2><br/>
        <h3>How are you feeling today?</h3>
        <EmotionScale/> 
        {/*User cannot move further on in the entry process unless they select an emotion*/}
        <div>
 {this.props.currentItem.emotionValue===0 ? <button id='nextToIcons' disabled >Next Page</button>: <button id='nextToIcons' onClick={() => this.submitInfo()}>Next Page</button>}
  
        <button id='skipHome' onClick={() => this.props.history.push("/home")}>Skip to Home Page</button>
        </div>
        </div>
        <div className='col-sm' style={{backgroundColor:'red', float:'right', maxWidth:'5%' }}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.entry,
  currentItem: state.currentItem
});

export default withRouter(connect(mapStateToProps)(WelcomePage));