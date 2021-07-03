import React, {useEffect, useState,Fragment} from 'react'
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getUsersLetterAction} from "../../../Actions/LettersAction";
const cardShadow={
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderRadius:15,
    marginBottom:10,
    marginTop:5,
    marginLeft:15,
    marginRight:15,
    paddingRight:10,
    paddingLeft:10,
    textAlign:"right",
    paddingTop:5,
    paddingBottom:5
}
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

            {isLoaded?usersLetterState.map(letter=>(
                <div style={cardShadow}>
                    <a style={{display:"block",marginTop:10,fontSize:16,fontWeight:"bold"}}>{`عنوان : ${letter.title}`}</a>
                    <a style={{display:"block",marginTop:5}}>{`تاریخ انتشار : ${letter.createDate}`}</a>
                    <a style={{display:"block",marginTop:5 ,marginBottom:10}}>{`متن : ${letter.message}`}</a>
                    {letter.target==="user"?(
                        <div>
                            <hr/>
                            <a style={{display:"block",marginTop:-25,color:"red"}}>این نامه به صورت خصوصی میباشد</a>
                        </div>

                    ):null}
                </div>
            )):null}

        </div>
    )
}
export default UsersLetterRoot
