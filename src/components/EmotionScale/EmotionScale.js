import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EmotionScale.css';

import ReactTooltip from 'react-tooltip';

import 'font-awesome/css/font-awesome.min.css';


class EmotionScale extends Component {
  state = {
    emotionValue: 0,
    word:''
  }

  getValue(value, word) {

    this.setState({ emotionValue: value }, () => this.props.dispatch({
      type: 'CURRENT_ITEM', payload: [{
        emotionValue: value
      }
      ]

    }))
this.setState({word:word})

  }




  //TODO: likely need to make toggle for button instead of just focus.
  render() {
    return (
      <div className='page'>

        <button id='icon' data-tip data-for='Horrible'><i className='fas fa-tired' defaultValue='1' onClick={() => this.getValue(1,'Horrible')}></i></button>
        <ReactTooltip id='Horrible'><span>Horrible</span></ReactTooltip>

        <button id='icon' data-tip data-for='Bad'><i className='fas fa-sad-tear' defaultValue='2' onClick={() => this.getValue(2,'Bad')}></i></button>
        <ReactTooltip id='Bad'><span>Bad</span></ReactTooltip>

        <button id='icon' data-tip data-for='Poor'> <i className='fas fa-frown-open' defaultValue='3' onClick={() => this.getValue(3,'Poor')}></i></button>
        <ReactTooltip id='Poor'><span>Poor</span></ReactTooltip>

        <button id='icon' data-tip data-for='Neutral'><i className='fas fa-meh' defaultValue='4' onClick={() => this.getValue(4,'Neutral')}></i></button>
        <ReactTooltip id='Neutral'><span>Neutral</span></ReactTooltip>

        <button id='icon' data-tip data-for='Okay'><i className='fas fa-smile' defaultValue='5' onClick={() => this.getValue(5,'Okay')}></i></button>
        <ReactTooltip id='Okay'><span>Okay</span></ReactTooltip>

        <button id='icon' data-tip data-for='Good'><i className='fas fa-grin' defaultValue='6' onClick={() => this.getValue(6,'Good')}></i></button>
        <ReactTooltip id='Good'><span>Good</span></ReactTooltip>

        <button id='icon' data-tip data-for='Great'><i className='fas fa-grin-stars' defaultValue='7' onClick={() => this.getValue(7,'Great!')}></i></button>
        <ReactTooltip id='Great'><span>Great</span></ReactTooltip>
        <br />
      <h3>I feel... {this.state.word}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(EmotionScale);