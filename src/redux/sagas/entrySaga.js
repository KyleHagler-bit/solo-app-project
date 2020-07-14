import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

//GET entries from database
function* fetchEntry() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('/api/entry', config);
    
    yield put({ type: 'SET_ENTRY', payload: response.data });
  } catch (error) {
    console.log('entry get request failed', error);
  }
}

//DELETE entry from database with action.payload id
function* deleteEntry(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
		//with DELETE, does not need response
		console.log(action.payload);
    yield axios.delete(`/api/entry/${action.payload}`, config);
    yield put({ type: "FETCH_ENTRY" }); //this does not seem to refresh one on home page?
    yield put ({type:'FETCH_PIE'})
    yield put ({type: 'FETCH_LINE'})
    yield put ({type:'FETCH_LAST_ENTRY'}) //NEED this or home page does not update on delete
  } catch (error) {
    console.log("Error deleting entry from past entry:", error);
  }
}

//POST new entry to database
function* addEntry(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    //with POST, does not need response
    yield axios.post("/api/entry", action.payload, config);
    yield put({ type: "FETCH_ENTRY" });
    yield put({type:'FETCH_LAST_ENTRY'})
  } catch (error) {
    console.log("Error with adding entry:", error);
  }
}

function* entrySaga() {
  yield takeEvery('FETCH_ENTRY', fetchEntry);
  yield takeEvery('DELETE_ENTRY', deleteEntry);
  yield takeEvery('ADD_ENTRY', addEntry)
  //yield takeEvery('UPDATE_ENTRY', updateEntry)
}

export default entrySaga;