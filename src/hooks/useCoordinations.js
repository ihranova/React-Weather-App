import {useState, useEffect} from 'react';

export const useCoordinations = () =>{
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    const findCoordinates = () =>{
        if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition((pos)=>{
                setLat(pos.coords.latitude);
                setLong(pos.coords.longitude);
           })
        }else{
            console.log("It's not supported by this browser.")
        }
    }

    useEffect(() =>{
        //findCoordinates();
    },[lat,long]);
    return [{lat, long}, findCoordinates ]

}