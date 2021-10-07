import React ,{Fragment} from 'react'
import {NavLink} from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

const AdminLayout=()=>{
    return(
        <Fragment>

            <nav className="navbar navbar-vertical fixed-right navbar-expand-md navbar-light bg-white" id="sidenav-main">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand pt-0" href="./index.html">
                        <img src="./assets/img/brand/ibmalogo.jpg" className="navbar-brand-img" alt="..."/>
                    </a>
                    <ul className="nav align-items-center d-md-none">
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ni ni-bell-55"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-left text-right" aria-labelledby="navbar-default_dropdown_1">
                                <a className="dropdown-item" href="#">عملیات</a>
                                <a className="dropdown-item" href="#">عملیات دیگر</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">گزینه های بیشتر اینجا</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="media align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img alt="Image placeholder" src="./assets/img/theme/team-1-800x800.jpg"/>
                                </span>
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
                                    <span>خورج</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse text-right" id="sidenav-collapse-main">
                        <div className="navbar-collapse-header d-md-none">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="./index.html">
                                        <img src="./assets/img/brand/blue.png"/>

                                    </a>
                                </div>
                                <div className="col-6 collapse-close text-left">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <form className="mt-4 mb-3 d-md-none">
                            <div className="input-group input-group-rounded input-group-merge">
                                <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="جستجو" aria-label="Search"/>
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <span className="fa fa-search"></span>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={"nav-link"} exact  to={"/admin"} >
                                    <i className="ni ni-tv-2 text-primary"></i> داشبورد
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/users"}>
                                    <i className="ni ni-tv-2 text-primary"></i> کاربران
                                </NavLink>
                                <NavLink className="nav-link" to={"/letters"}>
                                    <i className="ni ni-tv-2 text-primary"></i>نامه ها
                                </NavLink>
                                <NavLink className="nav-link" to={"/pools"}>
                                    <i className="ni ni-tv-2 text-primary"></i>نوبت های استخر
                                </NavLink>
                                <NavLink className="nav-link" to={"/ads"}>
                                    <i className="ni ni-tv-2 text-primary"></i>تبلیغات
                                </NavLink>
                                <NavLink className="nav-link" to={"/boarddirector"}>
                                    <i className="ni ni-tv-2 text-primary"></i>اعضای هیئت مدیره
                                </NavLink>
                                <NavLink className="nav-link" to={"/employees"}>
                                    <i className="ni ni-tv-2 text-primary"></i>کارمندان
                                </NavLink>
                                <NavLink className="nav-link" to={"/contractors"}>
                                    <i className="ni ni-tv-2 text-primary"></i>پیمانکاران
                                </NavLink>
                                <NavLink className="nav-link" to={"/rules"}>
                                    <i className="ni ni-tv-2 text-primary"></i>قوانین و مقررات
                                </NavLink>
                                <NavLink className="nav-link" to={"/meeting"}>
                                    <i className="ni ni-tv-2 text-primary"></i>صورتجلسات
                                </NavLink>
                                <NavLink className="nav-link" to={"/residential/units"}>
                                    <i className="ni ni-tv-2 text-primary"></i>واحد ها
                                </NavLink>
                                <NavLink className="nav-link" to={"/bills"}>
                                    <i className="ni ni-tv-2 text-primary"></i>قبض ها
                                </NavLink>
                                <NavLink className="nav-link" to={"/rebuilding"}>
                                    <i className="ni ni-tv-2 text-primary"></i>بازسازی
                                </NavLink>
                                <NavLink className="nav-link" to={"/moving"}>
                                    <i className="ni ni-tv-2 text-primary"></i>اسباب کشی
                                </NavLink>
                                <NavLink className="nav-link" to={"/business/information"}>
                                    <i className="ni ni-tv-2 text-primary"></i>شماره تلفن های مورد نیاز
                                </NavLink>
                                <NavLink className="nav-link" to={"/surveys"}>
                                    <i className="ni ni-tv-2 text-primary"></i>نظرسنجی
                                </NavLink>

                            </li>
                        </ul>
                        {/*<hr className="my-3"/>
                        <h6 className="navbar-heading text-muted">مستندات قالب را ببینید:</h6>
                        <ul className="navbar-nav mb-md-3">
                            <li className="nav-item">
                                <a className="nav-link" href="docs/documentation.html">
                                    <i className="ni ni-single-copy-04"></i> مستندات
                                </a>
                            </li>
                        </ul>*/}
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export default AdminLayout
