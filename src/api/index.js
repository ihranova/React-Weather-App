//*** OPEN WEATHER ****//
const API_APPID = process.env.REACT_APP_API_KEY_APPID;
const API_UNPSLASH = process.env.REACT_APP_API_KEY_UNSPLASH;

const API_URL_APPID = 'http://api.openweathermap.org/data/2.5/weather';
const DEFAULT_URL = `${API_URL_APPID}/?q=Spain&APPID=${API_APPID}`;
const SEARCH_BY_LOCATION = `${API_URL_APPID}?appid=${API_APPID}`; //&lat={lat}&lon={lon}

const URL_UNSPLASH = 'https://api.unsplash.com/search/photos';
const SEARCH_BY_WORD = `${URL_UNSPLASH}?client_id=${API_UNPSLASH}&page=1&query=`;
const SEARCH_DEFAULT = `${URL_UNSPLASH}?client_id=${API_UNPSLASH}&page=1&query=Spain`;



export {API_URL_APPID,API_APPID,DEFAULT_URL,SEARCH_BY_LOCATION,SEARCH_BY_WORD,SEARCH_DEFAULT}