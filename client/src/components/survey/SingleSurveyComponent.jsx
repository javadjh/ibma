import React, { Fragment, useEffect, useState } from 'react'
import { getSingleSurveyAdminAction } from '../../Actions/SurveysAction'
import { useDispatch, useSelector } from 'react-redux'
import ReactECharts from 'echarts-for-react'; 
import _ from 'lodash'

const SingleSurveyComponent = ({match})=>{
    const dispatch = useDispatch()
    const [isLoaded,setIsLoaded] = useState(false)
    const adminSurvey = useSelector(state => state.adminSurvey)
    const [optionChart,setOptionChart] = useState({})

    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getSingleSurveyAdminAction(match.params.id))
        setIsLoaded(true)
    }
    useEffect(() => {
        if(adminSurvey.pool!==undefined)
            chartInit()
    },[adminSurvey])
    const chartInit = ()=>{
        setOptionChart({
   
            title: {
              text: 'نتیجه نظرسنجی',
              left: 'center',
              top: 20,
              textStyle: {
                color: '#000000'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            visualMap: {
              show: false,
              min: 0,
              max: _.maxBy(adminSurvey.pool, 'value').value+4,
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
                data: adminSurvey.pool.sort(function (a, b) {
                  return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                  color: 'rgba(0, 0, 0)'
                },
                labelLine: {
                  lineStyle: {
                    color: 'rgba(0, 0, 0)'
                  },
                  smooth: 0.5,
                  length: 10,
                  length2: 20
                },
                itemStyle: {
                  color: '#c23531',
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
            {isLoaded?(
                <div className="container-fluid mt--8 text-right">
                    <div className="card shadow p-3 mb-2">
                    <ReactECharts
                        option={optionChart}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                    />
                    </div>
                <div className="row">
                    <div className="col">
                        <div className="card shadow p-3">
                            <span><b>عنوان</b> : {adminSurvey.title}</span>
                            <br/>
                            <span><b>توضیحات</b> : {adminSurvey.description}</span>
                            <br/>
                            <span><b>قبلیت چند انتخاب</b> : {adminSurvey.isMultiSelect?"بله":"خیر"}</span>
                            <br/>
                            <span><b>نمایش نتایج</b> : {adminSurvey.isShowResult?"بله":"خیر"}</span>
                            <br/>
                            <span><b>تاریخ آرشیو</b> : {adminSurvey.dateSendToArchive}</span>
                            <br/>
                            <span><b>تاریخ ایجاد</b> : {adminSurvey.createDate}</span>
                            <br/>
                            <span><b>گزینه ها</b></span>
                            {adminSurvey.options.map(o=>(
                                <span style={{color:"white",backgroundColor:"green",borderRadius:10,padding:5,margin:5}}>{o.title}</span>
                            ))}
                            
                        </div>
                        <div className="card shadow p-3 mt-2">
                            <br/>
                            <span><b>پاسخ ها</b></span>
                            {adminSurvey.answers.map(a=>(
                                <div style={{backgroundColor:"#f0f0f0",borderRadius:10,padding:20,margin:5}}>
                                    <p>{a.userId.name} {a.userId.lastName}</p>
                                    {adminSurvey.isMultiSelect?(
                                        <Fragment>
                                            {a.optionIds.map(ao=>(
                                            <span style={{color:"white",backgroundColor:"green",borderRadius:10,padding:5,margin:5}}>{ao.title}</span>
                                        ))}
                                        </Fragment>
                                    
                                    ):(
                                        <span style={{color:"white",backgroundColor:"green",borderRadius:10,padding:5,margin:5}}>{a.optionId.title}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            ):null}
        </Fragment>
    )
}
export default SingleSurveyComponent