import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchActivityEntry() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('/api/entryactivity', config);
    
    yield put({ type: 'SET_ACTIVITY_ENTRY', payload: response.data });
  } catch (error) {
    //console.log('Icons get request failed', error);
  }
}


function* activityEntrySaga() {
  yield takeEvery('FETCH_ACTIVITY_ENTRY', fetchActivityEntry);
 
}

export default activityEntrySaga;