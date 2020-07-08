import React, { Component } from "react";
// import "./Edit.css";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from 'axios';

import EntryListItem from '../EntryListItem/EntryListItem';
import EmotionScale from '../EmotionScale/EmotionScale';

class EditEntryPage extends Component {

  
  state = {
    
    id:0,
    emotionValue:0,
    iconsArray:[],
    note:''
  };

   //this only gets one id... which means all past entries look identical which is WRONG
   componentDidMount() {
    console.log('in comp did mount', this.props.id)
  //   this.props.dispatch({ type: 'FETCH_CHOSEN_ICONS', payload: this.props.id })
  
    this.props.dispatch({ type: 'FETCH_ICONS' })
  
  axios({
    method: 'GET',
    url: `/api/chosen/${this.props.id}`,
  }).then((response) => {
    console.log('Success in getting ');

    this.setState({
      iconsArray: response.data
    })
    
  }).catch((error) => {
    console.log('Error getting, ', error);
  });
   }

  handleChange = (event, fieldName) => {

    this.setState({ [fieldName]: event.target.value });
  };

  //dispatch to update movies as well as push user back to details
  submit = () => {
    console.log('current state of edit.js on submit', this.state)
    // this.props.dispatch({ type: "UPDATE_MOVIES", payload: this.state })
    this.props.history.push("/pastentry");

  }
  //I tried using conditional to stop refresh error but the state gets upset anyway
  render() {
     const { entry, icons } = this.props;
    
      return (
     
        <div> 
          <div className='page' id='editBox' style={{ border: '1px solid black', textAlign:'center', width:'100%' }}>
        <div className='card'>

          <div id='head' className='card-header' >
           
              
            
            <h5 className='card-title' style={{border:'1px solid black', width:'60%', textAlign:'center', marginLeft:'auto', marginRight:'auto'}}>{entry.date_logged}</h5>
            
            </div> <br />
          <div className='card-body'>
            {/* {entry.emotion_value}  */}
            <EmotionScale/>
            <textarea value={this.state.note} onChange={(event) => this.handleChange(event, 'note')}></textarea>


              {this.state.iconsArray.map ((item, index) =>{

                for (let i=0; i<icons.length;i++){
                  if (icons[i].id === item.activity_id){
                    return(
                      <div style={{display:'inline-block', margin:'5%'}}>
                      <i className={icons[i].activity_icon} id='entryIcon'></i>
                      <p>{icons[i].activity_name}</p>
                      </div>
                    )
                  }
                }
                
               })} {/*end iconsArray map*/}

               <button>Save</button>
               <button onClick={() => this.props.history.push('/pastentry')}>Cancel Edit</button>

          </div>

        </div>
      </div>
        </div>
        
      ); // end return
    
  } // end render
} // end class HomeListItem

const mapStateToProps = (state) => {
  return {
    entry: state.entry,
    icons:state.icons
  };
};

export default withRouter(connect(mapStateToProps)(EditEntryPage));