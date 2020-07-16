import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//chosen icons means the icons actually clicked on during the journal process (Q2)
function* fetchChosenIcons(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get(`/api/chosen/${action.payload}`, config); //GET
    
    yield put({ type: 'SET_CHOSEN_ICONS', payload: response.data });
  } catch (error) {
    //console.log('Icons get request failed', error);
  }
}

function* chosenIconsSaga() {
  yield takeEvery('FETCH_CHOSEN_ICONS', fetchChosenIcons);
}

export default chosenIconsSaga;