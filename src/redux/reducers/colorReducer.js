//does this need to be [] or [{}] OR {}
const colorReducer = (state = {
  color:'',
}, action) => {
  // console.log('This is inside currItem Reducer', state)
  let newState = { ...state };
  switch (action.type) {
    case 'SET_COLOR':
      newState = {color:action.payload };
      return newState;
    default:
      return state;
  }
};


export default colorReducer;
