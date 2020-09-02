import React from 'react';
const WeatherIcon = ({icon}) =>(
    <div className = "icon_weather">
        <img src = {'https://openweathermap.org/img/wn/' + icon + '@4x.png'} width = "200"/>
    </div>
);

export default WeatherIcon;