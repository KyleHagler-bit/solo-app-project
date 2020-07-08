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
    console.log('what is count?', this.props.currentItem.count)
    return (
      <div className="page">
        <button onClick={() => this.props.history.push("/welcome")}>Back</button>
        <h2> What have you been up to today?</h2>
        <h3>Please choose all that apply</h3>
        <ListOfIcons getValue={this.getValue}/>
        {this.props.currentItem.count===0 ? <button disabled >Next Page</button>: <button onClick={() => this.props.history.push("/notes")}>Next Page</button>}
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