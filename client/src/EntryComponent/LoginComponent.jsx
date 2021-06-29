import React, {Fragment, useState} from 'react'
import {useDispatch} from "react-redux";
import {initUser} from "../Actions/UserAction";
import {withRouter} from "react-router";

const LoginComponent = ({history})=>{
    const [phoneNumber,setPhoneNumber] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const loginHandle = async ()=>{
        console.log("test")
        const data = {
            phoneNumber,
            password
        }
        await dispatch(initUser(data))
        if(localStorage.getItem("token")){
            history.replace("/admin")
        }
    }
    return(
        <Fragment>
            <div className="main-content bg-gradient-primary" style={{width:"100%",height:"100vh"}}>

                <div className="header bg-gradient-primary py-6">
                    <div className="container">
                        <div className="header-body text-center">
                            <div className="row justify-content-center mb-5">
                                <div className="col-lg-5 col-md-6 mb-4">
                                    <h1 className="text-white">ورود به حساب کاربری</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container mt--8 pb-5 bg-gradient-primary" >
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary shadow border-0">

                                <div className="card-body px-lg-5 py-lg-5">
                                    <form role="form">
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-email-83"></i></span>
                                                </div>
                                                <input className="form-control" placeholder="شماره تماس خود را وارد کنید" type="phoneNumber"
                                                    onChange={(event => setPhoneNumber(event.target.value))}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input className="form-control" placeholder="کلمه عبرو" type="password"
                                                    onChange={event => setPassword(event.target.value)}/>
                                            </div>
                                        </div>
                                        <div
                                            className="custom-control custom-control-alternative custom-checkbox text-right">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                                            <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                <span className="text-muted">مرا به خاطر بسپار</span>
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary mt-4" onClick={()=>loginHandle()}>وارد شوید</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}
export default withRouter(LoginComponent)
