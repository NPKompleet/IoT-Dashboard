import React from 'react'

const UserInfoItem = props => {
    const {icon, text} = props;
    return (
        <a className="dropdown-item" href="#">
            <i className={`fas ${icon} fa-sm fa-fw mr-2 text-gray-400`}></i>
            {text}
        </a>
    )
}

const UserInfoDropDown = () => {
    return (
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <UserInfoItem icon={"fa-user"} text = {"Profile"}/> 
            <UserInfoItem icon={"fa-cogs"} text = {"Settings"}/>
            <div className="dropdown-divider"></div>
            <UserInfoItem icon={"fa-sign-out-alt"} text = {"Logout"}/>
        </div>
    )
}

export default UserInfoDropDown
