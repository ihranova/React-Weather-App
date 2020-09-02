export const fetchWeatherFetch = async endpoint => {

    try {
        const result = await (await fetch(endpoint)).json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const convertF = (x) => {
    return (x - 237.15) *  9 / 5 + 32;
}

export const convertC = (x) =>{
    return x - 273.15;
}