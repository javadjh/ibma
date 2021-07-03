import React from "react";

const CardInformation=()=>{
    const userCard = {
        backgroundColor:"#88898d",
        borderRadius:15,
        borderColor:"white",
        borderWidth:5,
        margin:20,
        padding:8,
        textAlign:"right",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
    const simpleText ={
        fontSize: 12,
        color:"white",
        display:"inline",
        marginTop:10
    }
    const boldText={
        color:"white",
        display:"inline",
        marginTop:10,
        fontSize:20
    }
    const textStarter ={
        color:"white",
        display:"inline",
        marginTop:10,
        marginRight:20,
        fontSize: 12
    }
    return(
        <div style={userCard}>
            <p style={textStarter}>آقای </p>
            <p style={boldText}> "محمد جواد حجتی" </p>
            <p style={simpleText}> خوش آمدید</p>
            <div style={{marginRight:20,marginTop:10}}>
                <p style={simpleText}>شما </p>
                <p style={boldText}> 18 </p>
                <p style={simpleText}> روز پیش شارژ را پرداخت کرده اید</p>
            </div>
            <div style={{marginRight:20}}>
                <p style={simpleText}>شماره واحد : 20</p>
            </div>
        </div>
    )
}
export default CardInformation
