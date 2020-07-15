import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RegisterPage.css';

//Main thing changed here is using email instead of password to log in
class RegisterPage extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '', //actually email but don't want to chnage too much
    password: '',
    passwordReenter: '',
    birthday: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.password !== this.state.passwordReenter) { //handle case where user puts password or reenter in wrong
      alert('Password and Password Rentry do not match')
      return;
    }
    else if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          username: this.state.username,
          password: this.state.password,
          birthday: this.state.birthday
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className='page' style={{ display: 'flex', height: '94%', top: '38px' }}>
        <div className='col-sm' style={{ backgroundColor: this.props.color.outlineColor, float: 'left', maxWidth: '5%' }}></div>
        <div style={{ display: 'inline-block', width: '90%', height: '50%' }}> <br /><br />
          {this.props.errors.registrationMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.errors.registrationMessage}
            </h2>
          )}
          <form id='registerForm' onSubmit={this.registerUser}>
            <h1 id='registerTitle'>Register New User</h1> <br />
            <div>
              <label > {/*There is probably a better way to make spacing work... but it works! */}
                First Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <input
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.handleInputChangeFor('first_name')}
                />
              </label>
            </div>
            <div>
              <label >
                Last Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <input
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.handleInputChangeFor('last_name')}
                />
              </label>
            </div>
            <div>
              <label>
                Email: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {/*'No-break space */}
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
                Password: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Re-enter Password: &nbsp; &nbsp;
              <input
                  type="password"
                  name="password"
                  value={this.state.passwordReenter}
                  onChange={this.handleInputChangeFor('passwordReenter')}
                />
              </label>
            </div>
            <div>
              <label >
                Birthday: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <input
                  type="date"

                  value={this.state.birthday}
                  onChange={this.handleInputChangeFor('birthday')}
                />
              </label>
            </div>
            <div>
              <center> <br />
                <input id='registerBtn'
                  className="register"
                  type="submit"
                  name="submit"
                  value="Register"
                />
              </center>
            </div>
          </form>
          <center>

            <button
              type="button"
              className="link-button"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
            >
              Back to Login
          </button>
          </center>
        </div>
        <div className='col-sm' style={{ backgroundColor: this.props.color.outlineColor, float: 'right', maxWidth: '5%' }}></div>
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

export default connect(mapStateToProps)(RegisterPage);

