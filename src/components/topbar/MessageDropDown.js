import React from 'react'

const MessageItem = props => {
    const {message, title} = props;
    return (
        <a className="dropdown-item d-flex align-items-center" href="#">
            <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt=""/>
                <div className="status-indicator bg-success"></div>
            </div>
            <div className="font-weight-bold">
                <div className="text-truncate">{message}</div>
                <div className="small text-gray-500">{title}</div>
            </div>
        </a>
    )
}


const MessageDropDown = () => {
    return (
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
            <h6 className="dropdown-header">
                Message Center
            </h6>
            <MessageItem 
                title={"Jae Chun · 1d"} 
                message={"I have the photos that you ordered last month, how would you like them sent to you?"}/>
            <MessageItem 
                title={"Morgan Alvarez · 2d"} 
                message={"Last month's report looks great, I am very happy with the progress so far, keep up the good work!"}/>
            
            <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
        </div>
    )
}

export default MessageDropDown
