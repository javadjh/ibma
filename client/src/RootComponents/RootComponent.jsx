import React from 'react'
import {Route, Switch,withRouter} from "react-router";
import LoginComponent from "../EntryComponent/LoginComponent";
import AdminLayout from "./AdminLayout";
import UsersRoot from "../components/users/UsersRoot";
import UpsertUserComponent from "../components/users/UpsertUserComponent";
import LettersRoot from "../components/letters/LettersRoot";
import InsertLetter from "../components/letters/InsertLetter";
import PoolRoot from "../components/pool/PoolRoot";
import HomePageUser from "../components/userSide/HomePageUser";
import PoolUser from "../components/userSide/PoolTurnUserSide/PoolUser";
import UsersLetterRoot from "../components/userSide/usersLetter/UsersLetterRoot";
import UserPaymentRoot from "../components/userSide/userPayment/UserPaymentRoot";
import AdminDashboardRoot from "../components/dashboard/AdminDashboardRoot";
import LoadingBar from "react-redux-loading-bar";
import {ToastContainer} from "react-toastify";
import AdsComponentRoot from "../components/ads/AdsComponentRoot";
import InsertAdComponent from "../components/ads/InsertAdComponent";
import UserLoginRoot from "../components/userSide/userLogin/UserLoginRoot";
import BoardDirectorRoot from "../components/boarddirector/BoardDirectorRoot";
import InsertBoardDirector from "../components/boarddirector/InsertBoardDirector";
import EmployeeRoot from "../components/employee/EmployeeRoot";
import InsertEmployee from "../components/employee/InsertEmployee";
import UserEmployeeRoot from "../components/userSide/userEmployee/UserEmployeeRoot";
import UserBoardDirectorRoot from "../components/userSide/userBoardDirector/UserBoardDirectorRoot";
import ContractorRoot from "../components/contractor/ContractorRoot";
import InsertContractor from "../components/contractor/InsertContractor";
import UserContractorRoot from "../components/userSide/userContractor/UserContractorRoot";
import RulesRoot from "../components/rules/RulesRoot";
import UpsertRule from "../components/rules/UpsertRule";
import UserRulesRoot from "../components/userSide/userRule/UserRulesRoot";
import MeetingRoot from "../components/meeting/MeetingRoot";
import InsertMeetingComponent from "../components/meeting/InsertMeetingComponent";

const RootComponent = ({history})=>{
    const containerUserSide = {
        display:"flex",
        flex:1,
        weight:"100%",
        backgroundImage: "linear-gradient(45deg, #88898d, #484848)",
        height:"100vh",
        flexDirection:"column",
    }
    return(
        <div>
            <ToastContainer/>
            <Switch>
                <Route path={["/adminlogin","/users","/upsert/user","/upsert/user/:id","/letters","/insert/letter",
                    "/insert/letter/:id","/pools","/admin","/ads","/insert/ads","/boarddirector","/insert/boarddirector",
                    "/employees","/insert/employee","/contractors","/insert/contractor","/rules","/upsert/rule","/meeting","/insert/meeting"]}>
                    {history.location.pathname!=="/adminlogin" ?(
                        <AdminLayout/>
                    ):null}
                    <div className="main-content">
                        <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8 text-right">
                            <div className="container-fluid" style={{marginTop:"60px"}}>
                                <LoadingBar style={{
                                    backgroundColor:"black",
                                    height:"5px",
                                    position:"fixed",
                                    top:0,
                                    left:0,
                                }}/>
                                <Switch>
                                    <Route path={"/adminlogin"} component={LoginComponent} exact/>
                                    <Route path={"/admin"} component={AdminDashboardRoot} exact/>

                                    <Route path={"/users"} component={UsersRoot} exact/>
                                    <Route path={"/upsert/user"} component={UpsertUserComponent} exact/>
                                    <Route path={"/upsert/user/:id"} component={UpsertUserComponent} exact/>

                                    <Route path={"/letters"} component={LettersRoot} exact/>
                                    <Route path={"/insert/letter"} component={InsertLetter} exact/>
                                    <Route path={"/insert/letter/:id"} component={InsertLetter} exact/>

                                    <Route path={"/pools"} component={PoolRoot} exact/>

                                    <Route path={"/ads"} component={AdsComponentRoot} exact/>
                                    <Route path={"/insert/ads"} component={InsertAdComponent} exact/>

                                    <Route path={"/boarddirector"} component={BoardDirectorRoot} exact/>
                                    <Route path={"/insert/boarddirector"} component={InsertBoardDirector} exact/>

                                    <Route path={"/employees"} component={EmployeeRoot} exact/>
                                    <Route path={"/insert/employee"} component={InsertEmployee} exact/>


                                    <Route path={"/contractors"} component={ContractorRoot} exact/>
                                    <Route path={"/insert/contractor"} component={InsertContractor} exact/>

                                    <Route path={"/rules"} component={RulesRoot} exact/>
                                    <Route path={"/upsert/rule"} component={UpsertRule} exact/>

                                    <Route path={"/meeting"} component={MeetingRoot} exact/>
                                    <Route path={"/insert/meeting"} component={InsertMeetingComponent} exact/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path={["/","/userlogin","/pooluser","/usersletter","/userpayment","/userlogin","/useremployee","/userboarddirector","/usercontractor","/userrule"]}>
                    <div style={containerUserSide}>
                        <LoadingBar style={{
                            backgroundColor:"black",
                            height:"5px",
                            position:"fixed",
                            top:0,
                            left:0,
                        }}/>
                        <Switch>
                            <Route path={"/"} component={HomePageUser} exact/>
                            <Route path={"/pooluser"} component={PoolUser} exact/>
                            <Route path={"/usersletter"} component={UsersLetterRoot} exact/>
                            <Route path={"/userpayment"} component={UserPaymentRoot} exact/>
                            <Route path={"/userlogin"} component={UserLoginRoot} exact/>
                            <Route path={"/useremployee"} component={UserEmployeeRoot} exact/>
                            <Route path={"/userboarddirector"} component={UserBoardDirectorRoot} exact/>
                            <Route path={"/usercontractor"} component={UserContractorRoot} exact/>
                            <Route path={"/userrule"} component={UserRulesRoot} exact/>
                        </Switch>
                    </div>
                </Route>
            </Switch>
        </div>


    /**/
    )
}
export default withRouter(RootComponent)
