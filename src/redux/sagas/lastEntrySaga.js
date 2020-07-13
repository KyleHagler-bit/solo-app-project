import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* fetchLastEntry() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('/api/lastEntry', config);
  
    yield put({ type: 'SET_LAST_ENTRY', payload: response.data });
  } catch (error) {
    console.log('Icons get request failed', error);
  }
}

function* lastEntrySaga() {
  yield takeEvery('FETCH_LAST_ENTRY', fetchLastEntry);
}

export default lastEntrySaga;