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
    //return action.payload;
    default:
      return state;
  }
};



export default currentItemReducer;


