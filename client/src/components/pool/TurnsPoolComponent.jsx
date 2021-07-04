import React from 'react'
import PagingComponent from "../../utility/PagingComponent";
const cardStyleTurn = {
    paddingTop: 10,
    flex:1,
    marginLeft:10,
    marginRight:10 ,
    minWidth:200,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    marginBottom:10
}
const aStyle={
    margin:4,
    color:"black",
    fontSize:15,
}
const badgeDateStyle={
    margin:4,
    color:"white",
    padding:5,
    fontSize:15,
    backgroundColor:"green",
    width:"100%",
    textAlign:"center",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
}
const TurnsPoolComponent = ({turns,handelPaging})=>{
    return(
        <div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap"
            }}>
                {turns.turns.map(turn=>(
                    <div className={"card shadow"} style={cardStyleTurn}>
                        <a style={aStyle}>نام کاربری : {turn.userId.userName}</a>
                        <a style={aStyle}>نام : {turn.userId.name} {turn.userId.lastName}</a>
                        <a style={aStyle}>شماره نوبت : {turn.turnNumber}</a>
                        <a style={aStyle}>ثبت : {turn.createDate}</a>
                        <a style={badgeDateStyle}>برای تاریخ : {turn.turnDate}</a>
                    </div>
                ))}
            </div>
            <PagingComponent pageId={turns.pageId}
                             total={turns.total}
                             eachPerPage={turns.eachPerPage}
                             handelPaging={handelPaging}/>
        </div>

    )
}
export default TurnsPoolComponent
