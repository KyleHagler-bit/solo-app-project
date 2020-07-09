//does this need to be [] or [{}] OR {}
const currentItemReducer = (state = [{}], action) => {
  console.log('This is inside currItem Reducer', state)
  switch (action.type) {
    case 'CURRENT_ITEM':
      return { ...state, ...action.payload };
    //return action.payload;
      default:
      return state;
  }
};



export default currentItemReducer;

         
    