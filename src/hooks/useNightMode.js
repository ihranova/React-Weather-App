import {useState, useEffect} from 'react';

export const useNightMode = () =>{
    const [nightMode,setNightMode] = useState(false);

    const nightModeChanged = () =>{
        setNightMode(!nightMode);
        localStorage.setItem('theme', !nightMode);
    }

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('theme'))){
            setNightMode(!nightMode);
        }else{
            localStorage.setItem('theme', nightMode)
        }
    },[]);
    return [nightMode, nightModeChanged];

}