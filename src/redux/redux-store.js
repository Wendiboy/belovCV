import {combineReducers, createStore} from "redux";

import infoReducer from "./info-reducer.js";


let reducers = combineReducers({
    infoPage: infoReducer,
});

let store = createStore(reducers);
export default store;
Window.store = store;