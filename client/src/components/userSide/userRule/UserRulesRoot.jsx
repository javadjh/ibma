import react, {Fragment, useEffect, useState} from 'react'
import TopNavigation from "../../../utility/TopNavigation";
import React from "react";
import UserRulesTableComponent from "./UserRulesTableComponent";
import {useDispatch, useSelector} from "react-redux";
import {getAllRules} from "../../../Actions/RulesAction";

const UserRulesRoot = ({history})=>{
    const rules = useSelector(state => state.rules)
    const [isLoaded,setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getAllRules())
        setIsLoaded(true)

    }
    return(
        <div>
            <TopNavigation history={history} title={"قوانین و مقررات"}/>
            {isLoaded?(
                <UserRulesTableComponent rules={rules}/>
            ):null}
        </div>
    )
}
export default UserRulesRoot
