import React, {Fragment, useEffect, useState} from 'react'
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getAllMainCategory, getMainsCategoryAction} from "../../../Actions/CategoryAction";
import {doneToast} from "../../../utility/ShowToast";
const UserMainCategory = ({history})=>{
    const dispatch = useDispatch()
    const mainCategory = useSelector(state => state.mainCategory)
    const [isLoaded,setIsLoaded] = useState(false)
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        console.log(mainCategory)
    },[mainCategory])
    const getData = async ()=>{
        await dispatch(getAllMainCategory())
        setIsLoaded(true)
    }
    const handleChoiceMainCategory = async (id)=>{
        await dispatch(getMainsCategoryAction(id))
    }
    const handleSetSingleCategory = async (category)=>{
        doneToast("انتخاب شد")
        await dispatch({type:"INIT_SINGLE_CATEGORY",payload:category})
        history.goBack()
    }
    return(
        <Fragment>
            <TopNavigation title={"انتخاب دسته اصلی"} history={history}/>
            {isLoaded?(
                <div>
                    {mainCategory.map(e=>(
                        <p onClick={()=>{
                            if(e.isMain)
                                handleChoiceMainCategory(e._id)
                            else
                                handleSetSingleCategory(e)
                        }} style={{color:"black",backgroundColor:"white", borderRadius:10,textAlign:"center",
                        padding:7,marginBottom:6}}>{e.title}</p>
                    ))}
                </div>
            ):null}
        </Fragment>
    )
}
export default UserMainCategory
