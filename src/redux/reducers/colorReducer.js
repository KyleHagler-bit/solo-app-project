//handles colors coming in from profile page
const colorReducer = (state = {
  outlineColor:'#50A586', //need a default color palette
  iconColor:'#3AAED8',
  buttonColor:'#0195B7'
}, action) => {

  let newState = { ...state };
  switch (action.type) {
    case 'SET_COLOR':
      newState = {outlineColor:action.payload.outline, iconColor:action.payload.icon, buttonColor: action.payload.button};
      return newState;
    default:
      return state;
  }
};


export default colorReducer;
