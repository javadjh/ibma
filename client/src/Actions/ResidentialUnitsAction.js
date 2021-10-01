import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getResidentialUnitsService, upsertResidentialUnitsService} from "../APIConfig/residentialUnitService";
import {doneToast} from "../utility/ShowToast";

export const getAllResidentialUnitsAction = (filter)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {data,status} = await getResidentialUnitsService(filter)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_RESIDENTIAL_UNITS",payload:data})
        }
    }
}
export const setSingleResidentialUnitsAction = (residentialUnit)=>{
    return async (dispatch,getState)=>{
        await dispatch({type:"INIT_RESIDENTIAL_UNIT",payload:residentialUnit})
    }
}
