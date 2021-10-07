import React, {Fragment, useEffect} from "react";
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllBusinessInformationAction,
    singleBusinessInformationAction
} from "../../../Actions/BusinessInformationAction";
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
const imageBtnStyle={
    width:50,
    height:50,
    borderRadius: 50,
    padding:10,
    backgroundColor: "green",
    position: "fixed",
    bottom: 10,
    left:10
}
const UserBusinessInformationRoot = ({history})=>{
    const handleUpsertBusinessInformation = async (isUpdate,data)=>{
        if(isUpdate){
            await dispatch(singleBusinessInformationAction(data))
            history.push('/userupsertbusinessinformation')
        }else{
            await dispatch(singleBusinessInformationAction({}))
            history.push('/userupsertbusinessinformation')
        }
    }
    const businessInformationAdmin = useSelector(state => state.businessInformationAdmin)
    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getAllBusinessInformationAction())
    }
    return(
        <Fragment>
            <TopNavigation title={"شماره های پیشنهادی"} history={history}/>
            {businessInformationAdmin.map(bi=>(
                <div style={cardShadow}>
                    <div style={{marginTop:5}}><b>{bi.title}</b></div>
                    <div style={{marginTop:5}}>آدرس : {bi.address}</div>
                    <div style={{marginTop:5,color:"blue"}} onClick={()=>{
                        handleUpsertBusinessInformation(true,bi)
                    }} hidden={!bi.canEdit}>ویرایش </div>
                    <a style={{backgroundColor:"green",marginTop:20,display:"block",color:"white",marginLeft:-10,marginRight:-10,marginBottom:-6,
                        borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:7,textAlign:"center"}} href={`tel:${bi.tel}`} target={"_blank"}>تماس</a>
                </div>
            ))}
            <img onClick={()=>{
                handleUpsertBusinessInformation(false,{})
            }} style={imageBtnStyle} src={"./assets/img/plus.png"} />
        </Fragment>
    )
}
export default UserBusinessInformationRoot
