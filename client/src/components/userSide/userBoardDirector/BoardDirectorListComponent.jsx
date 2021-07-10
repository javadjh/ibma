import React from "react";
const cardShadow={
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderRadius:15,
    marginBottom:10,
    marginTop:5,
    marginLeft:15,
    marginRight:15,
    paddingRight:10,
    paddingLeft:10,
    textAlign:"right",
    paddingTop:5,
    paddingBottom:5
}
const BoardDirectorListComponent = ({isLoaded,boardDirectorsState,})=>{
    return(
        <div>
            {isLoaded?boardDirectorsState.map(boardDirector=>(
                <div style={cardShadow}>
                    <a style={{display:"block",marginTop:10,fontSize:16,fontWeight:"bold"}}>{`نام و نام خانوادگی : ${boardDirector.name} ${boardDirector.lastName}`}</a>
                    <a style={{display:"block",marginTop:5}}>{`واحد : ${boardDirector.homeNumber}`}</a>
                    <a style={{display:"block",marginTop:5 ,marginBottom:10}}>{`عنوان : ${boardDirector.title}`}</a>
                </div>
            )):null}
        </div>
    )
}
export default BoardDirectorListComponent
