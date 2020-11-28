import React, { useState } from 'react';
import TabContent from './TabContent';
import './tabs.css';

const DashboardTab = () => {

    const [value, setValue] = useState(0)
    const floors = ['1', '2', '3']

    return (
        <div className="col-lg-12 mb-4">
            <div className="row ml-4">
                {floors.map((floor, index) => {
                    return(
                    <button 
                        key={index}
                        onClick={() => setValue(index)}
                        className={`tablink
                        ${value === index && 'bg-primary'} 
                        ${value !== index && 'bg-secondary'} 
                        ${value !== index && 'border'} 
                        rounded-top`}>Floor {floor}</button>
                    );
                })}
            </div>
            <TabContent/>
        </div>
           
    )
}

export default DashboardTab
