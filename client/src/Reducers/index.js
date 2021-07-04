import {combineReducers} from "redux";
import {UserReducer} from "./UserReducer";
import {UsersReducer} from "./UsersReducer";
import {SingleUserReducer} from "./SingleUserReducer";
import {LettersReducer} from "./LettersReducer";
import {TurnsReducer} from "./TurnsReducer";
import {AdsBoardReducer} from "./AdsBoardReducer";
import {UsersPoolTurnReducer} from "./UsersPoolTurnReducer";
import {DateCheckPoolReducer} from "./DateCheckPoolReducer";
import {UsersLetterReducer} from "./UsersLetterReducer";
import {PaymentUserPageReducer} from "./PaymentUserPageReducer";
import {AdminDashboardReducer} from "./AdminDashboardReducer";
import {loadingBarReducer} from "react-redux-loading-bar";

export const reducersC = combineReducers({
    user:UserReducer,
    users:UsersReducer,
    singleUser:SingleUserReducer,
    letters:LettersReducer,
    turns:TurnsReducer,
    adsBoard:AdsBoardReducer,
    usersTurn:UsersPoolTurnReducer,
    dateCheckPool:DateCheckPoolReducer,
    usersLetter:UsersLetterReducer,
    paymentUser:PaymentUserPageReducer,
    adminDashboard:AdminDashboardReducer,
    loadingBar:loadingBarReducer
})
