import React, {Fragment, useEffect, useState} from "react";
import SearchingSimpleInput from "../utilityComponent/SearchingSimpleInput";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllResidentialUnitsAction,
    setSingleResidentialUnitsAction
} from "../../Actions/ResidentialUnitsAction";
import ResidentialUnitsTable from "./ResidentialUnitsTable";
const ResidentialUnitsRoot = ({history})=>{
    const [pageId , setPageId] = useState(1)
    const [searchValue , setSearchValue] = useState("")
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const dispatch = useDispatch()
    const residentialUnits = useSelector(state => state.residentialUnits)
    useEffect(()=>{
        getLettersData()
    },[pageId,searchValue])
    const getLettersData = async ()=>{
        await dispatch(getAllResidentialUnitsAction({
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
    const handleUpdateResidentialUnit = async (ru)=>{
        await dispatch(setSingleResidentialUnitsAction(ru))
        await history.push("/upsert/residential/unit")
    }
    const handleClearResidentialUnit = async ()=>{
        await dispatch(setSingleResidentialUnitsAction({}))
        history.push('/upsert/residential/unit')
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <SearchingSimpleInput onSearching={onSearching} title={"جست و جوی واحد"} hint={"شماره واحد را وارد کنید..."} />
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">فهرست واحد های سامانه</h3>
                                <button onClick={(e)=>handleClearResidentialUnit()} type="button" className="btn btn-primary my-4">افزودن واحد جدید</button>
                            </div>
                            {isDataLoaded?(
                                <ResidentialUnitsTable residentialUnits={residentialUnits} handelPaging={handelPaging} handleUpdateResidentialUnit={handleUpdateResidentialUnit} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ResidentialUnitsRoot
