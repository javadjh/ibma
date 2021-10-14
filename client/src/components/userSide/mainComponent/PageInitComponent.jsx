import React from 'react'
const PageInitComponent = ({children})=>{
    return(
        <div style={{display:"flex",
            flex:1,
            backgroundImage: "linear-gradient(45deg, #88898d, #484848)",
            height:"100% !important",
            paddingBottom:90,
            flexDirection:"column"}}>
            {children}
        </div>
    )
}
export default PageInitComponent