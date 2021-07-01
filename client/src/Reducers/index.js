import {combineReducers} from "redux";
import {UserReducer} from "./UserReducer";
import {UsersReducer} from "./UsersReducer";
import {SingleUserReducer} from "./SingleUserReducer";

export const reducersC = combineReducers({
    user:UserReducer,
    users:UsersReducer,
    singleUser:SingleUserReducer
})
