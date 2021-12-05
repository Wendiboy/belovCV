import {combineReducers, createStore} from "redux";
import infoReducer from "./info-reducer.js";
import photosReducer from "./photos-reducer.js";


let reducers = combineReducers({
    infoPage: infoReducer,
    photosPage: photosReducer,
});

let store = createStore(reducers);
export default store;
Window.store = store;