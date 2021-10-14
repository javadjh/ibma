import React, { Fragment, useEffect, useState } from 'react'
import TopNavigation from '../../../utility/TopNavigation'
import {useDispatch, useSelector} from "react-redux";
import { getUsersSingleSurveyAction } from '../../../Actions/SurveysAction';
import { cardShadow } from '../styles/styles'
import { submitUsersSurveyService } from '../../../APIConfig/surveyService';
import { doneToast } from '../../../utility/ShowToast';
import ReactECharts from 'echarts-for-react'; 
import _ from 'lodash'

const SubmitUserSurveyComponent = ({history,match})=>{
    const dispatch = useDispatch()
    const [isLoaded,setIsLoaded] = useState(false)
    const [hasPool,setHasPool] = useState(false)
    const usersSingleSurvey = useSelector(state => state.usersSingleSurvey)
    const [optionIds,setOptionIds] = useState([])
    const [optionId,setOptionId] = useState()
    const [option,setOption] = useState({})
    useEffect(()=>{
        getDate()
    },[])
    const getDate = async ()=>{
        await dispatch(getUsersSingleSurveyAction(match.params.id))
        console.log(usersSingleSurvey)
        setIsLoaded(true)
        setHasPool(usersSingleSurvey.pool!==undefined && usersSingleSurvey.isShowResult)
    }
    const onChoiceRadio = (op)=>{
        setOptionId({title:op.title,optionId:op._id})
    }
    const onChoiceCheck = (op,isCheck)=>{
        console.log(isCheck)
        let dOptionIds = [...optionIds]
        if(isCheck)
            dOptionIds.push({title:op.title,optionId:op._id})
        else
            dOptionIds = dOptionIds.filter(dop=>dop.optionId!==op._id)
        setOptionIds(dOptionIds)
    }
    const handleSubmitUserSurvey = async ()=>{
        const {data,status} = await submitUsersSurveyService({id:usersSingleSurvey._id,title:usersSingleSurvey.title,optionId,optionIds})
        if(status===200){
            doneToast("با موفقیت ثبت شد")
            
            history.goBack()

        }
    }
    useEffect(() => {
        if(usersSingleSurvey.pool!==undefined)
            chartInit()
    },[usersSingleSurvey])
    const chartInit = ()=>{
        setOption({
   
            title: {
              text: 'نتیجه نظرسنجی',
              left: 'center',
              top: 20,
              textStyle: {
                color: '#FFFFFF'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            visualMap: {
              show: false,
              min: 0,
              max: _.maxBy(usersSingleSurvey.pool, 'value').value+4,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            series: [
              {
                name: 'اطلاعات ',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: usersSingleSurvey.pool.sort(function (a, b) {
                  return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                  color: 'rgba(255, 255, 255)'
                },
                labelLine: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255)'
                  },
                  smooth: 0.5,
                  length: 10,
                  length2: 20
                },
                itemStyle: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                  return Math.random() * 200;
                }
              }
            ]
          })
    }
    return(
        <Fragment>
            <TopNavigation history={history} title={"شرکت در نظر سنجی"}/>
            {usersSingleSurvey.pool!==undefined && usersSingleSurvey.isShowResult?(
                <ReactECharts
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
            />
            ):null}
            
            <div style={cardShadow}>
                <span style={{display:"block",marginBottom:5}}>عنوان : <b>{usersSingleSurvey.title}</b></span>
                {/* <span><b>توضیحات :</b>{usersSingleSurvey.description}</span> */}
                {isLoaded?(
                    <div>
                        
                    {!usersSingleSurvey.isMultiSelect?(
                        usersSingleSurvey.options.map((o)=>(
                            <div style={{display:"flex"}}>
                                <div className="custom-control custom-radio mb-3">
                                    <input name="custom-radio-1" className="custom-control-input" id={o._id} type="radio" onClick={()=>{
                                        onChoiceRadio(o)
                                    }}/>
                                    <label className="custom-control-label" htmlFor={o._id}><b>{o.title}</b></label>
                                </div>
                            </div>
                        ))
                    ):(
                        usersSingleSurvey.options.map((o)=>(
                            <div style={{display:"flex"}}>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id={o._id} onClick={(e)=>{
                                        onChoiceCheck(o,e.target.checked)
                                    }}/>
                                    <label class="custom-control-label" for={o._id}><b>{o.title}</b></label>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                ):null}
            </div>
            {usersSingleSurvey.isSubmited?(null):(
                <p onClick={()=>{
                    handleSubmitUserSurvey()
                 }} style={{marginTop:25,backgroundColor:"green",position: "fixed",
                     bottom: 0,color:"white",textAlign:"center",padding:10,width:"100%",marginBottom:0}}>ثبت نظرسنجی</p>
            )}
            
        </Fragment>
    )
}
export default SubmitUserSurveyComponent