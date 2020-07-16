import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchPieChart() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/piechart', config); //GET
    yield put({ type: 'SET_PIE', payload: response.data });
  } catch (error) {
    //console.log('Pie get request failed', error);
  }
}

function* pieChartSaga() {
  yield takeEvery('FETCH_PIE', fetchPieChart);
}

export default pieChartSaga;