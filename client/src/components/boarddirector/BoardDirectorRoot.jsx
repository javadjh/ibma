import React, {Fragment, useEffect, useState} from "react";
import SearchingSimpleInput from "../utilityComponent/SearchingSimpleInput";
import LettersTable from "../letters/LettersTable";
import BoardDirectorTable from "./BoardDirectorTable";
import {useDispatch, useSelector} from "react-redux";
import {deleteBoardDirector, getBoardDirectors} from "../../Actions/BoardDireactorAction";

const BoardDirectorRoot = ({history})=>{
    const [isLoaded,setIsLoaded ] = useState(false)
    const dispatch = useDispatch()
    const boardDirector = useSelector(state => state.boardDirector)
    useEffect(()=>{
        getBoardDirectorData()
    },[])

    const getBoardDirectorData= async ()=>{
        await dispatch(getBoardDirectors())
        setIsLoaded(true)
    }

    const handleDeleteBoardDirector= async (id)=>{
        console.log(id)

        await dispatch(deleteBoardDirector(id))
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
                                    <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">لیست اعضای هیئت مدیره</h3>
                                    <button onClick={()=>history.push('/insert/boarddirector')} type="button" className="btn btn-primary my-4">افزودن عضو</button>
                                </div>
                                {isLoaded?(
                                    <BoardDirectorTable boardDirectors={boardDirector} handleDeleteBoardDirector={handleDeleteBoardDirector}/>):null}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        </Fragment>
    )
}
export default BoardDirectorRoot
