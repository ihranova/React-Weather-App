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
import SpinnerContainer from './elements/SpinnerContainer';
import { StyledGlobal,StyledDashboard } from '../styles';
import {themeLight, themeDark} from '../constants';
import {useImageFetch} from '../hooks/useImageFetch';
import {useCoordinations} from '../hooks/useCoordinations';
import {fetchWeatherFetch} from '../helpers';
import {useNightMode} from '../hooks/useNightMode';
import {SEARCH_BY_LOCATION,DEFAULT_URL,API_URL_APPID,API_APPID,SEARCH_BY_WORD,GET_NEXT_DAYS_HOURS} from '../api';

const Dashboard = () =>{

    const [nightMode, nightModeChanged] = useNightMode();
    const [image, fetchImage] = useImageFetch();
    const [{lat,long}, findCoordinates] = useCoordinations();
    const [weather,setWeather] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchCoordinates = () =>{
        findCoordinates();  
    }
    const nightModeCallback = () =>{
        nightModeChanged();
    }
    //*****/
    useEffect(() =>{
        setLoading(true);
        if(lat && long){
            fetchWeatherFetch(`${SEARCH_BY_LOCATION}&lat=${lat}&lon=${long}`).then((res)=>{
                console.log('Getting api');
                setWeather(res);
                //setLoading(false);
            });
            fetchWeatherFetch(`${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${long}`).then((res)=>{
                console.log('Getting api next days');
                setWeather(prev => ({...prev, daily: res.daily, hourly: res.hourly }));
                setLoading(false);
            });

            //fetchImage

        }else{
            fetchWeatherFetch(`${DEFAULT_URL}`).then((res)=>{
                console.log('Getting default api');
                setWeather(res);
                setLoading(false);
            });
            //fetch next days
            //fetch image
        }       
  
    },[long]);
 
    const doSearchLocation = (search) =>{
        if(search){
            setLoading(true);
            const searchUp = search.charAt(0).toUpperCase() + search.slice(1)
            fetchWeatherFetch(`${API_URL_APPID}/?q=${searchUp}&APPID=${API_APPID}&exclude=hourly,daily`).then((res)=>{
                console.log('Getting api search');
                if(res.cod !== '404'){
                    setWeather(res);
                    setError(false);
                    //get image from search
                    fetchImage(`${SEARCH_BY_WORD}${search}`);
                    //fetch next days & hourly viq lat and lon

                    setLoading(false);
                }else{
                     setError(true);
                     setLoading(false);
                }
               
            });
            

        }

    }
    /******/

    //console.log('Location', lat,long);
    console.log('Weather', weather);
    //console.log(image);

    if(!weather) return <ThemeProvider theme = {nightMode ? themeDark : themeLight} ><Spinner /><StyledGlobal /></ThemeProvider>
   
    return(
        <ThemeProvider theme = {nightMode ? themeDark : themeLight} >
           <StyledDashboard>
            <Sidebar 
            findCoordinates = {fetchCoordinates}
            data = {weather}
            searchCallback = {doSearchLocation}
            error = {error}
            image = {image} 
            titleLocation = {weather.name + ", " + weather.sys.country}/>
            <Container>
                <Header  nightModeCallback={nightModeCallback}
                         nightMode={nightMode}/>
                { loading ? <SpinnerContainer />
                 : <>         
                    <Week data = {weather}/>
                    {/*<Today /> */}
                    <Highlights data = {weather}/>
                   </>}
            </Container>
            <StyledGlobal />
       </StyledDashboard>
    </ThemeProvider>
        
    )
}
export default Dashboard;