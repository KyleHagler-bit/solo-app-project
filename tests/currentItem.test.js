const currentItemReducer = require('../src/redux/reducers/currentItemReducer');

//state is undefined
test('Reducer returns default state if state is undefined', () => {
  const result = currentItemReducer(undefined, {});
  expect(typeof (result)).toBe(typeof ([]));
  
  expect(result).toEqual({
    emotionValue: 0,
    iconsArray: [],
    note: '',
  });
});

//essentially the same as above but a called dispatch
test('Reducer reset dispatch', () => {
  const result = currentItemReducer([], {type:'RESET_CURRENT_ITEM'});
  expect(typeof (result)).toBe(typeof ([]));
  
  expect(result).toEqual({
    emotionValue: 0,
    iconsArray: [],
    note: '',
  });
});

//this acts like user is sending an entry to the database including all 3 'pieces'
test('Reducer sending off data in CURRENT_ITEM ', () => {
  const result = currentItemReducer([], {type:'CURRENT_ITEM', payload: {emotionValue:5, iconsArray:[3], note:'ugh'}});
 
  expect(result).toEqual({
    emotionValue: 5,
    iconsArray: [3],
    note: 'ugh',
  });
});

//Test case where have icon in array and it gets removed
test('Reducer that handles removing icon from array (i.e. specific entry) ', () => {
  const result = currentItemReducer({emotionValue:0, iconsArray:[5,7,9], note:''}, {type:'REMOVE_ICON', payload: 5});
 
  expect(result).toEqual({
    emotionValue: 0,
    iconsArray: [7,9],
    note: '',
  });
});