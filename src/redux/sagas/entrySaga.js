import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* fetchEntry() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('/api/entry', config);
    console.log('inside Saga', response.data)
    yield put({ type: 'SET_ENTRY', payload: response.data });
  } catch (error) {
    console.log('Icons get request failed', error);
  }
}

function* iconsSaga() {
  yield takeEvery('FETCH_ENTRY', fetchEntry);
}

export default iconsSaga;