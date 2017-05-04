import axios from 'axios'; //發 request 的 library

const API_KEY ='62c18418dcea1b6fecb1be02fc27b01b';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER =  'FETCH_WEATHER';


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:',request);

  return{
    type: FETCH_WEATHER,
    payload: request
  };

}


//在 redux 的 action creator 中，我們只需要簡單地將 action 物件回傳就好。
