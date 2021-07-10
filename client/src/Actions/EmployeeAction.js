import {deleteEmployeeService, getEmployeeService, insertEmployeeService} from "../APIConfig/employeeService";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {doneToast} from "../utility/ShowToast";

export const getEmployeesAction = ()=>{
    return async (dispatch,state)=>{
        dispatch(showLoading())
        const {data,status} = await getEmployeeService()
        dispatch(hideLoading())
        if(status===200){
            dispatch({type:"INIT_EMPLOYEE",payload:data})
        }
    }
}
export const deleteEmployeesAction = (id)=>{
    return async (dispatch,state)=>{
        dispatch(showLoading())
        const {data,status} = await deleteEmployeeService(id)
        dispatch(hideLoading())
        if(status===200){
            dispatch(getEmployeesAction())
            doneToast("با موفقیت حذف شد")
        }
    }
}
export const insertEmployeesAction = (employee)=>{
    return async (dispatch,state)=>{
        dispatch(showLoading())
        const {data,status} = await insertEmployeeService(employee)
        dispatch(hideLoading())
        if(status===200){
            doneToast("با موفقیت اضافه شد")
        }
    }
}
