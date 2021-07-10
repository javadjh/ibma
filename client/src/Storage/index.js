import {applyMiddleware, compose, createStore} from "redux";
import {reducersC} from '../Reducers/index'
import thunk from "redux-thunk";
import {loadingBarMiddleware} from "react-redux-loading-bar";

export const storage = createStore(reducersC,compose(
    applyMiddleware(thunk,loadingBarMiddleware()),

))
/*window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()*/


storage.subscribe(()=>console.log(storage.getState()))
