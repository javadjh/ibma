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
const LettersListComponent = ({isLoaded,usersLetterState,handleShowLetterDetail,topFunction})=>{
    return(
        <div>
            {isLoaded?usersLetterState.map(letter=>(
                <div style={cardShadow}>
                    <a style={{display:"block",marginTop:10,fontSize:16,fontWeight:"bold"}}>{`عنوان : ${letter.title}`}</a>
                    <a style={{display:"block",marginTop:5}}>{`تاریخ انتشار : ${letter.createDate}`}</a>
                    {/*<a style={{display:"block",marginTop:5 ,marginBottom:10}}>{`متن : ${letter.message}`}</a>*/}
                    {letter.target==="user"?(
                        <div>
                            <hr/>
                            <a style={{display:"block",marginTop:-25,color:"red"}}>این نامه به صورت خصوصی میباشد</a>
                        </div>

                    ):null}

                    <p style={{color:"#2151e5",marginBottom:1,marginTop:5}} onClick={(e)=> {
                        handleShowLetterDetail(letter)
                        topFunction()
                    }}>بیشتر...</p>
                </div>
            )):null}
        </div>
    )
}
export default LettersListComponent
