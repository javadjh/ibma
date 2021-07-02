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

const RootComponent = ({history})=>{
    return(
        <div>
            <Switch>
                <Route path={["/adminlogin","/users","/upsert/user","/upsert/user/:id","/letters","/insert/letter","/insert/letter/:id","/pools","/admin"]}>
                    {history.location.pathname!=="/adminlogin" ?(
                        <AdminLayout/>
                    ):null}
                    <div className="main-content">
                        <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8 text-right">
                            <div className="container-fluid" style={{marginTop:"60px"}}>
                                <Switch>
                                    <Route path={"/adminlogin"} component={LoginComponent} exact/>

                                    <Route path={"/users"} component={UsersRoot} exact/>
                                    <Route path={"/upsert/user"} component={UpsertUserComponent} exact/>
                                    <Route path={"/upsert/user/:id"} component={UpsertUserComponent} exact/>

                                    <Route path={"/letters"} component={LettersRoot} exact/>
                                    <Route path={"/insert/letter"} component={InsertLetter} exact/>
                                    <Route path={"/insert/letter/:id"} component={InsertLetter} exact/>

                                    <Route path={"/pools"} component={PoolRoot} exact/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path={["/","/userlogin"]}>
                    <Switch>
                        <Route path={"/"} component={HomePageUser}/>
                    </Switch>
                </Route>
            </Switch>
        </div>


    /**/
    )
}
export default withRouter(RootComponent)
