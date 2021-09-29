import React, {useEffect, useState,Fragment} from 'react'
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getUsersLetterAction} from "../../../Actions/LettersAction";
import LettersListComponent from "./LettersListComponent";
import {setSeenLetterService} from "../../../APIConfig/letterService";
const cardShadow={
    backgroundColor:"#e5e5e5",
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
    const [letter,setLetter] = useState({})
    const [isShowDetail,setIsShowDetail] = useState(false)
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
    const handleShowLetterDetail = async (letter)=>{
        const {status} = await setSeenLetterService(letter._id)
        if(status===200){
            setLetter(letter)
            setIsShowDetail(true)
        }
    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
            {isShowDetail?(
                <Fragment>
                    <div style={cardShadow}>
                        <span><b>توضیحات : <p>{letter.message}</p></b></span>
                        {letter.file?(
                            <a href={`/${letter.file}`} style={{backgroundColor:"green",display:"block",color:"white",marginLeft:-10,marginRight:-10,marginBottom:-6,
                                borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:7,textAlign:"center"}}>دانلود فایل</a>
                        ):null}
                    </div>
                    <hr style={{backgroundColor:"white",width:"100%",height:1,marginTop:10,marginBottom:10}}/>
                </Fragment>

            ):null}
            <LettersListComponent isLoaded={isLoaded} usersLetterState={usersLetterState} handleShowLetterDetail={handleShowLetterDetail} topFunction={topFunction}/>


        </div>
    )
}
export default UsersLetterRoot
