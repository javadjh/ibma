import {hideLoading, showLoading} from "react-redux-loading-bar";
import {getAllMainCategoryService, getMainsCategoryService} from "../APIConfig/categoryService";

export const getAllMainCategory = ()=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getAllMainCategoryService()
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_MAIN_CATEGORY",payload:data})
        }
    }
}
export const getMainsCategoryAction = (id)=>{
    return async (dispatch,getState)=>{
        await dispatch(showLoading())
        const {status,data} = await getMainsCategoryService(id)
        await dispatch(hideLoading())
        if(status===200){
            await dispatch({type:"INIT_MAIN_CATEGORY",payload:data})
        }
    }
}
