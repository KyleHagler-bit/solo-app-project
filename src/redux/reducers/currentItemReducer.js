const currentItemReducer = (state = [{}], action) => {
  
  switch (action.type) {
      case 'CURRENT_ITEM':
          return {...state, ...action.payload};
      default:
          
          return state;
  }
}

export default currentItemReducer;