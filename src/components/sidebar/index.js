import React from 'react'
import CollapsibleNavItem from './CollapsibleNavItem'
import NavItem from './NavItem'

const Sidebar = () => {
    return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    {/* <div className="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-chart-line"></i>
                    </div> */}
                    <div className="sidebar-brand-text mx-3">IoT DashBoard</div>
                </a>

                <hr className="sidebar-divider my-0"/>

                <NavItem 
                    icon={"fas fa-fw fa-tachometer-alt"}
                    link={"index.html"}
                    text={"Dashboard"}
                />

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">
                    Interface
                </div>

                <CollapsibleNavItem 
                    id = {"collapseTwo"}
                    icon={"fas fa-fw fa-cog"} 
                    text={"Components"} 
                    subtext={"Custom Components:"}
                    items ={[["Buttons", "buttons.html"], ["Cards","cards.html"]]}
                />

                <CollapsibleNavItem 
                    id = {"collapseUtilities"}
                    icon={"fas fa-fw fa-wrench"} 
                    text={"Utilities"} 
                    subtext={"Custom Utilities:"}
                    items ={[["Colors", "utilities-color.html"], ["Borders","utilities-border.html"], ["Animations","utilities-animation.html"], ["Other","utilities-other.html"]]}
                />

                <hr className="sidebar-divider"/>

                <div className="sidebar-heading">
                    Navigation
                </div>

                <CollapsibleNavItem 
                    id = {"collapsePages"}
                    icon={"fas fa-fw fa-folder"} 
                    text={"Pages"} 
                    subtext={"Screens:"}
                    items ={[["Login", "login.html"], ["Register","register.html"], ["Blank Page","blank.html"]]}
                />

                <NavItem 
                    icon={"fas fa-fw fa-chart-area"}
                    link={"charts.html"}
                    text={"Charts"}
                />

                 <NavItem 
                    icon={"fas fa-fw fa-table"}
                    link={"tables.html"}
                    text={"Tables"}
                />

                <hr className="sidebar-divider d-none d-md-block"/>

                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
    )
}

export default Sidebar
