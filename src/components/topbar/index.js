import React from 'react'
import AlertDropDown from './AlertDropDown'
import MessageDropDown from './MessageDropDown'
import NotificationIcon from './NotificationIcon'
import UserID from './UserID'
import UserInfoDropDown from './UserInfoDropDown'

const TopBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          {/* Sidebar Toggle (Topbar) */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
          </button>

          {/* Topbar Search */}
          {/* <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form> */}

          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow mx-1">
                <NotificationIcon icon={"fa-bell"} count={"3+"}/>
                <AlertDropDown/>
            </li>

            <li className="nav-item dropdown no-arrow mx-1">
                <NotificationIcon icon={"fa-envelope"} count={"7"}/>
                <MessageDropDown/>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
              <UserID/>
              <UserInfoDropDown/>
            </li>

          </ul>

        </nav>
    )
}

export default TopBar
