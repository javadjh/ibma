export const NotesReducer = (state={},action)=>{
    switch (action.type){
        case "INIT_NOTES":
            return {...action.payload}
        default:
            return state
    }
}
