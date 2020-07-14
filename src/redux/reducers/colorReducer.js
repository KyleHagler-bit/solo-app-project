//does this need to be [] or [{}] OR {}
const colorReducer = (state = {
  outlineColor:'#50A586',
  iconColor:'#3AAED8',
  buttonColor:'#0195B7'
}, action) => {
  // console.log('This is inside currItem Reducer', state)
  let newState = { ...state };
  switch (action.type) {
    case 'SET_COLOR':
      console.log('action is', action)
      newState = {outlineColor:action.payload.outline, iconColor:action.payload.icon, buttonColor: action.payload.button};
      console.log('inside reducer',newState)
      return newState;
    default:
      return state;
  }
};


export default colorReducer;
