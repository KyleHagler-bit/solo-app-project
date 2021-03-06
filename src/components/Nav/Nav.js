import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

//icons added next to nav titles
const Nav = (props) => (
  <div className="nav" style={{backgroundColor:props.color.outlineColor}}>
    <Link to="/home"> {/*If user clicks on the name of the app, they are taken to the homepage */}
      <h2 className="nav-title">Quick Journal</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/welcome" style={{backgroundColor:props.color.color}}>
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        <i class="fa fa-pencil" aria-hidden="true"></i>
         {props.user.id ? `Make an Entry` : 'Login / Register'}
        

      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/home" style={{backgroundColor:props.color.color}}>
             <i class="fa fa-home" aria-hidden="true"></i>  Home
          </Link>
          <Link className="nav-link" to="/pastentry" style={{backgroundColor:props.color.color}}>
           <i class="fa fa-list-ul" aria-hidden="true"></i>  Past Entries 
          </Link>
          <Link className="nav-link" to="/profile" style={{backgroundColor:props.color.color}}>
             <i class="fa fa-user" aria-hidden="true"></i>  Profile
          </Link>
          <LogOutButton className="nav-link" style={{backgroundColor:props.color.color}} />
          
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <Link className="nav-link" to="/about" style={{backgroundColor:props.color.color}}>
        <i class="fa fa-question" aria-hidden="true"></i>  About
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  color:state.color
});

export default connect(mapStateToProps)(Nav);
