import { useState, useEffect } from 'react';
import { SEARCH_DEFAULT } from '../api';

export const useImageFetch = () => {
    const [image, setImage] = useState('');
    const fecthImage = async endpoint => {
        try {
            const result = await (await fetch(endpoint)).json();
            setImage(result.results[Math.floor(Math.random() * 10)].urls.regular);
            //console.log(result.results[0].urls.regular);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fecthImage(`${SEARCH_DEFAULT}`);
    }, []);

    return [image, fecthImage];

}