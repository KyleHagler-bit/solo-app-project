import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from "react-router";

import './LoginPage.css';

//most of this not changed. One major change is logging in with email and not username
class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
    
    this.props.history.push("/home") //makes sure that login takes user to home page
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className='page' style={{display:'flex', height:'94%', top:'38px'}}>
<div className='col-sm' style={{backgroundColor:this.props.color.outlineColor, float:'left', maxWidth:'5%' }}></div>
<div style={{display:'inline-block', width:'90%', height:'50%'}}><br/><br/>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form id='loginForm' onSubmit={this.login}>
          <h1 id='loginTitle'>Login</h1>
          <br/>
          <div>
            <label>
              Email: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password: &nbsp;
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <center><br/>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
              
            />
            </center> <br/>
          </div>
          <div>
            <input
              className="link-button"
              type="button"
              name="submit"
              value="Forgot Password?"
              onClick={() => { alert('This is a placeholder! NONFUNCTIONAL') }}
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          >
            Register
          </button>
        </center>
        </div>
        <div className='col-sm' style={{backgroundColor:this.props.color.outlineColor, float:'right', maxWidth:'5%' }}></div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
  color: state.color
});

export default withRouter(connect(mapStateToProps)(LoginPage));
