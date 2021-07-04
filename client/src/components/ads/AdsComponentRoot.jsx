import React, {Fragment, useEffect, useState} from 'react'
import SearchingComponent from "../utilityComponent/SearchingComponent";
import UsersTable from "../users/UsersTable";
import AdsTable from "./AdsTable";
import {useDispatch, useSelector} from "react-redux";
import {deleteAdsBoardAction, getAdsBoardAction} from "../../Actions/AdsBoardAction";

const AdsComponentRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const ads = useSelector(state => state.adsBoard)

    useEffect(()=>{
        getAdsData()
    },[])
    const getAdsData = async ()=>{
        await dispatch(getAdsBoardAction())
        setIsLoaded(true)
    }

    const handleDeleteAd = async (id)=>{
        await dispatch(deleteAdsBoardAction(id))
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">لیست بنر های تبلیغاتی</h3>
                                <button type="button" className="btn btn-primary my-4" onClick={()=>{
                                    history.push("/insert/ads")
                                }}>افزودن بنر جدید</button>
                            </div>
                            {isLoaded?(
                                <AdsTable handleDeleteAd={handleDeleteAd} ads={ads} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AdsComponentRoot
