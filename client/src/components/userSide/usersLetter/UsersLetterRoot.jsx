import React, {useEffect, useState,Fragment} from 'react'
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getUsersLetterAction} from "../../../Actions/LettersAction";
import LettersListComponent from "./LettersListComponent";

const UsersLetterRoot = ({history})=>{
    const usersLetterState = useSelector(state => state.usersLetter)
    const [pageId,setPageId] = useState(1)
    const [isLoaded,setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
        getUsersLetterData()
    },[pageId])
    const getUsersLetterData = async ()=>{
        await dispatch(getUsersLetterAction({
            pageId,
            eachPerPage:100
        }))
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
            <LettersListComponent isLoaded={isLoaded} usersLetterState={usersLetterState}/>


        </div>
    )
}
export default UsersLetterRoot
