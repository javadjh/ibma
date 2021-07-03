import React, {Fragment, useEffect} from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {useDispatch, useSelector} from "react-redux";
import {getAdsBoardAction} from "../../Actions/AdsBoardAction";
import CardInformation from "./CardInformation";
import AdsBoards from "./AdsBoards";


const HomePageUser = ({history})=>{

    const dispatch = useDispatch()
    const ads = useSelector(state => state.adsBoard)

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
    }

    useEffect(()=>{
        getAdsData();
    },[])
    const getAdsData= async ()=>{
        await dispatch(getAdsBoardAction())
    }
    return(
        <Fragment>
            <CardInformation/>
            <AdsBoards ads={ads}/>
            <div style={{marginTop:20}}>
                <div style={setRowContainer} onClick={()=>{
                    history.push("/pooluser")
                }}>
                    <div style={circleBtn}>
                        <img style={imgCircle} src={"./assets/img/swimming.png"} />
                    </div>
                    <div style={circleBtn}>
                        <img style={imgCircle} src={"./assets/img/swimming.png"} />
                    </div>
                    <div style={circleBtn}>
                        <img style={imgCircle} src={"./assets/img/swimming.png"} />
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
                    }}>نوبت استخر</p>
                    <p style={{
                        fontSize: 12,
                        flex:1,
                        color:"white",
                        marginLeft:15
                    }}>نوبت استخر</p>
                </div>
            </div>
            <img style={{
                position:"fixed",
                bottom:0,
                maxHeight:85,
                width:"100%"
            }} src={"./assets/img/foter.png"}/>
        </Fragment>
    )
}
export default HomePageUser