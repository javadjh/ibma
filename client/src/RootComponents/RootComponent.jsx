import React from 'react'
import {Route, Switch,withRouter} from "react-router";
import LoginComponent from "../EntryComponent/LoginComponent";
import AdminLayout from "./AdminLayout";
import UsersRoot from "../components/users/UsersRoot";
import UpsertUserComponent from "../components/users/UpsertUserComponent";
import LettersRoot from "../components/letters/LettersRoot";
import InsertLetter from "../components/letters/InsertLetter";

const RootComponent = ({history})=>{
    return(
        <div>
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
                        </Switch>
                    </div>
                </div>
            </div>
        </div>


    /*<Fragment>
        {history.location.pathname!=="/login" ?(<MainNavBar/>):(null)}
        <div className="main-content">
            {history.location.pathname!=="/login" ?(<TopNavBar/>):(null)}
            <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8 text-right">
                <div className="container-fluid" style={{marginTop:"60px"}}>
                    <Switch>
                        <Route path={"/contractors"} component={ContractorListTable} exact/>
                    </Switch>
                </div>
            </div>
        </div>
    </Fragment>*/
    )
}
export default withRouter(RootComponent)
