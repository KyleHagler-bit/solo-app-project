import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


import axios from 'axios';
import './ProfilePage.css';

class ProfilePage extends Component {

  state = {
    picIsEditable: false,
    picture: '',
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PICTURE' })
  }

  //used to help toggle between button and input box
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
    this.setState({ picIsEditable: false })
    this.props.dispatch({ type: 'UPDATE_PICTURE', payload: this.state })
    this.props.dispatch({ type: 'FETCH_PICTURE' })
    window.location.reload()
  }

  //User will not input anything. Change input box back into a button
  cancel = () => {
    this.setState({
      picIsEditable: false
    })
  }

  handleColor = (event) => {
    console.log(event)
    this.props.dispatch({type:'SET_COLOR', payload:event})
  }


  render() {
    const { icons, user, color } = this.props;
    console.log(color.color)
    return (<>

      <div className="page" style={{ textAlign: 'center', border: '1px solid black', display: 'flex', height:'95%', top:'38px'}}>
<div className='col-sm' style={{backgroundColor:color.color,float:'left', maxWidth:'5%' }}></div>

        <div className='card' style={{ width: '80%', margin: 'auto', display:'inline-block', height:'100%' }}><br/>
          <h1>{user.first_name}'s Profile Page!</h1><br/>
          
          <div style={{ borderRadius: '100%', height: '500px', width: '500px', margin: '1%', display:'inline-block', float:'left' }}> <br />
            {user.profile_pic ? <img id='profilePic' src={user.profile_pic} /> : <img id='placeholder' src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' />}

          </div><br/><br/>

          <div id='profileOptions' className='card' style={{ textAlign: 'left', margin: '2%',  float:'right', width: '50%', display:'inline-block', height:'60%' }}>
            <h4 id='profileText' className='card-text'>Change Password?</h4>
            <div><h4 id='profileText' style={{ display: 'inline-block' }}>Add Profile Picture?</h4>
              {this.state.picIsEditable ? <div style={{marginLeft:'8%'}}><input style={{ width: '40%' }} value={this.state.picture} placeholder='image URL please' onChange={this.handlePicture}></input>
                <button id='savePic' className='btn btn-info' onClick={this.savePicture}>Save</button><button className='btn btn-danger' id='cancelPic' onClick={this.cancel}>Cancel</button></div>
                : <button id='addImageBtn' className='btn btn-info' onClick={this.editPicture}>+</button>} </div>

            <h4 id='profileText'>Change Language? <select>
              <option value='CHOOSE'>CHOOSE LANGUAGE</option>
              <option value='English' selected>English</option>
            </select></h4>
            <div >
            <h4 id='profileText'>Change color theme of app?</h4>

            <div><button className = 'colorSelector' id='colorSelectorRed' onClick={()=> this.handleColor('red')}></button>
            <button className = 'colorSelector' id='colorSelectorGreen' onClick={()=> this.handleColor('green')}></button>
            <button className = 'colorSelector' id='colorSelectorBlue' onClick={()=> this.handleColor('blue')}></button></div>
            </div>
          </div>

        </div>

        <div className='col-sm' style={{backgroundColor:color.color, float:'right', maxWidth:'5%' }}></div>
      </div>
    </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  color: state.color,

});

export default withRouter(connect(mapStateToProps)(ProfilePage));