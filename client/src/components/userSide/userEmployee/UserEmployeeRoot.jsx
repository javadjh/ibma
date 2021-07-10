import React, {useEffect, useState} from "react";
import TopNavigation from "../../../utility/TopNavigation";
import LettersListComponent from "../usersLetter/LettersListComponent";
import EmployeeListComponent from "./EmployeeListComponent";
import {useDispatch, useSelector} from "react-redux";
import {getEmployeesAction} from "../../../Actions/EmployeeAction";

const UserEmployeeRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const userEmployees = useSelector(state => state.employee)
    const dispatch = useDispatch()
    useEffect(()=>{
        getEmployeesData()
    },[])
    const getEmployeesData = async ()=>{
        await dispatch(getEmployeesAction())
        setIsLoaded(true)
    }
    return(
        <div style={{
            display:"flex",
            flex:1,
            backgroundImage: "linear-gradient(45deg, #88898d, #484848)",
            height:"100% !important",
            flexDirection:"column"
        }}>
            <TopNavigation history={history}/>
            <EmployeeListComponent isLoaded={isLoaded} usersEmployeeState={userEmployees}/>


        </div>
    )
}
export default UserEmployeeRoot
