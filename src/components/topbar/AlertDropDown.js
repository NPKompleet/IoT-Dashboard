import React from 'react'

const AlertItem = props => {
    const {link, icon, date, content} = props;
    return (
        <a className="dropdown-item d-flex align-items-center" href={link}>
            <div className="mr-3">
            <div className="icon-circle bg-primary">
                <i className={`fas ${icon} text-white`}></i>
            </div>
            </div>
            <div>
            <div className="small text-gray-500">{date}</div>
            <span className="font-weight-bold">{content}</span>
            </div>
        </a>
    )
}

const AlertDropDown = () => {
    return (
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">
                Alerts Center
            </h6>
            <AlertItem
                link={"#"}
                icon={"fa-file-alt"}
                date={"December 12, 2019"}
                content={"A new monthly report is ready to download!"}
            />
            <AlertItem
                link={"#"}
                icon={"fa-donate"}
                date={"November 20, 2019"}
                content={"This is a test to see if the alert item works as it should."}
            />
            <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
        </div>
    )
}

export default AlertDropDown
