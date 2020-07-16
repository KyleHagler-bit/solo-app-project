const lineChartReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'SET_LINE':
      
      return action.payload;
    case 'UNSET_LINE':
      return [];
    default:
      return state;
  }
};

export default lineChartReducer;