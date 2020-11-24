import React from 'react';
import SensorTimeSeries from './SensorTimeSeries';
import './tabs.css';
import TachometerSensor from './TachometerSensor';

const DashboardTab = () => {

    return (
        <div className="col-lg-12 mb-4">
            <div className="row ml-4">
                <button className="tablink bg-secondary border rounded-top">Home</button>
                <button className="tablink bg-primary border-bottom-0 rounded-top">News</button>
                <button className="tablink bg-secondary border rounded-top">Contact</button>
                
            </div>
            <div className="tabcontent bg-primary p-4">
                <div className="d-flex h-100">
                    <div className="d-flex flex-column">
                        <button className="minitablink bg-primary p-2 text-left"><i className="fas fa-fw fa-cog mr-1"></i>Button 1</button>
                        <button className="minitablink bg-light text-gray-900 p-2 text-left"><i className="fas fa-fw fa-cog mr-1"></i>Button 2</button>
                        <button className="minitablink bg-primary p-2 text-left"><i className="fas fa-fw fa-cog mr-1"></i>Button 3</button>
                    </div>
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
                                <div>
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            <div className="tachometer"></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div>
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            <div className="tachometer"></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div>
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            <div className="tachometer"></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div>
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            <div className="tachometer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
    )
}

export default DashboardTab
