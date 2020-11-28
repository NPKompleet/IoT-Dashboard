import React, { useState } from 'react'
import Misc from './Misc';
import SensorTimeSeries from './SensorTimeSeries';
import TachometerSensor from './TachometerSensor';

const MiniTabContent = () => {
    const [value, setValue] = useState(0);
    return (
        <div className="minitabcontent bg-light flex-fill text-gray-900 p-0 m-0">
                        <div className="grid-container">
                            <div className="grid-sensor">
                                <TachometerSensor/>
                                <TachometerSensor/>
                                <TachometerSensor/>
                                <SensorTimeSeries/>
                                <SensorTimeSeries/>
                                <SensorTimeSeries/>
                            </div>
                            <div className="grid-others">
                                <div className="span-2-col">
                                    <form className="navbar-search">
                                        <div className="input-group">
                                        <input type="text" className="form-control bg-light border" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                        </div>
                                    </form>
                                </div>
                                <Misc/>
                                <Misc/>
                                <Misc/>
                                <Misc/>
                            </div>
                        </div>
                    </div>
    )
}

export default MiniTabContent
