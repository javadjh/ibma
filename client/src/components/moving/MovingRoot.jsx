import React, {Fragment, useEffect, useState} from "react";
import SearchingSimpleInput from "../utilityComponent/SearchingSimpleInput";
import BillTable from "../bill/BillTable";
import {useDispatch, useSelector} from "react-redux";
import {getBillsAction, setSingleBillAction} from "../../Actions/BillsAction";
import MovingTable from "./MovingTable";
import {getAdminRebuildingAction} from "../../Actions/RebuildingAction";
import {getAdminMovingAction} from "../../Actions/MovingAction";
const MovingRoot = ()=>{
    const [pageId , setPageId] = useState(1)
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const dispatch = useDispatch()
    const moving = useSelector(state => state.adminMoving)
    useEffect(()=>{
        getData()
    },[pageId])
    const getData = async ()=>{
        await dispatch(getAdminMovingAction({
            pageId,
            eachPerPage: 10,
        }))
        setIsDataLoaded(true)

    }
    const handelPaging = (pageId)=>{
        setPageId(pageId)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">فهرست درخواست بازسازی ها</h3>
                            </div>
                            {isDataLoaded?(
                                <MovingTable moving={moving} handelPaging={handelPaging} />
                            ):null}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default MovingRoot
