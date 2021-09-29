import React, {Fragment, useEffect, useState} from "react";
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getAllContractors} from "../../../Actions/ContractorsAction";
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
const UserContractorRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const contractors = useSelector(state => state.contractors)
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getAllContractors())
        setIsLoaded(true)
    }
    return(
        <Fragment>
            <TopNavigation title={"فهرست پیمانکاران"} history={history}/>
            {isLoaded?(
                <Fragment>
                    {contractors.map(contractor=>(
                        <div style={cardShadow}>
                            <div style={{marginTop:5}}>نام : <b>{contractor.fullName}</b></div>
                            <div style={{marginTop:5}}>شغل : <b>{contractor.job}</b></div>
                            <div style={{marginTop:5}}>{contractor.description}</div>
                            <a href={`tel:${contractor.phoneNumber}`} style={{backgroundColor:"green",display:"block",color:"white",marginLeft:-10,marginRight:-10,marginBottom:-6,
                                borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:7,textAlign:"center"}}>تماس : {contractor.phoneNumber}</a>
                        </div>
                    ))}
                </Fragment>
            ):null}

        </Fragment>
    )
}
export default UserContractorRoot
