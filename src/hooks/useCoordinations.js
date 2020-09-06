import { useState } from 'react';

export const useCoordinations = () => {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [loadingLocation, setLoadingLocation] = useState(false);

    const findCoordinates = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLoadingLocation(true);
                setLat(pos.coords.latitude);
                setLong(pos.coords.longitude);
                setLoadingLocation(false);
            })
        } else {
            console.log("It's not supported by this browser.")
        }
    }

    const updateLocation = (lat, long) => {
        setLat(lat);
        setLong(long);
        //console.log('Updated Location')
    }

    return [{ lat, long }, loadingLocation, findCoordinates, updateLocation];
}