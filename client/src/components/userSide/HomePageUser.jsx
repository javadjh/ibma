import React, {Fragment, useEffect, useState} from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {useDispatch, useSelector} from "react-redux";
import {getAdsBoardAction} from "../../Actions/AdsBoardAction";
import CardInformation from "./CardInformation";
import AdsBoards from "./AdsBoards";
import {getNotesAction} from "../../Actions/AdminDashboardAction";

const cardShadow={
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderRadius:15,
    marginBottom:10,
    marginTop:5,
    marginLeft:15,
    marginRight:15,
    paddingRight:10,
    paddingLeft:10,
    textAlign:"right",
    paddingTop:5,
    paddingBottom:5
}
const circleBtn ={
    display:"inline",
    flex:1,
    backgroundColor: "white",
    borderRadius:80,
    marginLeft:20
}
const imgCircle={
    margin: 10,
    width:50,
    height:50,
    justifyContent:"center",
    marginTop:20,
    marginBottom:20
}
const setRowContainer ={
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    marginRight:20,
    textAlign: "center",
    marginTop: 2
}

const HomePageUser = ({history})=>{

    const dispatch = useDispatch()
    const ads = useSelector(state => state.adsBoard)
    const notes = useSelector(state => state.notes)


    useEffect(()=>{
        if(!localStorage.getItem("token"))
            return history.replace("/userlogin")
        getAdsData();
    },[])
    const getAdsData= async ()=>{
        await dispatch(getAdsBoardAction())
    }
    useEffect(()=>{
        if(localStorage.getItem("isShowNotes")==="no"){
            getData()
        }
    },[])
    const getData = async ()=>{
        await dispatch(getNotesAction())
    }
    const handleDismissNotes = ()=>{
        localStorage.setItem("isShowNotes","yes")
        setIsShowNotes("yes")
    }
    const [isShowNotes,setIsShowNotes] = useState(localStorage.getItem("isShowNotes"))
    return(
        <Fragment>
            {isShowNotes==="yes"?(
                <Fragment>
                    <div style={{display:"flex",
                        flex:1,
                        backgroundImage: "linear-gradient(45deg, #88898d, #484848)",
                        height:"100% !important",
                        paddingBottom:90,
                        flexDirection:"column"}}>
                        <CardInformation/>
                        <AdsBoards ads={ads}/>
                        <div style={{marginTop:20}} >
                            <div style={setRowContainer}>
                                <div style={circleBtn}  onClick={()=>{
                                    history.push("/pooluser")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/swimming.png"} />
                                </div>
                                <div style={circleBtn} onClick={()=>{
                                    history.push("/usersletter")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/mail.png"} />
                                </div>
                                <div style={circleBtn} onClick={()=>{
                                    history.push("/userpayment")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/credit-card.png"} />
                                </div>
                            </div>

                            <div style={setRowContainer}>
                                <p style={{
                                    fontSize: 12,
                                    color:"white",
                                    flex:1,
                                    marginRight:-10
                                }}>نوبت استخر</p>
                                <p style={{
                                    fontSize: 12,
                                    flex:1,
                                    color:"white",
                                }}>نامه ها</p>
                                <p style={{
                                    fontSize: 12,
                                    flex:1,
                                    color:"white",
                                    marginLeft:10
                                }}>پرداخت شارژ</p>
                            </div>
                        </div>
                        <div >
                            <div style={setRowContainer}>
                                <div style={circleBtn}  onClick={()=>{
                                    history.push("/useremployee")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/employee.png"} />
                                </div>
                                <div style={circleBtn} onClick={()=>{
                                    history.push("/userboarddirector")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/interview.png"} />
                                </div>
                                <div style={circleBtn} onClick={()=>{
                                    history.push("/usercontractor")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/worker.png"} />
                                </div>
                            </div>

                            <div style={setRowContainer}>
                                <p style={{
                                    fontSize: 12,
                                    color:"white",
                                    flex:1,
                                    marginRight:-10
                                }}>کارمندان</p>
                                <p style={{
                                    fontSize: 12,
                                    flex:1,
                                    color:"white",
                                }}>هیئت مدیره</p>
                                <p style={{
                                    fontSize: 12,
                                    flex:1,
                                    color:"white",
                                    marginLeft:10
                                }}>پیمانکاران</p>

                            </div>
                        </div>
                        <div >
                            <div style={setRowContainer}>
                                <div style={circleBtn}  onClick={()=>{
                                    history.push("/userrule")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/compliant.png"} />
                                </div>
                                <div style={circleBtn} onClick={()=>{
                                    history.push("/usergallery")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/gallery.png"} />
                                </div>
                                <div style={circleBtn} onClick={()=>{
                                    history.push("/userbill")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/invoice.png"} />
                                </div>
                            </div>

                            <div style={setRowContainer}>
                                <p style={{
                                    fontSize: 12,
                                    color:"white",
                                    flex:1,
                                    marginRight:-10
                                }}>قوانین و مقررات</p>
                                <p style={{
                                    fontSize: 12,
                                    flex:1,
                                    color:"white",
                                }}>تصاویر و ویدیو ها</p>
                                <p style={{
                                    fontSize: 12,
                                    flex:1,
                                    color:"white",
                                    marginLeft:10
                                }}>قبض ها</p>
                            </div>
                        </div>
                        <div >
                            <div style={setRowContainer}>
                                <div style={circleBtn}  onClick={()=>{
                                    history.push("/userrebuilding")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/toolbox.png"} />
                                </div>
                                <div style={circleBtn} onClick={()=>{
                                    history.push("/usermoving")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/moving-truck.png"} />
                                </div>
                                <div style={circleBtn} onClick={()=>{
                                    history.push("/userbusinessinformation")
                                }}>
                                    <img style={imgCircle} src={"./assets/img/telephone.png"} />
                                </div>
                            </div>

                            <div style={setRowContainer}>
                                <p style={{
                                    fontSize: 12,
                                    color:"white",
                                    flex:1,
                                    marginRight:-10
                                }}>بازسازی</p>
                                <p style={{
                                    fontSize: 12,
                                    flex:1,
                                    color:"white",
                                }}>اسباب کشی</p>
                                <p style={{
                                    fontSize: 12,
                                    flex:1,
                                    color:"white",
                                    marginLeft:10
                                }}>شماره تماس ها</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            ):(
                <div style={cardShadow}>
                    <div style={{marginTop:5}}><b>نکات تکمیلی برای افراد جدید الورود</b></div>
                    <div style={{marginTop:10,marginBottom:10}}>{notes.notes}</div>
                    <p
                        onClick={()=>{
                            handleDismissNotes()
                        }}
                        style={{backgroundColor:"red",display:"block",color:"white",marginLeft:-10,marginRight:-10,marginBottom:-6,
                        borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:7,textAlign:"center"}} target={"_blank"}>خواندم و دیگر نمایش نده</p>
                </div>
            )}
        </Fragment>
    )
}
export default HomePageUser
