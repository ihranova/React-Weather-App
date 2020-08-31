import React from 'react';
import SearhBar from '../elements/SearchBar';
import WeatherIcon from '../elements/WeatherIcon';
import LocationBox from '../elements/LocationBox';
import WeatherInfo from '../elements/WeatherInfo';
import {StyledSidebar} from './../../styles'; 

const Sidebar = () =>(
    <StyledSidebar>
        <SearhBar />
        <WeatherIcon />
        <WeatherInfo />
        <LocationBox />
    </StyledSidebar>
    );

export default Sidebar;