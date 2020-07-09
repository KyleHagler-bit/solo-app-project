import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

function* updateEntry(action) {
  
  try {
      const response = yield axios.put(`/api/entryedit/`, action.payload);
      yield put({ type: 'FETCH_ENTRY', payload: response.data })
      
      
  } catch (error) {
      console.log('Error updating', error);
  }
}



function* editSaga() {
  
  yield takeEvery('UPDATE_ENTRY', updateEntry)
}

export default editSaga;