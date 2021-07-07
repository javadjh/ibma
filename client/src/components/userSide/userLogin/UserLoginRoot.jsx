import React, {useEffect, useState} from "react";
import {initUser} from "../../../Actions/UserAction";
import {useDispatch} from "react-redux";

const inputStyle = {
    width:"100%",
    borderRadius:5,
    border:"none",
    padding:10,
    marginBottom:20
}
const UserLoginRoot = ({history})=>{
    const dispatch = useDispatch()
    const [phoneNumber,setPhoneNumber] = useState('')
    const [password,setPassword] = useState('')
    const handleUserLogin = async ()=>{
        const user = {
            phoneNumber,
            password
        }
        await dispatch(initUser(user))
        history.replace("/")
    }
    return(
        <div style={{
            display:"flex",
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            width:"100%",
            margin:0
        }}>
            <img style={{color:"white",textAlign:"center",width:"50%",marginBottom:50}} src={"./assets/img/splashlogo.png"}/>
            <form style={{width:"80%"}}>
                <input onChange={(e)=>{
                    setPhoneNumber(e.target.value)
                }} style={inputStyle} placeholder={"شماره تماس را وارد نمایید"} />
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} style={inputStyle} type={"password"} placeholder={"رمز عبور را وارد نمایید"} />
            </form>
            <p style={{
                color:"black",
                backgroundColor:"white",
                width:"100%",
                textAlign:"center",
                padding:10,
                position:"fixed",
                bottom:0,
                left:0,
                right:0,
                margin:0
            }} onClick={handleUserLogin}>
                ورود به حساب کاربری
            </p>
        </div>
    )
}
export default UserLoginRoot
