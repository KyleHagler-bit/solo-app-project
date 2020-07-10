const entryReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ACTIVITY_ENTRY':
      return action.payload;
    case 'UNSET_ACTIVITY_ENTRY':
      return [];
    default:
      return state;
  }
};

export default entryReducer;