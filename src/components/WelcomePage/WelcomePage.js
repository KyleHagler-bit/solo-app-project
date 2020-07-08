import React, {Component} from 'react';
import { connect } from 'react-redux';
import EmotionScale from '../EmotionScale/EmotionScale';
import './WelcomePage.css';

import { withRouter } from "react-router";

class WelcomePage extends Component {

  submitInfo = (event) =>{
    this.props.dispatch({ type: "UPDATE", payload: this.state });
    this.props.history.push("/icons")

  }

  //TODO: make on hover for each emoticon saying what emotion it portrays
  render() {
    console.log('what is in here?',this.props.currentItem[0].emotionValue)
    return (
      <div className="page">
        {/* Do a conditional to say welcome back vs welcome */}
        <h2>Welcome!</h2>
        <h3>How are you feeling today?</h3>
        <EmotionScale/> <br/><br/>
        {/*User cannot move further on in the entry process unless they select an emotion*/}
 {this.props.currentItem[0].emotionValue===undefined ? <button disabled >Next Page</button>: <button onClick={() => this.submitInfo()}>Next Page</button>}
  
        <button onClick={() => this.props.history.push("/home")}>Skip to Home Page</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entry: state.entry,
  currentItem: state.currentItem
});

export default withRouter(connect(mapStateToProps)(WelcomePage));