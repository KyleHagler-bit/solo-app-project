import React from 'react';
import './Footer.css'
import { connect } from 'react-redux';
import { withRouter } from "react-router";


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = props => (
  <footer style={{backgroundColor:props.color.outlineColor}}>
    &copy; Prime Digital Academy
  </footer>
);


const mapStateToProps = state => ({
  color:state.color
});
// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default withRouter(connect(mapStateToProps)(Footer));
