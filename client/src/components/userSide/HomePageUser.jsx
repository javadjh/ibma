import React ,{Fragment} from 'react'

const HomePageUser = ()=>{
    const containerUserSide = {
        display:"flex",
        flex:1,
        backgroundImage: "linear-gradient(45deg, #88898d, #484848)",
        height:"100vh",
        flexDirection:"column"
    }

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
        height:250
    }
    const circleBtn ={
        display:"inline",
        flex:1,
        backgroundColor: "white",
        borderRadius:80,
        marginLeft:30
    }
    const imgCircle={
        margin: 10,
        width:50,
        height:50,
        justifyContent:"center",
        marginTop:20,
        marginBottom:20
    }
    const setRowContainer ={
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        marginRight:20,
        textAlign: "center"
    }
    return(
        <Fragment>
            <div style={containerUserSide}>
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
                <img style={imageStyle} src={"https://picsum.photos/312/312"}/>
                <div style={{marginTop:20}}>
                    <div style={setRowContainer}>
                        <div style={circleBtn}>
                            <img style={imgCircle} src={"./assets/img/swimming.png"} />
                        </div>
                        <div style={circleBtn}>
                            <img style={imgCircle} src={"./assets/img/swimming.png"} />
                        </div>
                        <div style={circleBtn}>
                            <img style={imgCircle} src={"./assets/img/swimming.png"} />
                        </div>
                    </div>

                    <div style={setRowContainer}>
                        <p style={{
                            fontSize: 12,
                            color:"white",
                            flex:1,
                            marginRight:-10
                        }}>نوبت استخر</p>
                        <p style={{
                            fontSize: 12,
                            flex:1,
                            color:"white",
                        }}>نوبت استخر</p>
                        <p style={{
                            fontSize: 12,
                            flex:1,
                            color:"white",
                            marginLeft:15
                        }}>نوبت استخر</p>
                    </div>
                </div>
                <img style={{
                    position:"fixed",
                    bottom:0,
                    maxHeight:85,
                    width:"100%"
                }} src={"./assets/img/foter.png"}/>
            </div>
        </Fragment>
    )
}
export default HomePageUser
