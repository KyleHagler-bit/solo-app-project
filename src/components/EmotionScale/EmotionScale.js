import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EmotionScale.css';

import ReactTooltip from 'react-tooltip';

import 'font-awesome/css/font-awesome.min.css';

const emotion = (emoticonID) => {
  switch (emoticonID) {
    case 1:
      return 'Horrible';
    case 2:
      return 'Bad';
    case 3:
      return 'Poor';
    case 4:
      return 'Neutral';
    case 5:
      return 'Okay';
    case 6:
      return 'Good';
    case 7:
      return 'Great';
    default:
      return 'n/a';
  }
}

class EmotionScale extends Component {
  getValue(value) {
    this.props.dispatch({
      type: 'CURRENT_ITEM', payload: { emotionValue: value }
    });
  }

  //TODO: likely need to make toggle for button instead of just focus.
  render() {
    return (
      <div className='page'>

        <button id='icon' data-tip data-for='Horrible'><i className='fas fa-tired' onClick={() => this.getValue(1)}></i></button>
        <ReactTooltip id='Horrible'><span>Horrible</span></ReactTooltip>

        <button id='icon' data-tip data-for='Bad'><i className='fas fa-sad-tear'  onClick={() => this.getValue(2)}></i></button>
        <ReactTooltip id='Bad'><span>Bad</span></ReactTooltip>

        <button id='icon' data-tip data-for='Poor'> <i className='fas fa-frown-open'  onClick={() => this.getValue(3)}></i></button>
        <ReactTooltip id='Poor'><span>Poor</span></ReactTooltip>

        <button id='icon' data-tip data-for='Neutral'><i className='fas fa-meh' onClick={() => this.getValue(4)}></i></button>
        <ReactTooltip id='Neutral'><span>Neutral</span></ReactTooltip>

        <button id='icon' data-tip data-for='Okay'><i className='fas fa-smile'  onClick={() => this.getValue(5)}></i></button>
        <ReactTooltip id='Okay'><span>Okay</span></ReactTooltip>

        <button id='icon' data-tip data-for='Good'><i className='fas fa-grin'  onClick={() => this.getValue(6)}></i></button>
        <ReactTooltip id='Good'><span>Good</span></ReactTooltip>

        <button id='icon' data-tip data-for='Great'><i className='fas fa-grin-stars'  onClick={() => this.getValue(7)}></i></button>
        <ReactTooltip id='Great'><span>Great</span></ReactTooltip>
        <br />
        <h3>I feel... {emotion(this.props.currentItem.emotionValue)} </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentItem: state.currentItem
});

export default connect(mapStateToProps)(EmotionScale);