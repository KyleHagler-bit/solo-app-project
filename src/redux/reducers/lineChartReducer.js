const lineChartReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'SET_LINE':
      console.log('action.payload in reducer', action.payload);
      return action.payload;
    case 'UNSET_LINE':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default lineChartReducer;