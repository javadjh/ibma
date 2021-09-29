import React, {Fragment, useEffect, useState} from "react";
import RulesTable from "./RulesTable";
import {useDispatch, useSelector} from "react-redux";
import {getAllRules} from "../../Actions/RulesAction";
import {deleteRuleService} from "../../APIConfig/rulesService";
import {doneToast} from "../../utility/ShowToast";

const RulesRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const rules = useSelector(state => state.rules)
    const dispatch = useDispatch()
    const handleDeleteRule = async (id)=>{
        const {data,status} = await deleteRuleService(id)
        if(status===200){
            doneToast("با موفقیت حذف شد")
            await dispatch(getAllRules())
        }
    }
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getAllRules())
        setIsLoaded(true)
    }
    const handleUpsert = async (rule)=>{
        await dispatch({type:"INIT_RULE",payload:rule})
        history.push("/upsert/rule")
    }
    const handleUpsertIntent = async ()=>{
        await dispatch({type:"INIT_RULE",payload:{}})
        history.push("/upsert/rule")
    }
    return(
        <Fragment>
            <div className="container-fluid mt--8 text-right">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-header border-0">
                                <h3 style={{display:"inline" , marginLeft:"20px"}} className="mb-0">فهرست قوانین</h3>
                                <button type="button" className="btn btn-primary my-4" onClick={()=>{
                                    handleUpsertIntent()
                                }}>افزودن قانون جدید</button>
                            </div>
                            {isLoaded?(
                                <RulesTable handleDeleteRule={handleDeleteRule} rules={rules} handleUpsert={handleUpsert} />
                            ):null}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default RulesRoot
