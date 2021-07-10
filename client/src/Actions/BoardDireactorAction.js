import {
    deleteBoardDirectorService,
    getBoardDirectorService,
    insertBoardDirectorService
} from "../APIConfig/boardDirectorService";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {doneToast} from "../utility/ShowToast";

export const getBoardDirectors = ()=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status}= await getBoardDirectorService()
        await dispatch(hideLoading())
        if(status===200){
            dispatch({type:"INIT_BOARD_DIRECTOR",payload:data})
        }
    }
}
export const deleteBoardDirector = (id)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status}= await deleteBoardDirectorService(id)
        await dispatch(hideLoading())
        if(status===200){
            doneToast("با موفقیت حذف شد")
            await dispatch(getBoardDirectors())
        }
    }
}
export const insertBoardDirector = (boardDirector)=>{
    return async (dispatch,state)=>{
        await dispatch(showLoading())
        const {data,status}= await insertBoardDirectorService(boardDirector)
        await dispatch(hideLoading())
        if(status===200){
            doneToast("با موفقیت افزوده شد")
        }
    }
}
