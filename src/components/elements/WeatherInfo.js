import React from 'react';

const WeatherInfo = () => (
    <>
        <div class="temperature">
            12<span class="degree">°</span> <span className="unit">C</span>
        </div>
        <div class="date">
            <span class="day">Monday</span>,
            <span class="hours">16:00</span>
        </div>
        <hr />
        <div class="info-weather">
            <div><span>Mostly Cloudy</span></div>
            <div><span>Rain - 30%</span></div>
        </div>
    </>
);
export default WeatherInfo;