import React, {Fragment, useEffect, useState} from 'react'
import RulesTable from "../rules/RulesTable";
import MeetingTable from "./MeetingTable";
import {useDispatch, useSelector} from "react-redux";
import {getAllMeetings} from "../../Actions/MeetingsAction";
const MeetingRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const [pageId,setPageId] = useState(1)
    const [eachPerPage,setEachPerPage] = useState(12)
    const meetings = useSelector(state => state.meetings)
    const dispatch = useDispatch()
    const handelPaging = (pageId)=>{
        setPageId(pageId)
    }
    useEffect(()=>{
        getDate()
    },[])

    useEffect(()=>{
        getDate()
    },[pageId])
    const getDate = async ()=>{
        await dispatch(getAllMeetings({pageId,eachPerPage}))
        setIsLoaded(true)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">فهرست صورتحساب ها</h3>
                                <button type="button" className="btn btn-primary my-4" onClick={()=>{
                                    history.push("/insert/meeting")
                                }}>افزودن صورتحساب جدید</button>
                            </div>
                            {isLoaded?(
                                <MeetingTable meetings={meetings} handelPaging={handelPaging} />
                            ):null}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default MeetingRoot
