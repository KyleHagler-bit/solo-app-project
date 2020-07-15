const pieChartReducer = (state = [], action) => {
 
  switch (action.type) {
    case 'SET_PIE':
      console.log('action.payload in reducer', action.payload);
      return action.payload;
    case 'UNSET_PIE':
      return [];
    default:
      return state;
  }
};

export default pieChartReducer;