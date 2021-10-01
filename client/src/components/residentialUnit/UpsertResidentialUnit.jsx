import React, { useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import validator from "simple-react-validator";
import {upsertUser} from "../../Actions/UsersAction";
import {upsertResidentialUnitsService} from "../../APIConfig/residentialUnitService";
import {doneToast, errorToast} from "../../utility/ShowToast";
const UpsertResidentialUnit = ({history,match})=>{
    const userId = match.params.id
    const formValidator = useRef(new validator({
        messages:{
            required:"این فیلد اجباری میباشد",
            min:"بسیار کوتاه میباشد",
            max:"بسیار بلند میباشد",
        },
        element: (e)=>(<div style={{color:"red" , marginTop:"10px"}}>{e}</div>)
    }))
    const residentialUnit = useSelector(state => state.residentialUnit)
    const [area,setArea] = useState(residentialUnit.area)
    const [postNumber,setPostNumber] = useState(residentialUnit.postNumber)
    const [homeNumber,setHomeNumber] = useState(residentialUnit.homeNumber)
    const [floor,setFloor] = useState(residentialUnit.floor)
    const [,setValidat] = useState(null)
    const handleAddUser = async ()=>{
        if(formValidator.current.allValid()) {
            let residentialUnitData = {}
            if (residentialUnit._id === undefined) {
                residentialUnitData = {
                    area,postNumber,homeNumber,floor
                }
            } else {
                residentialUnitData = {
                    id: residentialUnit._id,
                    area,postNumber,homeNumber,floor
                }
            }
            const {data,status} = await upsertResidentialUnitsService(residentialUnitData)
            if(status===200){
                doneToast("با موفقیت ثبت شد")
                history.goBack()
            }else{
                errorToast("خطا در ثبت اطلاعات")
            }
        } else{
            setValidat(1)
            formValidator.current.showMessages()
        }
    }
    return(
        <div className="text-right mt--8">
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0">افزودن واحد به برج</h3>
                        </div>
                        <div className="col-4 text-left">
                            <a style={{color:"white"}} onClick={()=>{
                                handleAddUser()
                            }} className="btn btn-sm btn-primary p-3">افزودن واحد</a>
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
                                        <label className="form-control-label" htmlFor="input-username">شماره واحد</label>
                                        <input type="number" id="input-username"
                                               value={homeNumber}
                                               name={"homeNumber"}
                                               onChange={(e) =>{
                                                   setHomeNumber(e.target.value)
                                                   formValidator.current.showMessageFor("homeNumber")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="شماره واحد را وارد کنید..."/>
                                    </div>
                                    {formValidator.current.message("homeNumber",homeNumber,"required")}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-phone">شماره پستی</label>
                                        <input type="text" id="input-phone"
                                               name={"postNumber"}
                                               value={postNumber}
                                               onChange={(e)=>{
                                                   setPostNumber(e.target.value)
                                                   formValidator.current.showMessageFor("postNumber")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="شماره پستی را وارد نمایید"/>
                                    </div>
                                    {formValidator.current.message("postNumber",postNumber,"min:10|max:10|required")}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-first-name">متراژ</label>
                                        <input type="number" id="input-first-name"
                                               name={"area"}
                                               value={area}
                                               onChange={(e)=>{
                                                   setArea(e.target.value)
                                                   formValidator.current.showMessageFor("area")
                                               }}
                                               className="form-control form-control-alternative" placeholder="متراژ را وارد کنید..."/>
                                    </div>
                                    {formValidator.current.message("area",area,"required|max:4")}
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="form-control-label" htmlFor="input-last-name">طبقه</label>
                                        <input type="number" id="input-last-name"
                                               value={floor}
                                               name={"floor"}
                                               onChange={(e)=>{
                                                   setFloor(e.target.value)
                                                   formValidator.current.showMessageFor("floor")
                                               }}
                                               className="form-control form-control-alternative"
                                               placeholder="طبقه را وارد کنید"/>
                                    </div>
                                    {formValidator.current.message("floor",floor,"required")}
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
                            <a style={{color:"white"}} onClick={()=>{
                                handleAddUser()
                            }} className="btn btn-sm btn-primary p-3">افزودن واحد</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpsertResidentialUnit

