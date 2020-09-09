import { useState } from 'react';

export const useCoordinations = () => {
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [loadingLocation, setLoadingLocation] = useState(false);

    const findCoordinates = () => {
        if (navigator.geolocation) {
            setLoadingLocation(true);
            navigator.geolocation.getCurrentPosition((pos) => {
                console.log(pos);
                setLat(pos.coords.latitude);
                setLong(pos.coords.longitude);
                
                
            }, (positionError) => {
                setLat('41.390205');
                setLong('2.154007');
                console.log(positionError);
            });
            setLoadingLocation(false);
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