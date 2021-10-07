import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLetters} from "../../Actions/LettersAction";
import SearchingSimpleInput from "../utilityComponent/SearchingSimpleInput";
import BillTable from "./BillTable";
import {getBillsAction, setSingleBillAction} from "../../Actions/BillsAction";
const BillRoot = ({history})=>{
    const [pageId , setPageId] = useState(1)
    const [searchValue , setSearchValue] = useState("")
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const dispatch = useDispatch()
    const bills = useSelector(state => state.bills)
    useEffect(()=>{
        getData()
    },[pageId,searchValue])
    const getData = async ()=>{
        await dispatch(getBillsAction({
            pageId,
            eachPerPage: 10,
            searchValue
        }))
        setIsDataLoaded(true)

    }
    const handelPaging = (pageId)=>{
        setPageId(pageId)
    }
    const onSearching = (s1)=>{
        setSearchValue(s1)
    }
    const handleUpsertIntent = async (bill)=>{
        await dispatch(setSingleBillAction(bill))
        history.push('/upsert/bill')
    }
    const clearBill = async ()=>{
        await dispatch(setSingleBillAction({}))
        history.push('/upsert/bill')
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <SearchingSimpleInput onSearching={onSearching} hint={"شماره واحد را وارد کنید..."} title={"شماره واحد"}/>
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">فهرست قبض ها</h3>
                                <button onClick={()=>{
                                    clearBill()
                                }} type="button" className="btn btn-primary my-4">افزودن قبض جدید</button>
                            </div>
                            {isDataLoaded?(
                                <BillTable bills={bills} handleUpsertIntent={handleUpsertIntent} handelPaging={handelPaging} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default BillRoot
