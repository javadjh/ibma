import React, {Fragment, useEffect, useState} from 'react'
import SearchingComponent from "../utilityComponent/SearchingComponent";
import UsersTable from "../users/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {getLetters} from "../../Actions/LettersAction";
import LettersTable from "./LettersTable";
import SearchingSimpleInput from "../utilityComponent/SearchingSimpleInput";

const LettersRoot =({history})=>{
    const [pageId , setPageId] = useState(1)
    const [searchValue , setSearchValue] = useState("")
    const [isDataLoaded,setIsDataLoaded] = useState(false)
    const dispatch = useDispatch()
    const letters = useSelector(state => state.letters)
    useEffect(()=>{
        getLettersData()
    },[pageId,searchValue])
    const getLettersData = async ()=>{
        await dispatch(getLetters({
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
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <SearchingSimpleInput onSearching={onSearching} />
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">لیست نامه های سامانه</h3>
                                <button onClick={(e)=>history.push('/insert/letter')} type="button" className="btn btn-primary my-4">افزودن نامه جدید</button>
                            </div>
                            {isDataLoaded?(
                                <LettersTable letters={letters}  handelPaging={handelPaging} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default LettersRoot
