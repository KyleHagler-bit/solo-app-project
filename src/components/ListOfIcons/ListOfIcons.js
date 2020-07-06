import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListOfIcons.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';


class ListOfIcons extends Component {
  state = {
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ICONS' })
    console.log('inside compDidmount');
    
  }

  render() {
    
    return (
      <div className='page'>

            {/* <a type="button" id="activity"  ><i className="fab fa-youtube" aria-hidden="true"></i></a>
            <a type="button"  ><i className="far fa-hand-point-right" aria-hidden="true"></i></a> */}
            
      {this.props.icons.map((item,index) =>{
        
        return(
          <div id='container'>
          <a type="button" id="activity" class="btn btn-success"><i className={item.activity_icon}></i></a>
          <h5>{item.activity_name}</h5>
          </div>
          )
      })}
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  icons:state.icons
});

export default connect(mapStateToProps)(ListOfIcons);