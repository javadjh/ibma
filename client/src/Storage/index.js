import {applyMiddleware, compose, createStore} from "redux";
import {reducersC} from '../Reducers/index'
import thunk from "redux-thunk";

export const storage = createStore(reducersC,compose(
    applyMiddleware(thunk),

))

storage.subscribe(()=>console.log(storage.getState()))
