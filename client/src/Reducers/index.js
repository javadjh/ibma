import {combineReducers} from "redux";
import {UserReducer} from "./UserReducer";

export const reducersC = combineReducers({
    user:UserReducer
})
