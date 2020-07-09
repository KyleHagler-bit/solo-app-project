
const entryReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ENTRY':
      return action.payload;
    case 'UNSET_ENTRY':
      return [];
    default:
      return state;
  }
};

export default entryReducer;