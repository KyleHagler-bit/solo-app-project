const currentItemReducer = (state = [{}], action) => {
  console.log('state in currentItem reducer is', state)
  switch (action.type) {
      case 'CURRENT_ITEM':
          return {...state, ...action.payload};
      default:
          console.log('currentItem state is', state)
          return state;
  }
}

export default currentItemReducer;