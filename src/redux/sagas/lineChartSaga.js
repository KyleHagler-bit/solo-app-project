import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* fetchLineChart() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/linechart', config);
   
    yield put({ type: 'SET_LINE', payload: response.data });
  } catch (error) {
    console.log('Chart get request failed', error);
  }
}

function* lineChartSaga() {
  yield takeEvery('FETCH_LINE', fetchLineChart);
}

export default lineChartSaga; 