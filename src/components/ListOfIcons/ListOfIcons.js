import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListOfIcons.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import SelectedIcon from '../SelectedIcon/SelectedIcon'


class ListOfIcons extends Component {
 
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ICONS' })
    console.log('inside compDidmount');

    this.props.dispatch({
      type: 'CURRENT_ITEM', payload: { activityEntry:this.props.activityEntry  }
    });
  
  }

  //Used to figure out if the icon should be selected or not (i.e. add to currentItem or take out)
    toggleSelected = (icon, selected) =>{
      
      if (selected === true) {
         this.props.dispatch({ type: "REMOVE_ICON", payload: icon});
      } else if (selected === false){
      this.props.dispatch({ //Should this be made into an 'ADD_ICON' instead of just making CURRENT_ITEM?
        type: 'CURRENT_ITEM', payload: { iconsArray:[...this.props.currentItem.iconsArray, icon] }
      });
    }
  }


  render() {
   
    let selectedIcons = this.props.currentItem.iconsArray;

    return (
      <div className='' style={{display:''}} >

      {this.props.icons.map((item,index) =>{  
        return(
          <div id='container'>
           <SelectedIcon id={item.id} nameForClass={item.activity_icon} toggleSelected={this.toggleSelected}
           
           selected={selectedIcons.some((cur) => cur ===item.id)} name={item.activity_name}/>
           {/*Use the .some built-in to see if the icon clicked is "in" the clicked icons or not */}
          </div>
          )
      })}
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  icons:state.icons,
  currentItem:state.currentItem,
  activityEntry: state.activityEntry
});

export default connect(mapStateToProps)(ListOfIcons);