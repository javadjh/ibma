import {combineReducers} from "redux";
import {UserReducer} from "./UserReducer";
import {UsersReducer} from "./UsersReducer";
import {SingleUserReducer} from "./SingleUserReducer";
import {LettersReducer} from "./LettersReducer";
import {TurnsReducer} from "./TurnsReducer";

export const reducersC = combineReducers({
    user:UserReducer,
    users:UsersReducer,
    singleUser:SingleUserReducer,
    letters:LettersReducer,
    turns:TurnsReducer
})
