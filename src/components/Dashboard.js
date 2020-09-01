import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';

//include layout
import Header from './layouts/Header';
import Highlights from './layouts/Highlights';
import Sidebar from './layouts/Sidebar';
import Today from './layouts/Today';
import Week from './layouts/Week';
import Container from './layouts/Container';
import Spinner from './elements/Spinner';
import { StyledGlobal,StyledDashboard } from '../styles';
import {themeLight, themeDark} from '../constants';
import {useImageFetch} from '../hooks/useImageFetch';
import {useCoordinations} from '../hooks/useCoordinations';
import {fetchWeatherFetch} from '../helpers';
import {SEARCH_BY_LOCATION,DEFAULT_URL,API_URL_APPID,API_APPID,SEARCH_DEFAULT,SEARCH_BY_WORD} from '../api';

const Dashboard = () =>{
    const [nightMode, setNightMode] = useState(false);
    const [weather,setWeather] = useState([]);
    const [image, fetchImage] = useImageFetch();
    const [{lat,long}, findCoordinates] = useCoordinations();

    const fetchCoordinates = () =>{
        findCoordinates();  
    }
    useEffect(() =>{
        if(lat && long){
            fetchWeatherFetch(`${SEARCH_BY_LOCATION}&lat=${lat}&lon=${long}`).then((res)=>{
                console.log('Getting api');
                setWeather(res);
            });
        }else{
            fetchWeatherFetch(`${DEFAULT_URL}`).then((res)=>{
                console.log('Getting default api');
                setWeather(res);
            });
        }       
  
    },[long]);

    const nightModeCallback = () =>{
        setNightMode(!nightMode);
    }

    const doSearchLocation = (search) =>{
        //console.log(search);
        if(search){
            const searchUp = search.charAt(0).toUpperCase() + search.slice(1)
            fetchWeatherFetch(`${API_URL_APPID}/?q=${searchUp}&APPID=${API_APPID}`).then((res)=>{
                console.log('Getting api search');
                setWeather(res);
            });

            //get image from search
            fetchImage(`${SEARCH_BY_WORD}${search}`);

        }

    }

    //console.log('Location', lat,long);
    console.log('Weather', weather);
    //console.log(image);
    if(!weather.main) return <ThemeProvider theme = {nightMode ? themeDark : themeLight} ><Spinner /><StyledGlobal /></ThemeProvider>
   
    return(
        <ThemeProvider theme = {nightMode ? themeDark : themeLight} >
           <StyledDashboard>
            <Sidebar 
            findCoordinates = {fetchCoordinates}
            data = {weather}
            searchCallback = {doSearchLocation}
            image = {image} 
            titleLocation = {weather.name + ", " + weather.sys.country}/>
            <Container>
                <Header  nightModeCallback={nightModeCallback}
                         nightMode={nightMode}/>
                <Week data = {weather}/>
                {/*<Today /> */}
                <Highlights data = {weather}/>
            </Container>
            <StyledGlobal />
       </StyledDashboard>
    </ThemeProvider>
        
    )
}
export default Dashboard;