import React, {useEffect, useRef, useState} from 'react'
import validator from 'simple-react-validator'
import {useDispatch, useSelector} from "react-redux";
import {clearUserSingle, getUserSingle, upsertUser} from "../../Actions/UserAction";

const UpsertUserComponent = ({history,match})=>{
    const userId = match.params.id
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const dispatch = useDispatch()
    const [userName,setUserName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")
    const [homeNumber,setHomeNumber] = useState("")
    const [password,setPassword] = useState("")
    const [,setValidat] = useState(null)
    const user = useSelector(state => state.singleUser)
    console.log("**************************************************")
    console.log(user)
    const handleAddUser = async ()=>{
        if(formValidator.current.allValid()) {
            let user = {}
            if (userId === undefined) {
                user = {
                    userName,
                    phoneNumber,
                    name,
                    lastName,
                    homeNumber,
                    password
                }
            } else {
                user = {
                    id: userId,
                    userName,
                    phoneNumber,
                    name,
                    lastName,
                    homeNumber,
                }
            }
            await dispatch(upsertUser(user))
            history.goBack()
        } else{
            setValidat(1)
            formValidator.current.showMessages()
        }
    }
    useEffect(()=>{
        if(userId!==undefined){
            getSingleUser()
        }
    },[])

    useEffect(()=>{
        if(userId!==undefined) {
            setUserName(user.userName)
            setPhoneNumber(user.phoneNumber)
            setName(user.name)
            setLastName(user.lastName)
            setHomeNumber(user.homeNumber)
        }
    },[user])


    const getSingleUser= async ()=>{
        await dispatch(clearUserSingle())
        await dispatch(getUserSingle(userId))


    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">افزودن کاربر به سامانه</h3>
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} onClick={()=>{
                                handleAddUser()
                            }} className="btn btn-sm btn-primary p-3">افزودن کاربر</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <h6 className="heading-small text-muted mb-4">اطلاعات کاربر</h6>
                        <div className="pl-lg-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-username">نام
                                            کاربری</label>
                                        <input type="text" id="input-username"
                                               value={userName}
                                               name={"userName"}
                                               onChange={(e) =>{
                                                   setUserName(e.target.value)
                                                   formValidator.current.showMessageFor("userName")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="نام کاربری"/>
                                    </div>
                                    {formValidator.current.message("userName",userName,"required|min:3|max:50")}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-phone">شماره تماس</label>
                                        <input type="phone" id="input-phone"
                                               name={"phoneNumber"}
                                               value={phoneNumber}
                                               onChange={(e)=>{
                                                   setPhoneNumber(e.target.value)
                                                   formValidator.current.showMessageFor("phoneNumber")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="09165000126"/>
                                    </div>
                                    {formValidator.current.message("phoneNumber",phoneNumber,"min:11|max:11|required")}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-first-name">نام
                                            کوچک</label>
                                        <input type="text" id="input-first-name"
                                               name={"name"}
                                               value={name}
                                               onChange={(e)=>{
                                                   setName(e.target.value)
                                                   formValidator.current.showMessageFor("name")
                                               }}
                                               className="form-control form-control-alternative" placeholder="نام کوچک"/>
                                    </div>
                                    {formValidator.current.message("name",name,"required|min:2|max:100")}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-last-name">نام
                                            خانوادگی</label>
                                        <input type="text" id="input-last-name"
                                               value={lastName}
                                               name={"lastName"}
                                               onChange={(e)=>{
                                                   setLastName(e.target.value)
                                                   formValidator.current.showMessageFor("lastName")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="نام خانوادگی"/>
                                    </div>
                                    {formValidator.current.message("lastName",lastName,"required|min:2|max:100")}
                                </div>
                            </div>
                        </div>
                        <hr className="my-4"/>
                        <h6 className="heading-small text-muted mb-4">اطلاعات تکمیلی</h6>
                        <div className="pl-lg-4">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-homeNumber">شماره واحد</label>
                                        <input type="number" id="input-homeNumber"
                                               value={homeNumber}
                                               name={"homeNumber"}
                                               onChange={(e)=>{
                                                   setHomeNumber(e.target.value)
                                                   formValidator.current.showMessageFor("homeNumber")
                                               }}
                                               className="form-control form-control-alternative" placeholder="شماره واحد"/>
                                    </div>
                                    {formValidator.current.message("homeNumber",homeNumber,"number|required")}
                                </div>
                                {userId===undefined?(
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-password">کلمه عبور</label>
                                            <input type="password" id="input-password"
                                                   value={password}
                                                   name={"password"}
                                                   onChange={(e)=>{
                                                       setPassword(e.target.value)
                                                       formValidator.current.showMessageFor("password")
                                                   }}
                                                   className="form-control form-control-alternative"/>
                                        </div>
                                        {formValidator.current.message("password",password,"required|min:8|max:50")}
                                    </div>
                                ):null}

                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">
                        <div className="col-8">
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} onClick={()=>{
                                handleAddUser()
                            }} className="btn btn-sm btn-primary p-3">افزودن کاربر</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpsertUserComponent
