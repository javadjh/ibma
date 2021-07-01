import React, {useRef, useState} from 'react'
import validator from "simple-react-validator";
import {useDispatch} from "react-redux";
import {addLetter} from "../../Actions/LettersAction";

const InsertLetter = ({history,match})=>{
    const [title,setTitle] = useState('')
    const [message,setMessage] = useState('')
    const [,setValidatorValid] = useState(null)
    const userId = match.params.id
    console.log(userId)
    const [letterTarget,setLetterTarget] = useState(userId?"user":"all")
    const dispatch = useDispatch()
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))

    const handleAddLetter = async ()=>{
        if(formValidator.current.allValid()){
            let data = {}
            if(userId!==undefined){
                setLetterTarget("user")
                data={
                    title,
                    message,
                    target:letterTarget,
                    userId
                }
            }else{
                data={
                    title,
                    message,
                    target:letterTarget
                }
            }
            await dispatch(addLetter(data))
            history.goBack()
        }else{
            formValidator.current.showMessages()
            setValidatorValid(1)
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">ثبت پیام</h3>
                        </div>
                        <div className="col-4 text-left">
                            <a onClick={()=>{
                                handleAddLetter()
                            }} style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت پیام</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <div className="pl-lg-4">
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
                                       placeholder="عنوان نامه..."/>
                                {formValidator.current.message("title",title,"required|min:3|max:250")}
                            </div>
                        </div>
                        <div className="pl-lg-4">
                            <div className="form-group">
                                <label>توضیحات پیام</label>
                                <textarea  rows="4"
                                           value={message}
                                           id={"message"}
                                           name={"message"}
                                           onChange={(e)=>{
                                               setMessage(e.target.value)
                                               formValidator.current.showMessageFor("message")
                                           }}
                                           className="form-control form-control-alternative"
                                          placeholder="توضیحات پیام را در این قسمت بنویسید..."/>
                                {formValidator.current.message("message",message,"required|min:3")}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-header bg-white border-0" >
                    <div className="row align-items-center">
                        <div className="col-8">
                        </div>
                        <div className="col-4 text-left">
                            <a  onClick={()=>{
                                handleAddLetter()
                            }}  style={{color:"white"}} className="btn btn-sm btn-primary p-3">ثبت پیام</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default InsertLetter
