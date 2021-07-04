import React, {useEffect, useState} from "react";
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getPaymentAction} from "../../../Actions/PaymentAction";
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
    marginBottom:15,
    marginLeft:15,
    marginRight:15,
    paddingRight:10,
    paddingLeft:10,
    marginTop:10,
    paddingTop:10,
    textAlign:"right"
}
const simpleText = {
    color:"black",
    paddingRight: 10,
    display:"block",
    paddingBottom:10
}
const UserPaymentRoot = ({history})=>{
    const [isLoaded,setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const paymentUser = useSelector(state => state.paymentUser)
    useEffect(()=>{
        getPaymentData()
    },[])
    const getPaymentData = async ()=>{
        await dispatch(getPaymentAction())
        setIsLoaded(true)
    }
    return(
        <div>
            <TopNavigation history={history}/>
            {isLoaded?(
                <div>
                    <div style={cardShadow}>
                        <a style={simpleText}>{`شماره واحد : ${paymentUser.user.homeNumber}`}</a>
                        <a style={simpleText}>{`نام : ${paymentUser.user.name}`}</a>
                        <a style={simpleText}>{`نام خانوادگی : ${paymentUser.user.lastName}`}</a>
                        <a style={simpleText}>{`شماره تماس : ${paymentUser.user.phoneNumber}`}</a>
                        <a style={simpleText}>{`نام کاربری : ${paymentUser.user.userName}`}</a>
                        <a style={simpleText}>{`آخرین پرداخت : ${paymentUser.daysCount} روز پیش`}</a>
                        <a style={simpleText}>{`مبلغ قابل پرداخت : ${paymentUser.payPrice}`}</a>
                        <a style={simpleText}>{paymentUser.user.canPay?(
                            "در انتظار پرداخت شارژ این ماه"
                        ):(
                            "هنوز موئد پرداخت این ماه نرسیده است"
                        )}</a>
                    </div>
                    <p  style={{
                        backgroundColor:"green",
                        color:"white",
                        textAlign:"center",
                        padding:10,
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        marginBottom:0
                    }}>{`مبلغ قابل پرداخت : ${paymentUser.payPrice}`}</p>
                </div>
            ):null}
        </div>

    )
}
export default UserPaymentRoot
