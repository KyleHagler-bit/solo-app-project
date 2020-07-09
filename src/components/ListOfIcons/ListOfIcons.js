import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListOfIcons.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

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
  }

  getValue = (value) =>{
    this.setState({count: this.state.count+1})
  console.log(value)
  
    // this.setState({ iconsArray:[...currentItem.iconsArray, value] });
    // console.log('this is state', this.state)
    
    // this.props.dispatch({
    //   type: 'CURRENT_ITEM', payload:this.state
    // })

    
      this.props.dispatch({
        type: 'CURRENT_ITEM', payload: { iconsArray:[...this.props.currentItem.iconsArray, value] }
      });
    
    
  }

  // componentDidUpdate = () =>{
  //   this.props.dispatch({
  //     type: 'CURRENT_ITEM', payload:this.state
  //   })
  // }

  render() {
    
    return (
      <div className='page' >
        

            {/* <a type="button" id="activity"  ><i className="fab fa-youtube" aria-hidden="true"></i></a>
            <a type="button"  ><i className="far fa-hand-point-right" aria-hidden="true"></i></a> */}
            
      {this.props.icons.map((item,index) =>{
        
        return(
          <div id='container'>
          <a type="button" id="activity" class="btn btn-success" onClick={() =>this.getValue(item.id)}><i className={item.activity_icon}></i></a>
          <h5>{item.activity_name}</h5>
          </div>
          )
      })}
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  icons:state.icons,
  currentItem:state.currentItem
});

export default connect(mapStateToProps)(ListOfIcons);