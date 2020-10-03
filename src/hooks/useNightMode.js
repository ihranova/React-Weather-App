import { useState, useEffect } from 'react';

export const useNightMode = () => {
    const [nightMode, setNightMode] = useState(false);

    const nightModeChanged = () => {
        setNightMode(!nightMode);
        localStorage.setItem('theme', !nightMode);
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('theme'))) {
            setNightMode(!nightMode);
        } else {
            localStorage.setItem('theme', nightMode)
        }
        //detect browser is using the dark mode
        let darkTheme =  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(darkTheme){
            nightModeChanged();
        }

    }, []);
    return [nightMode, nightModeChanged];

}