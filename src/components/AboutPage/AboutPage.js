import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import './AboutPage.css'

//This page is for anyone to read (i.e. don't need to be logged in to see it)
const AboutPage = (props) => (
  <div className='page' style={{display:'flex', minHeight:'94%', top:'38px', textAlign:'center', minWidth:'100%'}}>
    <div className='col-sm' style={{ backgroundColor: props.color.outlineColor, float: 'left', maxWidth: '5%' }}></div>
  
      <div className='card' id='aboutContent' style={{ width: '80%' }}>
        <br /><br/><br/><br/>
        <h1>So why journal?</h1><br />
        <h3 style={{ width: '50%', marginLeft:'auto', marginRight:'auto' }}>
          Journaling has been found to help in a multitude of ways! These include but are not limited to:</h3>
        <center>
          <div style={{ margin: '1%', textAlign: 'left', width: '40%' }}>
            <li>Helps establish future goals</li>
            <li>Helps one reflect and solve problems</li>
            <li>Allows opportunity for self-dialogue and self-expression</li>
            <li>Improves writing skills</li>
            <li>Keep track of important memories</li>
            <li>Able to reflect on past and see personal growth</li>
          </div>
        </center>
      </div>

    
    <div className='col-sm' style={{ backgroundColor: props.color.outlineColor, float: 'right', maxWidth: '5%' }}></div>
  </div>
);


const mapStateToProps = state => ({
  color: state.color
});

export default withRouter(connect(mapStateToProps)(AboutPage));