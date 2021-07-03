import React from 'react'

const TopNavigation=({title="بازگشست به صفحه ی اصلی",history})=>{
    return(
        <div style={{width:"100%",height:50,backgroundColor:"#484848",flexDirection:"column"}}>
            <p style={{color:"white",display:"inline",justifyContent:"center",alignItems:"center",marginLeft:5}}>{title}</p>
            <img onClick={()=>{
                history.goBack()
            }} style={{width: 50,height:50,justifyContent:"center",padding:12 }} src={'./assets/img/left-arrow.png'}/>
        </div>
    )
}
export default TopNavigation
