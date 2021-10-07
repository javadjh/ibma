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
import {BoardDirectorsReducer} from "./BoardDirectorsReducer";
import {EmployeeReducer} from "./EmployeeReducer";
import {ContractorReducer} from "./ContractorsReducer";
import {RulesReducer} from "./RulesReducer";
import {RuleReducer} from "./RuleReducer";
import {MeetingsReducer} from "./MeetingsReducer";
import {GalleryReducer} from "./GalleryReducer";
import {ResidentialUnitsReducer} from "./ResidentialUnitsReducer";
import {ResidentialUnitReducer} from "./ResidentialUnitReducer";
import {BillsReducer} from "./BillsReducer";
import {BillReducer} from "./BillReducer";
import {UserBillsReducer} from "./UserBillsReducer";
import {NotesReducer} from "./NotesReducer";
import {HomeNumbersReducer} from "./HomeNumbersReducer";
import {UsersRebuildingReducer} from "./UsersRebuildingReducer";
import {UserMovingReducer} from "./UserMovingReducer";
import {AdminRebuildingReducer} from "./AdminRebuildingReducer";
import {AdminMovingReducer} from "./AdminMovingReducer";
import {BusinessInformationReducer} from "./BusinessInformationReducer";
import {SingleBusinessInformationReducer} from "./SingleBusinessInformation";
import {SurveysReducer} from "./SurveysReducer";

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
    loadingBar:loadingBarReducer,
    boardDirector:BoardDirectorsReducer,
    employee:EmployeeReducer,
    contractors:ContractorReducer,
    rules:RulesReducer,
    rule:RuleReducer,
    meetings:MeetingsReducer,
    gallery:GalleryReducer,
    residentialUnits:ResidentialUnitsReducer,
    residentialUnit:ResidentialUnitReducer,
    bills:BillsReducer,
    bill:BillReducer,
    userBills:UserBillsReducer,
    notes:NotesReducer,
    homeNumbers:HomeNumbersReducer,
    usersRebuilding:UsersRebuildingReducer,
    usersMoving:UserMovingReducer,
    adminRebuilding:AdminRebuildingReducer,
    adminMoving:AdminMovingReducer,
    businessInformationAdmin:BusinessInformationReducer,
    singleBusinessInformation:SingleBusinessInformationReducer,
    surveys:SurveysReducer
})
