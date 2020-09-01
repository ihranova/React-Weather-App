import React from 'react';

const WeatherInfo = () => (
    <>
        <div className="temperature">
            12<span className="degree">°</span> <span className="unit">C</span>
        </div>
        <div className="date">
            <span className="day">Monday</span>,
            <span className="hours">16:00</span>
        </div>
        <hr />
        <div className="info-weather">
            <div><span>Mostly Cloudy</span></div>
            <div><span>Rain - 30%</span></div>
        </div>
    </>
);
export default WeatherInfo;