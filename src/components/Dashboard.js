import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {countries} from 'country-data';

//include layout
import Header from './layouts/Header';
import Highlights from './layouts/Highlights';
import Sidebar from './layouts/Sidebar';
import Today from './layouts/Today';
import Week from './layouts/Week';
import Container from './layouts/Container';
import Spinner from './elements/Spinner';
import SpinnerContainer from './elements/SpinnerContainer';
import { StyledGlobal, StyledDashboard } from '../styles';
import { themeLight, themeDark } from '../constants';
import { useImageFetch } from '../hooks/useImageFetch';
import { useCoordinations } from '../hooks/useCoordinations';
import {useWeatherFetch} from '../hooks/useWeatherFetch';
import { fetchWeatherFetch } from '../helpers';
import { useNightMode } from '../hooks/useNightMode';
import { SEARCH_BY_LOCATION, DEFAULT_URL, API_URL_APPID, API_APPID, SEARCH_BY_WORD, GET_NEXT_DAYS_HOURS,DEF_N_D_H  } from '../api';

const Dashboard = () => {
    const [nightMode, nightModeChanged] = useNightMode();
    const [image, fetchImage] = useImageFetch();
    const [{ lat, long }, loadingLocation, findCoordinates,updateLocation] = useCoordinations();
    const [weather, loading, error, fetchWeather, searchByLocation,getWeatherLocation] = useWeatherFetch();
    const [showDays, setShowDays] = useState(false);
    const fetchCoordinates = () => {
        findCoordinates();
    }
    const nightModeCallback = () => {
        nightModeChanged();
    }
    const showDaysCallback = (enabled) =>{
        setShowDays(enabled);
    }

   const doSearchLocation = (searchTerm) => {
        searchByLocation(searchTerm);
        fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
   }

    //console.log("location", lat, long);
    console.log('Weather', weather);
    
    useEffect(()=>{
        getWeatherLocation(lat,long);
        fetchImage(`${SEARCH_BY_WORD}${weather.city}`);
    },[lat,long])

    if (!weather) return <ThemeProvider theme={nightMode ? themeDark : themeLight} ><Spinner /><StyledGlobal /></ThemeProvider>
    
    return (
        <ThemeProvider theme={nightMode ? themeDark : themeLight} >
            <StyledDashboard>
                <Sidebar
                    findCoordinates={fetchCoordinates}
                    data={weather}
                    searchCallback={doSearchLocation}
                    error={error}
                    image={image}
                    titleLocation={weather.city + ", " + countries[weather.country].name} />
                <Container>
                    <Header nightModeCallback={nightModeCallback}
                        nightMode={nightMode} showDaysCallback = {showDaysCallback} showActive = {showDays}/>
                    {loading || loadingLocation ? <SpinnerContainer />
                        : <>
                            {!showDays ? (<Week data={weather.daily} />) 
                            : (<Today data = {weather.hourly} />) }
                            <Highlights data={weather.current} />
                        </>}
                </Container>
                <StyledGlobal />
            </StyledDashboard>
        </ThemeProvider>

    )
}
export default Dashboard;