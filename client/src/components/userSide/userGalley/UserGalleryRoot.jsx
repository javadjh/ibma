import React, {Fragment, useEffect} from "react";
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {getUsersBuildingGallery} from "../../../Actions/GalleryAction";
const cardStyleTurn = {
    flex:1,
    marginLeft:10,
    marginRight:10 ,
    minWidth:90,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    marginBottom:10
}
const UserGalleryRoot = ({history})=>{
    const dispatch = useDispatch()
    const gallery = useSelector(state => state.gallery)
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(getUsersBuildingGallery())
    }
    return(
        <Fragment>
            <TopNavigation title={"گالری"} history={history}/>
            <div className="col">
                <div style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"wrap"
                }}>
                    {gallery.map(g=>(
                        <div className={"card shadow"} style={cardStyleTurn}>
                            <a target="_blank" href={`http://localhost:1000/${g.file}`}><img src={`http://localhost:1000/${g.file}`} width={90} style={{borderRadius:5}} /></a>
                        </div>

                    ))}
                </div>
            </div>
        </Fragment>
    )
}
export default UserGalleryRoot
