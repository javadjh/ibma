import React, {Fragment, useEffect, useState} from "react";
import ContractorTable from "./ContractorTable";
import {useDispatch, useSelector} from "react-redux";
import {getAllContractors} from "../../Actions/ContractorsAction";
const ContractorRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const contractors = useSelector(state => state.contractors)
    const handleDeleteContractor = ()=>{

    }
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getAllContractors())
        setIsLoaded(true)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">فهرست پیمانکاران</h3>
                                <button type="button" className="btn btn-primary my-4" onClick={()=>{
                                    history.push("/insert/contractor")
                                }}>افزودن پیمانکار جدید</button>
                            </div>
                            {isLoaded?(
                                <ContractorTable contractors={contractors} handleDeleteContractor={handleDeleteContractor} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ContractorRoot
