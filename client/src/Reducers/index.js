import {combineReducers} from "redux";
import {UserReducer} from "./UserReducer";
import {UsersReducer} from "./UsersReducer";

export const reducersC = combineReducers({
    user:UserReducer,
    users:UsersReducer
})
