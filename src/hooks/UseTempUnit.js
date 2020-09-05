import { useState, useEffect } from 'react';

export const useTempUnit = () => {
    const [unitMode, setUnitMode] = useState(false);

    const unitModeChanged = () => {
        setUnitMode(!unitMode);
        localStorage.setItem('unit', !unitMode);
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('unit'))) {
            setUnitMode(!unitMode);
        } else {
            localStorage.setItem('unit', unitMode);
        }
    }, []);
    return [unitMode, unitModeChanged];

}