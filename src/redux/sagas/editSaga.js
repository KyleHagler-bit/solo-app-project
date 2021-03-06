import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//used for updating/editing past entries
function* updateEntry(action) {
  try {
      const response = yield axios.put(`/api/entryedit/`, action.payload);
      yield put({ type: 'FETCH_ENTRY'})
      yield put({type:'FETCH_ACTIVITY_ENTRY'})
      
  } catch (error) {
      //console.log('Error updating', error);
  }
}


function* editSaga() {
  yield takeEvery('UPDATE_ENTRY', updateEntry)
}

export default editSaga;