// Third party library
import { createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from '@redux-saga/core';
import {persistReducer,persistStore} from "redux-persist";

// Application files
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";


const persistConfig = {
    key: "root",
    storage,
    whitelist:["persistReducer"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)