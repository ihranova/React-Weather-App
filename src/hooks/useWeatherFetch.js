import { useState, useEffect } from 'react';
//import { useImageFetch } from '../hooks/useImageFetch';
import { SEARCH_BY_LOCATION, DEFAULT_URL, API_URL_APPID, API_APPID, SEARCH_BY_WORD, GET_NEXT_DAYS_HOURS, DEF_N_D_H } from '../api';


export const useWeatherFetch = (searchCity, lat = '', long = '') => {
    const [weather, setWeather] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async endpoint => {
        try {
            const result = await (await fetch(endpoint)).json();
            return result;

        } catch (error) {
            console.log(error);
        }
    }

    //searching location name
    const searchByLocation = (searchCity) => {
        if (searchCity) {
            setLoading(true);
            const search = searchCity.charAt(0).toUpperCase() + searchCity.slice(1);
            fetchWeather(`${API_URL_APPID}/?q=${search}&APPID=${API_APPID}`).then((res) => {
                console.log('Getting api search');
                if (res.cod !== '404') {
                    setWeather({ ...res, city: res.name, country: res.sys.country });
                    setError(false);
                    //fetch next days & hourly via lat and lon
                    const lat = res.coord.lat;
                    const long = res.coord.lon;
                    fetchWeather(`${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${long}`).then((res) => {
                        console.log('Getting api next days');
                        console.log("Next days", res);
                        setWeather(prev => ({ ...prev, daily: res.daily, hourly: res.hourly, current: res.current }));
                        setLoading(false);
                    });
                    setLoading(false);
                } else {
                    setError(true);
                    setLoading(false);
                    console.log("error 404");
                }

            });
        }
    }

    //get weather with lat and long
    const getWeatherLocation = (lat, long) => {
        setLoading(true);
        if (lat && long) {
            fetchWeather(`${SEARCH_BY_LOCATION}&lat=${lat}&lon=${long}`).then((res) => {
                console.log('Getting api');
                console.log(res);
                setWeather({ ...res, city: res.name, country: res.sys.country });
                //setLoading(false);
            });
            fetchWeather(`${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${long}`).then((res) => {
                console.log('Getting api next days');
                console.log("Next days", res);
                setWeather(prev => ({ ...prev, daily: res.daily, hourly: res.hourly, current: res.current }));
                setLoading(false);
            });
        }

    }


    //*****/
    useEffect(() => {
        setLoading(true);
        //default fetch...
        fetchWeather(`${DEFAULT_URL}`).then((res) => {
            console.log('Getting default api');
            setWeather({ ...res, city: res.name, country: res.sys.country });
        });
        //fetch next days
        fetchWeather(`${DEF_N_D_H}`).then((res) => {
            console.log('Getting default api next days');
            console.log(res);
            setWeather(prev => ({ ...prev, daily: res.daily, hourly: res.hourly, current: res.current }));
            setLoading(false);
        });


    }, []);
    return [weather, loading, error, fetchWeather, searchByLocation, getWeatherLocation];
}