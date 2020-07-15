//Make sure this is an array!
const iconsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ICONS':
      return action.payload;
    case 'UNSET_ICONS':
      return [];
    default:
      return state;
  }
};

export default iconsReducer;