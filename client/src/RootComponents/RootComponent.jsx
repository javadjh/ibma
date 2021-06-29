import React from 'react'
import {Route, Switch,withRouter} from "react-router";
import LoginComponent from "../EntryComponent/LoginComponent";
import AdminLayout from "./AdminLayout";

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
                            {/*<Route path={"/admin"} component={LoginComponent} exact/>*/}
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
