import {allLettersService, getLettersService, getUsersLetterService} from "../APIConfig/letterService";

export const getLetters = (filter)=>{
    return async (dispatch,state)=>{
        const {data,status}= await getLettersService(filter)
        if(status===200){
            dispatch({type:"INIT_LETTERS",payload:data})
        }
    }
}
export const addLetter = (letter)=>{
    return async (dispatch,state)=>{
        const {data,status}= await allLettersService(letter)
        if(status===200){
            console.log(data)
        }
    }
}
export const getUsersLetterAction = (filter)=>{
    return async (dispatch,state)=>{
        const {data,status}= await getUsersLetterService(filter)
        console.log(data)
        if(status===200){
            dispatch({type:"INIT_USERS_LETTER",payload:data.letters})
        }
    }
}
