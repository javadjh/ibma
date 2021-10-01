export const GalleryReducer = (state=[],action)=>{
    switch (action.type){
        case "INIT_GALLERY":
            return [...action.payload]
        default:
            return state
    }
}
