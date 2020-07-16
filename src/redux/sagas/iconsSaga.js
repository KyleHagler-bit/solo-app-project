import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//used to get all icons to display
function* fetchIcons() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('/api/icons', config); //GET
    yield put({ type: 'SET_ICONS', payload: response.data });
  } catch (error) {
    //console.log('Icons get request failed', error);
  }
}

function* iconsSaga() {
  yield takeEvery('FETCH_ICONS', fetchIcons);
}

export default iconsSaga;