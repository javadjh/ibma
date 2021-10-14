import React, {Fragment, useEffect} from 'react'
import TopNavigation from "../../../utility/TopNavigation";
import {useDispatch, useSelector} from "react-redux";
import {BuyAndSellsReducerAction} from "../../../Actions/BuyAndSellsAction";
const imageBtnStyle={
    width:50,
    height:50,
    borderRadius: 50,
    padding:10,
    backgroundColor: "green",
    position: "fixed",
    bottom: 10,
    left:10
}
const UserBuyAndSellRoot = ({history})=>{
    const dispatch = useDispatch()
    const buyAndSells = useSelector(state => state.buyAndSells)
    useEffect(()=>{
        getData()
    },[])
    const getData = async ()=>{
        await dispatch(BuyAndSellsReducerAction())
    }
    const handleInsertBuyAndSellIntent = ()=>{
        history.push("/insertuserbuyandsell")
    }
    return(
        <Fragment>
            <TopNavigation title={"خرید و فروش"} history={history}/>
            {/*{buyAndSells.byuAndSellList.map(b=>(

            ))}*/}
            <img onClick={()=>{
                handleInsertBuyAndSellIntent()
            }} style={imageBtnStyle} src={"./assets/img/plus.png"} />
        </Fragment>
    )
}
export default UserBuyAndSellRoot
