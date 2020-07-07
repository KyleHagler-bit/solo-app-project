
const chosenIconsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHOSEN_ICONS':
      return action.payload;
    case 'UNSET_CHOSEN_ICONS':
      return [];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default chosenIconsReducer;