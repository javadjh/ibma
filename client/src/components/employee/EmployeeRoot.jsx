import React, {Fragment, useEffect, useState} from "react";
import BoardDirectorTable from "../boarddirector/BoardDirectorTable";
import EmployeeTable from "./EmployeeTable";
import {useDispatch, useSelector} from "react-redux";
import {deleteEmployeesAction, getEmployeesAction} from "../../Actions/EmployeeAction";

const EmployeeRoot = ({history})=>{
    const dispatch = useDispatch()
    const employees = useSelector(state => state.employee)
    const [isLoaded,setIsLoaded] = useState(false)
    useEffect(()=>{
        getEmployeeData()
    },[])

    const getEmployeeData= async ()=>{
        await dispatch(getEmployeesAction())
        setIsLoaded(true)
    }

    const handleDeleteEmployee = async (id)=>{
        await dispatch(deleteEmployeesAction(id))
    }
    return(
        <Fragment>
            <Fragment>
                <div className="container-fluid mt--8 text-right">
                    {/*<SearchingSimpleInput />*/}
                    <div className="row">
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-header border-0">
                                    <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">لیست کارمندان</h3>
                                    <button onClick={()=>history.push('/insert/employee')} type="button" className="btn btn-primary my-4">افزودن کارمند</button>
                                </div>
                                {isLoaded?(
                                    <EmployeeTable employees={employees} handleDeleteEmployee={handleDeleteEmployee}/>
                                ):null}

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </Fragment>
    )
}
export default EmployeeRoot
