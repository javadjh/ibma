import {getAllMeetingsService} from "../APIConfig/meetingService";
import {hideLoading, showLoading} from "react-redux-loading-bar";

export const getAllMeetings = (filter)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getAllMeetingsService(filter)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_MEETINGS",payload:data})
        }
    }
}
