import React, {Fragment, useEffect, useState} from "react";
import ContractorTable from "../contractor/ContractorTable";
import {useDispatch, useSelector} from "react-redux";
import {getAllContractors} from "../../Actions/ContractorsAction";
import BusinessInformationTable from "./BusinessInformationTable";
import {
    getAllBusinessInformationAction,
    singleBusinessInformationAction
} from "../../Actions/BusinessInformationAction";
const BusinessInformationRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const businessInformation = useSelector(state => state.businessInformationAdmin)
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getAllBusinessInformationAction())
        setIsLoaded(true)
    }
    const handleUpsertBusinessInformation = async (isUpdate,data)=>{
        console.log(isUpdate)
        console.log(data)
        if(isUpdate){
            await dispatch(singleBusinessInformationAction(data))
            history.push('/upsert/business/information')
        }else{
            await dispatch(singleBusinessInformationAction({}))
            history.push('/upsert/business/information')
        }
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">فهرست شماره تماس ها</h3>
                                <button type="button" className="btn btn-primary my-4" onClick={()=>{
                                    handleUpsertBusinessInformation(false,{})
                                }}>افزودن شماره تماس جدید</button>
                            </div>
                            {isLoaded?(
                                <BusinessInformationTable businessInformation={businessInformation} handleUpsertBusinessInformation={handleUpsertBusinessInformation} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default BusinessInformationRoot
