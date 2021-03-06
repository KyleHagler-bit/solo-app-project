//handles 'holding' the current item being worked on

//does this need to be [] or [{}] OR {}
const currentItemReducer = (state = {
  emotionValue: 0,
  iconsArray: [],
  note: '',
}, action) => {
 
  let newState = { ...state };
  switch (action.type) {
    case 'CURRENT_ITEM':
      newState = { ...newState, ...action.payload };
      return newState;
    //SHOULD this be it's own thing? Right now CURRENT_ITEM takes care of adding things
    // case 'ADD_ICON':
    //   newState = { ...newState, iconsArray: [...newState.iconsArray, action.payload] };
    // //return action.payload;
    case 'REMOVE_ICON':
      const filteredIcons = newState.iconsArray.filter(
        (item) => item !== action.payload
      );
   
      newState = { ...newState, iconsArray: filteredIcons };
      return newState;
    case 'RESET_CURRENT_ITEM':
      newState = {
        emotionValue: 0,
        iconsArray: [],
        note: '',
      }
      return newState;
    default:
      return state;
  }
};



export default currentItemReducer;
//module.exports = currentItemReducer; //USE THIS FOR TESTING

//SO I guess I would need to chnage these to function BLAH BLAH for testing purposes?
