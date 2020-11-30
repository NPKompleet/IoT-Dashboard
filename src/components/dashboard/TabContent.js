import React, { useEffect, useState } from 'react'
import MiniTabContent from './MiniTabContent'

const TabContent = ({content}) => {
    const [value, setValue] = useState(0)
    const rooms = ['Room1', 'Room2', 'Kitchen', 'Bedroom']

    useEffect(() => {
        setValue(0)
    }, [content]);

    return (
        <div className="tabcontent bg-primary p-4">
            <div className="d-flex h-100">
                <div className="d-flex flex-column">
                    {rooms.map((room, index) => {
                        return(
                            <button 
                                key={index}
                                onClick={() => setValue(index)}
                                className={`minitablink 
                                        ${value !== index && 'bg-primary'}
                                        ${value === index && 'bg-light text-gray-900'}  
                                        p-2 text-left`}>
                                <i className="fas fa-fw fa-bed mr-1"></i>
                                {room} {content}
                            </button>
                        )
                    })}
                </div>
                <MiniTabContent/>
            </div>
        </div>
    )
}

export default TabContent
