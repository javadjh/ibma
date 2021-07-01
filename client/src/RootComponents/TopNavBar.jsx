import React from 'react'
import SearchingComponent from "../components/utilityComponent/SearchingComponent";

const TopNavBar = ()=>{
    return(
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
            <div className="container-fluid">
                <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="./index.html">داشبورد</a>
                <SearchingComponent onSearching={(e)=>{
                    console.log(e.target.value)
                }}/>
                <ul className="navbar-nav align-items-center d-none d-md-flex">
                    <li className="nav-item dropdown">
                        <a className="nav-link pl-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="media align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img alt="Image placeholder" src="./assets/img/theme/team-4-800x800.jpg"/>
                                </span>
                                <div className="media-body mr-2 d-none d-lg-block">
                                    <span className="mb-0 text-sm  font-weight-bold">جسیکا جونس</span>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-left text-right">
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">خوش آمدید!</h6>
                            </div>
                            <a href="./examples/profile.html" className="dropdown-item">
                                <i className="ni ni-single-02"></i>
                                <span>پروفایل من</span>
                            </a>
                            <a href="./examples/profile.html" className="dropdown-item">
                                <i className="ni ni-settings-gear-65"></i>
                                <span>تنظیمات</span>
                            </a>
                            <a href="./examples/profile.html" className="dropdown-item">
                                <i className="ni ni-calendar-grid-58"></i>
                                <span>فعالیت</span>
                            </a>
                            <a href="./examples/profile.html" className="dropdown-item">
                                <i className="ni ni-support-16"></i>
                                <span>پشتیبانی</span>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#!" className="dropdown-item">
                                <i className="ni ni-user-run"></i>
                                <span>خروج</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default TopNavBar
