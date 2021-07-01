export const LettersReducer = (state={pageId: 0, eachPerPage: 0, total: 0, letters: []},action)=>{
    switch (action.type){
        case "INIT_LETTERS":
            return {...action.payload}
        default:
            return state
    }
}
