import React, {Fragment, useEffect, useState} from "react";
import BusinessInformationTable from "../businessInformation/BusinessInformationTable";
import {useDispatch, useSelector} from "react-redux";
import {getAllSurveysAdmin} from "../../Actions/SurveysAction";
import SurveysTable from "./SurveysTable";
const SurveyRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const surveys = useSelector(state => state.surveys)
    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getAllSurveysAdmin())
        setIsLoaded(true)
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">فهرست نظرسنجی ها</h3>
                                <button type="button" className="btn btn-primary my-4" onClick={()=>{
                                    history.push('/insert/survey')
                                }}>افزودن نظرسنجی جدید</button>
                            </div>
                            {isLoaded?(
                                <SurveysTable surveys={surveys} history={history} />
                            ):null}

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default SurveyRoot
