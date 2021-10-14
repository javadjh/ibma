import React, { Fragment,useEffect } from 'react'
import { cardShadow } from '../styles/styles'
import TopNavigation from "../../../utility/TopNavigation"
import { clearUsersSingleSurveyAction, getUsersSurveysAction } from '../../../Actions/SurveysAction'
import {useDispatch, useSelector} from "react-redux";
import PageInitComponent from '../mainComponent/PageInitComponent';

const GetAkkUsersSurvey = ({history})=>{
    const dispatch = useDispatch()
    const surveys = useSelector(state => state.surveys)
    useEffect(() => {
        getData()
    }, [])
    const getData = async ()=>{
        await dispatch(getUsersSurveysAction())
    }
    const handleIntent = async (s)=>{
        await dispatch(clearUsersSingleSurveyAction())
        history.push(`/submitusersurvey${s._id}`)
    }
    return(
        <PageInitComponent>
            <TopNavigation title={"فهرست نظرسنجی ها"} history={history}/>
            {surveys.map(s=>(
                <div style={cardShadow}>
                <span style={{display:"block",marginBottom:7,marginTop:5}}><b>موضوع : </b>{s.title}</span>
                <span style={{display:"block",marginBottom:7,marginTop:5}}><b>مهلت تا : </b>{s.dateSendToArchive}</span>
                <span style={{display:"block",marginBottom:7,marginTop:5}}><b>ایجاد : </b> 1378/10/12 </span>
                <span><b>توضیحات : </b>{s.description}</span>
                {!s.isSubmited?(
                    <a
                    onClick={()=>{
                        handleIntent(s)
                        
                    }}
                     style={{backgroundColor:"green",marginTop:20,display:"block",color:"white",marginLeft:-10,marginRight:-10,marginBottom:-6,
                            borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:7,textAlign:"center"}} >شرکت در نظرسنجی</a>
                ):s.isShowResult?(
                    <a
                onClick={()=>{
                    handleIntent(s)
                }}
                 style={{backgroundColor:"royalblue",marginTop:20,display:"block",color:"white",marginLeft:-10,marginRight:-10,marginBottom:-6,
                        borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:7,textAlign:"center"}}>نمایش نتایج</a>
                ):null}
            </div>
        
            ))}        
        </PageInitComponent>
    
    )
}
export default GetAkkUsersSurvey