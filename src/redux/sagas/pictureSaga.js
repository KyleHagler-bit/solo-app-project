import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* fetchPicture() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('/api/picture', config);
    console.log('inside Saga', response.data)
    yield put({ type: 'SET_PICTURE', payload: response.data });
  } catch (error) {
    console.log('picture failed', error);
  }
}

function* updatePicture(action) {
  
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
      const response = yield axios.put(`/api/picture`, action.payload);
      yield put({ type: 'FETCH_PICTURE' })
    
  } catch (error) {
      console.log('Error updating', error);
  }
}


function* pictureSaga() {
  yield takeEvery('FETCH_PICTURE', fetchPicture);
  yield takeEvery('UPDATE_PICTURE', updatePicture)
}

export default pictureSaga;