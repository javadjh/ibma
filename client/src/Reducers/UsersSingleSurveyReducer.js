import { hideLoading, showLoading } from "react-redux-loading-bar"
import { getUsersSingleSurveyService } from "../APIConfig/surveyService"

export const UsersSingleSurveyReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_USER_SINGLE_SURVEY":
            return {...action.payload}
        default:
            return state
    }
}