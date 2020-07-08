import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import ListOfIcons from '../ListOfIcons/ListOfIcons';
// import './IconsPage.css';

class IconsPage extends Component {

  getValue = (value) =>{
    console.log(value)
    
      this.setState({ iconsArray:[...this.state.iconsArray, value] });
      console.log('this is state', this.state)
      this.props.dispatch({
        type: 'CURRENT_ITEM', payload:this.state
      })
      
    }
    

  render() {
    return (
      <div className="page">
        <button onClick={() => this.props.history.push("/welcome")}>Back</button>
        <h2> What have you been up to today?</h2>
        <h3>Please choose all that apply</h3>
        <ListOfIcons getValue={this.getValue}/>
        <button onClick={() => this.props.history.push("/notes")}>Next Page</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default withRouter(connect(mapStateToProps)(IconsPage));