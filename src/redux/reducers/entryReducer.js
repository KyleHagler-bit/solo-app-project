
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
// const entryReducer = (state =
//   [{
//     emotionValue: 0,
//     iconsArray:[],
//     notes: ''
//   }], action) => {
//   console.log("action in Reducer", action.payload)
//   let newState = { ...state };
//   if (action.type === "UPDATE") {
//     newState = { ...newState, ...action.payload };
//   } else if (action.type === "CLEAR") {
//     newState = {
//       emotionValue:0,
//       iconsArray:[],
//       notes:''
//     }
//   }
//   console.log(newState);
//   return newState;
// };

// user will be on the redux state at:
// state.user
export default entryReducer;