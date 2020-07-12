import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


import axios from 'axios';
import './ProfilePage.css';

class ProfilePage extends Component {

  state = {
    picIsEditable: false,
    picture: ''
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PICTURE' })
  }

  editPicture = () => {
    this.setState({
      picIsEditable: true
    })
  }

  handlePicture = (event) => {
    this.setState({ picture: event.target.value })
  }

  savePicture = () => {
    console.log('this is state.picturre', this.state.picture)
    this.setState({
      picIsEditable: false
    })
    this.props.dispatch({ type: 'UPDATE_PICTURE', payload: this.state })
    this.props.dispatch({ type: 'FETCH_PICTURE' })
    window.location.reload()
  }

  cancel= ()=> {
    this.setState({
      picIsEditable:false
    })
  }


  render() {
    const { icons, user } = this.props;
    console.log(user)
    return (

      <div className="page" style={{ textAlign: 'center', border: '1px solid black', display: 'block',  margin: 'auto', minHeight:'680px' }}>
        <div style={{ minHeight: '100%', width: '5%', backgroundColor: 'red', float: 'left' }}></div>
        <div style={{ minHeight: '100%', width: '5%', backgroundColor: 'red', float: 'right' }}></div>

        <div className='card' style={{ width: '60%', margin: 'auto', minHeight:'680px' }}><br /><br />
        <h2>Your Profile Page!</h2>
          <h4 className='card-title'>Hello {user.first_name}</h4>
          <div style={{ borderRadius: '100%', height: '300px', width: '300px', margin: '3%' }}> <br />
            {user.profile_pic ? <img id='profilePic' src={user.profile_pic} /> : <img id='placeholder' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' />}

          </div>

          <div style={{ textAlign: 'left', margin: '2%', height:'90px' }}>
            <h5 className='card-text'>Change Password?</h5>
            <div><h5 style={{display:'inline-block'}}>Add Profile Picture?</h5>  
            {this.state.picIsEditable ? <div ><input style={{width:'100%'}} value={this.state.picture} placeholder='image URL please' onChange={this.handlePicture}></input>
            <button onClick={this.savePicture}>Save</button><button onClick={this.cancel}>Cancel</button></div> 
            : <button id='addImageBtn' onClick={this.editPicture}>+</button>} </div>

            <h5>Change Language? <select>
              <option value='CHOOSE'>CHOOSE LANGUAGE</option>
              <option value='English' selected>English</option>
            </select></h5>
            <h5>Change color theme of app?</h5>
          </div>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  lastEntry: state.lastEntry,
  icons: state.icons
});

export default withRouter(connect(mapStateToProps)(ProfilePage));