import {all, fork} from "redux-saga/effects";

import commonSaga from "./user/saga";

export default function* rootSaga(){
    yield all([fork(commonSaga)])
}