import React, {Fragment, useEffect, useState} from 'react'
import SearchingComponent from "../utilityComponent/SearchingComponent";
import TurnsPoolComponent from "./TurnsPoolComponent";
import {useDispatch, useSelector} from "react-redux";
import {getTurnsAction} from "../../Actions/TurnsAction";
import dateFormat from 'dateformat'
import * as moment from 'moment-jalaali';
import 'moment-timezone';



const PoolRoot = ()=>{
    const [isLoadData,setIsLoadData] = useState(false)
    const [turnNumbers,setTurnNumbers] = useState("")
    const [turnDate,setTurnDate] = useState(dateFormat(new Date(), "yyyy-mm-dd"))
    const [pageId,setPageId] = useState(1)
    const [eachPerPage,setEachPerPage] = useState(12)
    const dispatch = useDispatch()
    const turns = useSelector(state => state.turns)
    useEffect(()=>{
        getTurnsData()
    },[turnNumbers,turnDate,pageId])

    const getTurnsData = async ()=>{
        const filter = {
            turnNumber:turnNumbers,
            turnDate,
            pageId,
            eachPerPage
        }
        await dispatch(getTurnsAction(filter))
        setIsLoadData(true)
    }

    const handleFilter=(s1,s2)=>{
        setTurnNumbers(s1)
    }

    const handelPaging = (page)=>{
        setPageId(page)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <SearchingComponent firstHint={"شماره نوبت"} secondHint={"تغییر تاریخ نوبت ها(12-10-1400)"} secondInputType={"text"}
                                    onSearching={handleFilter} />

                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">لیست نوبت های استخر</h3>
                            </div>
                            {isLoadData?(
                                <TurnsPoolComponent handelPaging={handelPaging} turns={turns}/>
                            ):null}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default PoolRoot
