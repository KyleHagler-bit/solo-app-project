import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListOfIcons.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import SelectedIcon from '../SelectedIcon/SelectedIcon'

//Will I need to pass anything up? Need to have some sort of toggle
//so that I can show what icons are chosen
//And need to update state or whatever with values(ids) chosen
class ListOfIcons extends Component {
  state = {
    iconsArray:[],
    count:0,
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ICONS' })
    console.log('inside compDidmount');

    this.props.dispatch({
      type: 'CURRENT_ITEM', payload: { activityEntry:this.props.activityEntry  }
    });
  
  }

  // getValue = (value) =>{
    toggleSelected = (icon, selected) =>{
      
    this.setState({count: this.state.count+1})
  
  
    // this.setState({ iconsArray:[...currentItem.iconsArray, value] });
    // console.log('this is state', this.state)
    
    // this.props.dispatch({
    //   type: 'CURRENT_ITEM', payload:this.state
    // })

    
      
      if (selected === true) {
       
        //THIS IS CAUSING ISSUES AS IT IS CURRENTLY WRITTEN
        //  this.props.dispatch({ type: "REMOVE_ICON", payload: icon});
      } else if (selected === false){
        
      //   this.props.dispatch({ type: "ADD_ICON", payload:  { iconsArray:[...this.props.currentItem.iconsArray, icon] } });
      // }
    

    
      this.props.dispatch({
        type: 'CURRENT_ITEM', payload: { iconsArray:[...this.props.currentItem.iconsArray, icon] }
      });
    }

      
    
  }

  // componentDidUpdate = () =>{
  //   this.props.dispatch({
  //     type: 'CURRENT_ITEM', payload:this.state
  //   })
  // }

  render() {
    let {selected, toggleSelected} = this.props;
    let selectedIcons = this.props.currentItem.iconsArray;
    console.log('this is selected Icons (attached to currentItem) I guess', selectedIcons)
    return (
      <div className='page' >
        

            {/* <a type="button" id="activity"  ><i className="fab fa-youtube" aria-hidden="true"></i></a>
            <a type="button"  ><i className="far fa-hand-point-right" aria-hidden="true"></i></a> */}
            
      {this.props.icons.map((item,index) =>{
        
        console.log('item.id is', item.id)
        return(
          <div id='container'>
           <SelectedIcon id={item.id} nameForClass={item.activity_icon} toggleSelected={this.toggleSelected}
           selected={selectedIcons.some((cur) => cur ===item.id)} name={item.activity_name}/>
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