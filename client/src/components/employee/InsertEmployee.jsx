import React, {useRef, useState} from "react";
import SimpleReactValidator from "simple-react-validator";
import {useDispatch} from "react-redux";
import {insertEmployeesAction} from "../../Actions/EmployeeAction";

const InsertEmployee = ({history})=>{
    const formValidator = useRef(new SimpleReactValidator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [role,setRole] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [,setValidator] = useState(null)

    const handleInsertEmployee = async ()=>{
        if(formValidator.current.allValid()){
            await dispatch(insertEmployeesAction({
                name,
                lastName,
                role,
                phoneNumber
            }))
            history.goBack()
        }else{
            setValidator(1)
            formValidator.current.showMessages()
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">افزودن کارمند به سامانه</h3>
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} onClick={handleInsertEmployee} className="btn btn-sm btn-primary p-3">افزودن کارمند</a>
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
                                        <label className="form-control-label" htmlFor="input-username">نقش</label>
                                        <input type="text" id="input-username"
                                               value={role}
                                               name={"role"}
                                               onChange={(e) =>{
                                                   setRole(e.target.value)
                                                   formValidator.current.showMessageFor("role")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="عنوان را وارد کنید"/>
                                    </div>
                                    {formValidator.current.message("role",role,"required|min:2|max:255")}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-homeNumber">شماره تماس</label>
                                        <input type="text" id="input-homeNumber"
                                               value={phoneNumber}
                                               name={"phoneNumber"}
                                               onChange={(e)=>{
                                                   setPhoneNumber(e.target.value)
                                                   formValidator.current.showMessageFor("phoneNumber")
                                               }}
                                               className="form-control form-control-alternative" placeholder="شماره تماس"/>
                                        {formValidator.current.message("phoneNumber",phoneNumber,"required|min:11|max:11")}

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-first-name">نام
                                        </label>
                                        <input type="text" id="input-first-name"
                                               name={"name"}
                                               value={name}
                                               onChange={(e)=>{
                                                   setName(e.target.value)
                                                   formValidator.current.showMessageFor("name")
                                               }}
                                               className="form-control form-control-alternative" placeholder="نام"/>
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
                    </form>
                </div>
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">
                        <div className="col-8">
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} onClick={handleInsertEmployee}className="btn btn-sm btn-primary p-3">افزودن کارمند</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InsertEmployee
