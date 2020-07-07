
const entryReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LAST_ENTRY':
      return action.payload;
    case 'UNSET_LAST_ENTRY':
      return [];
    default:
      return state;
  }
};

export default entryReducer;