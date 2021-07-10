import React, {useEffect, useState} from "react";
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getBoardDirectors} from "../../../Actions/BoardDireactorAction";
import BoardDirectorListComponent from "./BoardDirectorListComponent";

const UserBoardDirectorRoot=({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const boardDirectors = useSelector(state => state.boardDirector)
    useEffect(()=>{
        getBoardDirectorsData()
    },[])
    const getBoardDirectorsData = async ()=>{
        await dispatch(getBoardDirectors())
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
            <BoardDirectorListComponent isLoaded={isLoaded} boardDirectorsState={boardDirectors}/>


        </div>
    )
}
export default UserBoardDirectorRoot
