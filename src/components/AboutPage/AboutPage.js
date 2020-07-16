import React from 'react';

import './AboutPage.css'

//This page is for anyone to read (i.e. don't need to be logged in to see it)
const AboutPage = () => (
  <div>
    <center>
      <div className='card' id='aboutContent' style={{ width: '60%' }}>
        <br />
        <h1>So why journal?</h1><br />
        <h3 style={{ width: '80%', margin: 'auto' }}>
          Journaling has been found to help in a multitude of ways! These include but are not limited to:</h3>
        <center>
          <div style={{ margin: '3%', textAlign: 'left', width: '40%' }}>
            <li>Helps establish future goals</li>
            <li>Helps one reflect and solve problems</li>
            <li>Allows opportunity for self-dialogue and self-expression</li>
            <li>Improves writing skills</li>
            <li>Keep track of important memories</li>
            <li>Able to reflect on past and see personal growth</li>
          </div>
        </center>

      </div>
    </center>
  </div>
);

export default AboutPage;
