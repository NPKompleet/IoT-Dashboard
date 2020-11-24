import React from 'react'

const TachometerSensor = () => {
    return (
        <div>
            <div className="card shadow">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold small text-primary">Sensor1 (Real-Time Data)</h6>
                </div>
                <div className="card-body">
                    <div className="tachometer">
                        <p className="tachometer-text">Tachometer here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TachometerSensor
