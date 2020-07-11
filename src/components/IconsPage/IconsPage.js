import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import ListOfIcons from '../ListOfIcons/ListOfIcons';
import './IconsPage.css';

class IconsPage extends Component {
  

  // getValue = (value) =>{
    
  //   console.log(value)
    
  //     this.setState({ iconsArray:[...this.state.iconsArray, value] });
  //     console.log('this is state', this.state)
  //     this.props.dispatch({
  //       type: 'CURRENT_ITEM', payload:this.state
  //     })
      
  //   }

  //   toggleSelected = (icon, selected) => {
      
  //     if (selected === true) {
       
  //       this.props.dispatch({ type: "REMOVE_ICON", payload: icon });
  //     } else {
        
  //       this.props.dispatch({ type: "ADD_ICON", payload: icon });
  //     }
  //   };
    

  render() {
    console.log('what is count?', this.props.currentItem.count)
    return (
      <div className="page" style={{height:'825px'}}>
        <div style={{minHeight:'100%',width:'5%', backgroundColor:'red', float:'left'}}></div>
        <div style={{minHeight:'100%',width:'5%', backgroundColor:'red', float:'right'}}></div>
        
        <h2> What have you been up to today?</h2>
        <h3>Please choose all that apply</h3>
        <ListOfIcons getValue={this.getValue} toggleSelected={this.toggleSelected}/>
        <button id='backToWelcome' onClick={() => this.props.history.push("/welcome")}>Back</button>
        {this.props.currentItem.iconsArray.length===0? <button  id='nextIcon' disabled>Next Page</button> : <button  id='nextIcon' onClick={() => this.props.history.push("/notes")}>Next Page</button>}
        
        {/* <button onClick={() => this.props.history.push("/notes")}>Next Page</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentItem: state.currentItem,
  icons: state.icons
});

export default withRouter(connect(mapStateToProps)(IconsPage));