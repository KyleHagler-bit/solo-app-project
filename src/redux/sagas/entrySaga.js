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

function* deleteEntry(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
		//with DELETE, does not need response
		console.log(action.payload);
    yield axios.delete(`/api/entry/${action.payload}`, config);
    yield put({ type: "FETCH_ENTRY" });
  } catch (error) {
    console.log("Error deleting entry from past entry:", error);
  }
}

// function* updateEntry(action) {
  
//   try {
//       const response = yield axios.put(`/api/entry/`, action.payload);
//       yield put({ type: 'FETCH_ENTRY', payload: response.data })
      
      
//   } catch (error) {
//       console.log('Error updating', error);
//   }
// }


function* entrySaga() {
  yield takeEvery('FETCH_ENTRY', fetchEntry);
  yield takeEvery('DELETE_ENTRY', deleteEntry);
  //yield takeEvery('UPDATE_ENTRY', updateEntry)
}

export default entrySaga;