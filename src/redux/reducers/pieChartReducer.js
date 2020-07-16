const pieChartReducer = (state = [], action) => {
 
  switch (action.type) {
    case 'SET_PIE':
      
      return action.payload;
    case 'UNSET_PIE':
      return [];
    default:
      return state;
  }
};

export default pieChartReducer;