import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EmotionScale.css';

import 'font-awesome/css/font-awesome.min.css';


class EmotionScale extends Component {
  state = {
    emotionValue: 0
  }

getValue = (value) =>{
  
  this.setState({ emotionValue: value });
  
  this.props.dispatch({
    type: 'CURRENT_ITEM', payload: [{
      emotionValue: this.state.emotionValue
    }
    ]

  })
}


//TODO: likely need to make toggle for button instead of just focus.
  render() {
    return (
      <div className='page'> 

        <button id='icon'><i className='fas fa-tired' defaultValue = '1' onClick={() =>this.getValue(1)}></i></button>

        <button id='icon'><i className='fas fa-sad-tear'defaultValue = '2' onClick={() =>this.getValue(2)}></i></button>

        <button id='icon'> <i className='fas fa-frown-open' defaultValue = '3' onClick={() =>this.getValue(3)}></i></button>

        <button id='icon'><i className='fas fa-meh' defaultValue = '4' onClick={() =>this.getValue(4)}></i></button>

        <button id='icon'><i className='fas fa-smile' defaultValue = '5' onClick={() =>this.getValue(5)}></i></button>

        <button id='icon'><i className='fas fa-grin' defaultValue = '6' onClick={() =>this.getValue(6)}></i></button>

        <button id='icon'><i className='fas fa-grin-stars'defaultValue = '7' onClick={() =>this.getValue(7)}></i></button>
<br/>

      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(EmotionScale);