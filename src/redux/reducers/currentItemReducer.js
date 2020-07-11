//does this need to be [] or [{}] OR {}
const currentItemReducer = (state = {
  emotionValue: 0,
  iconsArray: [],
  note: '',
}, action) => {
  console.log('This is inside currItem Reducer', state)
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
        (item) => item.id !== action.payload
      );
      newState = { ...newState, iconsArray: filteredIcons };
      case 'RESET_CURRENT_ITEM':
        newState= {
          emotionValue: 0,
          iconsArray: [],
          note: '',
        }

    default:
      return state;
  }
};



export default currentItemReducer;


