import { combineReducers } from "redux";
import persistReducer from "./persist/reducer";

const rootReducer = combineReducers({
    persistReducer,
})

export default rootReducer;