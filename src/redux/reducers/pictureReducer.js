const pictureReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PICTURE':
      return action.payload;
    case 'UNSET_PICTURE':
      return [];
    default:
      return state;
  }
};

export default pictureReducer;