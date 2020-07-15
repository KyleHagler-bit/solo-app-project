import React from 'react';
import './Footer.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router";

const Footer = props => (
  <footer style={{backgroundColor:props.color.outlineColor}}>
    &copy; Prime Digital Academy
  </footer>
);

const mapStateToProps = state => ({
  color:state.color
});

export default withRouter(connect(mapStateToProps)(Footer));
