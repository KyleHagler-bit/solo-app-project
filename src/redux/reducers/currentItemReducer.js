//does this need to be [] or [{}] OR {}
const currentItemReducer = (state = {
  emotionValue: 0,
  iconsArray: [],
  note: '',
}, action) => {
  // console.log('This is inside currItem Reducer', state)
  let newState = { ...state };
  switch (action.type) {
    case 'CURRENT_ITEM':
      newState = { ...newState, ...action.payload };
      return newState;

    case 'ADD_ICON':
      newState = { ...newState, iconsArray: [...newState.iconsArray, action.payload] };
    //return action.payload;
    case 'REMOVE_ICON':
      const filteredIcons = newState.iconsArray.filter(
        (item) => item !== action.payload
      );
      console.log('inside reducer', filteredIcons)
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


