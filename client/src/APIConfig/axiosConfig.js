import axios from "axios";
import {errorToast} from "../utility/ShowToast";
axios.defaults.headers.post['Content-Type']="application/json"
axios.defaults.headers.common['token']=`${localStorage.getItem("token")}`
axios.interceptors.response.use(null,error=>{
    if(error){
        errorToast("خطا در دریافت اطلاعات رخ داده است")
    }
    return Promise.reject(error)
})
export default {
    post:axios.post,
    get:axios.get,
    put:axios.put,
    delete:axios.delete
}
