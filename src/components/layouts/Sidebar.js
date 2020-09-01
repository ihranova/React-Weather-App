import React, {useState} from 'react';
import SearhBar from '../elements/SearchBar';
import WeatherIcon from '../elements/WeatherIcon';
import LocationBox from '../elements/LocationBox';
import WeatherInfo from '../elements/WeatherInfo';
import {StyledSidebar} from './../../styles'; 

const Sidebar = ({findCoordinates,searchCallback,image,titleLocation}) =>{
  
    return(
        <StyledSidebar>
            <SearhBar findCoordinates = {findCoordinates} searchCallback ={searchCallback}/>
            <WeatherIcon />
            <WeatherInfo />
            <LocationBox image = {image} titleLocation = {titleLocation}/>
        </StyledSidebar>);
};

export default Sidebar;