export const fetchWeatherFetch = async endpoint =>{
    
    try{
        const result = await (await fetch(endpoint)).json();
        return result;

    } catch(error){
        console.log(error);
    }
} 