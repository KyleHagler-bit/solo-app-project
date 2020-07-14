import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EmotionScale.css';

import ReactTooltip from 'react-tooltip';

import 'font-awesome/css/font-awesome.min.css';

//Fills in associated word when mood is clicked
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

  render() {
    return (
      <div className=''>
          {/*Each one is a button with a tooltip attached and returns a numerical value on click */}
        <button id='icon' data-tip data-for='Horrible' style={{color:this.props.color.iconColor}} onClick={() => this.getValue(1)}><i className='fas fa-tired' ></i></button>
        <ReactTooltip id='Horrible'><span>Horrible</span></ReactTooltip>

        <button id='icon' data-tip data-for='Bad' style={{color:this.props.color.iconColor}} onClick={() => this.getValue(2)}><i className='fas fa-sad-tear'  ></i></button>
        <ReactTooltip id='Bad'><span>Bad</span></ReactTooltip>

        <button id='icon' data-tip data-for='Poor' style={{color:this.props.color.iconColor}}  onClick={() => this.getValue(3)}> <i className='fas fa-frown-open'  ></i></button>
        <ReactTooltip id='Poor'><span>Poor</span></ReactTooltip>

        <button id='icon' data-tip data-for='Neutral' style={{color:this.props.color.iconColor}} onClick={() => this.getValue(4)}><i className='fas fa-meh' ></i></button>
        <ReactTooltip id='Neutral'><span>Neutral</span></ReactTooltip>

        <button id='icon' data-tip data-for='Okay' style={{color:this.props.color.iconColor}} onClick={() => this.getValue(5)}><i className='fas fa-smile'  ></i></button>
        <ReactTooltip id='Okay'><span>Okay</span></ReactTooltip>

        <button id='icon' data-tip data-for='Good' style={{color:this.props.color.iconColor}} onClick={() => this.getValue(6)}><i className='fas fa-grin'  ></i></button>
        <ReactTooltip id='Good'><span>Good</span></ReactTooltip>

        <button id='icon' data-tip data-for='Great' style={{color:this.props.color.iconColor}} onClick={() => this.getValue(7)}><i className='fas fa-grin-stars' ></i></button>
        <ReactTooltip id='Great'><span>Great</span></ReactTooltip>
        <br />
        <h3>I feel... {emotion(this.props.currentItem.emotionValue)} </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentItem: state.currentItem,
  color:state.color
});

export default connect(mapStateToProps)(EmotionScale);