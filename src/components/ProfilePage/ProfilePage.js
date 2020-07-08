import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


import axios from 'axios';
import './ProfilePage.css';

class ProfilePage extends Component {

 


  render() {
    const { icons, user } = this.props;
    console.log(user)
    return (
      <div className="page" style={{ textAlign: 'center', border: '1px solid black', display: 'block', height:'100%' }}>
        <div className='card' style={{float:'right', width:'60%', margin:'3%'}}>
         <h4 className='card-title'>Hello {user.first_name}!</h4>
         <div style={{textAlign:'left', margin:'2%'}}>
         <h5 className='card-text'>Change Password?</h5>
         <h5>Add Profile Picture? <button>+</button></h5>
         <h5>Change Language? <select>
           <option value='CHOOSE'>CHOOSE LANGUAGE</option>
           <option value='English'>English</option>
           </select></h5>
           <h5>Change color theme of app?</h5>
           </div>
       </div>
        <div style={{borderRadius:'100%', height:'300px', width:'300px', margin:'3%'}}> <br/>
          {user.profile_pic ? <img src={user.profile_pic}/> : <img id='placeholder' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'/>}
          
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