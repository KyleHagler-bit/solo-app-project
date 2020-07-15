import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchChosenIcons(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    console.log('inside chosen Saga', action)
    const response = yield axios.get(`/api/chosen/${action.payload}`, config); //GET
    console.log('inside Saga', response.data)
    yield put({ type: 'SET_CHOSEN_ICONS', payload: response.data });
  } catch (error) {
    console.log('Icons get request failed', error);
  }
}

function* chosenIconsSaga() {
  yield takeEvery('FETCH_CHOSEN_ICONS', fetchChosenIcons);
}

export default chosenIconsSaga;