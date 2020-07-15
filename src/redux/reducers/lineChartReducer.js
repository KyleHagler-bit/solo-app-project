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

export default lineChartReducer;