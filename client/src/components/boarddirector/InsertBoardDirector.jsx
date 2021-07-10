import React, {useRef, useState} from "react";
import SimpleReactValidator from "simple-react-validator";
import {useDispatch} from "react-redux";
import {insertBoardDirector} from "../../Actions/BoardDireactorAction";

const InsertBoardDirector = ({history})=>{
    const formValidator = useRef(new SimpleReactValidator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const dispatch = useDispatch()

    const [name,setName] = useState()
    const [lastName,setLastName] = useState('')
    const [homeNumber,setHomeNumber] = useState('')
    const [title,setTitle] = useState('')
    const [,setValidator] = useState(null)


    const handleInsertBoardDirector = async ()=>{
        if(formValidator.current.allValid()){
            await dispatch(insertBoardDirector({
                name,lastName,homeNumber,title
            }))
            history.goBack()
        }else{
            formValidator.current.showMessages()
            setValidator(1)
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">افزودن عضو به سامانه</h3>
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} onClick={handleInsertBoardDirector} className="btn btn-sm btn-primary p-3">افزودن عضو</a>
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
                                        <label className="form-control-label" htmlFor="input-username">عنوان</label>
                                        <input type="text" id="input-username"
                                               value={title}
                                               name={"title"}
                                               onChange={(e) =>{
                                                   setTitle(e.target.value)
                                                   formValidator.current.showMessageFor("userName")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="عنوان را وارد کنید"/>
                                    </div>
                                    {formValidator.current.message("title",title,"required|min:2|max:255")}
                                </div>
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
                                            {formValidator.current.message("homeNumber",homeNumber,"number|required")}

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
                            <a style={{color:"white"}} onClick={handleInsertBoardDirector}className="btn btn-sm btn-primary p-3">افزودن عضو</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InsertBoardDirector
