import React from "react";
import {Slide} from "react-slideshow-image";

const AdsBoards = ({ads})=>{
    const imageStyle={
        marginRight: 20,
        marginLeft:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        borderRadius: 15,
        height:180
    }
    return(
        <div >
            <Slide easing="ease" style={imageStyle}  >
                {ads.map(ad=>(
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${ad.image})`,width:"100%",borderRadius: 15,
                            height:180}}>
                            <span style={{textAlign:"right",display:"block",color:"white",background:"#88898d",padding:7}}>{ad.title}</span>
                        </div>
                    </div>
                ))}

            </Slide>
        </div>
    )
}
export default AdsBoards
