import { httpPost, httpGet } from "../../utils/services/https";
import { sagaTypes } from "./types";
import { all, takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { persistReducer } from 'redux-persist';
import { persistor } from "../store";



function* postAPI({ URL, data, callback }) {
  try {
    const response = yield call(httpPost, `${URL}`, data);
    console.log("response", response);
    if (response?.status === 200 || response?.status === 201) {
      callback(response.data);
    } else {
      callback("error", response?.data?.message || "Something went wrong");
    } 
  } catch (error) {
    callback("error");
  }
}

function* getAPI({ URL, callback }) {
  try {
    const response = yield call(httpGet, `${URL}`);
    console.log("response", response);
    if (response?.status === 200  || response?.status === 201) {
      callback(response);
    } else {
      callback("error", response?.message || "Something went wrong");
    }
  } catch (error) {
    callback("error");
  }
}


function* userApiRequest() {
  yield takeEvery(sagaTypes.USER_LOGIN, postAPI);
  yield takeEvery(sagaTypes.FETCH_USERS, getAPI);

}

export default function* commonSaga() {
  // Combine sagas
  yield all([userApiRequest()]);
}
