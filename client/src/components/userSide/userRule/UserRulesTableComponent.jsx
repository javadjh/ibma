import React , { Fragment } from "react";
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
const UserRulesTableComponent = ({rules})=>{
    return(
        <Fragment>
            {rules.map(r=>(
                <div style={cardShadow}>
                    <div style={{marginTop:5}}>عنوان : <b>{r.title}</b></div>
                    <div style={{marginTop:5}}><b>توضیحات : </b></div>
                    <div style={{marginTop:5}}>{r.description}</div>
                    {r.file?(
                        <a style={{backgroundColor:"green",display:"block",color:"white",marginLeft:-10,marginRight:-10,marginBottom:-6,
                            borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:7,textAlign:"center"}}>دانلود فایل ضمیمه</a>
                    ):null}
                </div>
            ))}
        </Fragment>
    )
}
export default UserRulesTableComponent
