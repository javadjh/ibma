import React, {Fragment, useState} from 'react'
import AdsTable from "./AdsTable";
import {useDispatch} from "react-redux";
import {insertAdAction} from "../../Actions/AdsBoardAction";

const InsertAdComponent = ()=>{
    const [title,setTitle] = useState('')
    const [url,setUrl] = useState('')
    const dispatch = useDispatch()

    const handleAddAd=async (e)=>{
        e.preventDefault()
        const data = new FormData()
        data.append("title",title)
        data.append("url",url)
        data.append("imageUrl",e.target.imageUrl.files[0])
        await dispatch(insertAdAction(data))
    }
    return(
        <Fragment>
            <div className="text-right mt--8">
                <div className="card bg-secondary shadow">

                    <div className="card-body">
                        <form onSubmit={handleAddAd}>
                            <h6 className="heading-small text-muted mb-4">اطلاعات بنر</h6>
                            <div className="pl-lg-4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-title">عنوان</label>
                                            <input type="text" id="input-title"
                                                   name={"title"}
                                                   onChange={(e) =>{
                                                       setTitle(e.target.value)
                                                   }}
                                                   aria-describedby="title"
                                                   value={title}
                                                   className="form-control form-control-alternative"
                                                   placeholder="عنوان"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor="input-url">لینک</label>
                                            <input type="url" id="input-url"
                                                   name={"url"}
                                                   value={url}
                                                   aria-describedby="url"
                                                   onChange={(e)=>{
                                                       setUrl(e.target.value)
                                                   }}
                                                   className="form-control form-control-alternative"
                                                   placeholder="لینک"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="heading-small text-muted mb-4">عکس بنر</h6>
                            <div className="col-lg-14">
                                <div className="form-group">
                                    <input type="file" id="input-url"
                                           name={"imageUrl"}
                                           className="form-control form-control-alternative"
                                           aria-describedby="imageUrl"
                                           placeholder="لینک"/>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success "
                                style={{ margin: "1em" }}
                            >ثبت بنر</button>
                        </form>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
export default InsertAdComponent
