import axios from 'axios'

const API_KEY = 'e47495bb46f8b063405b4befe6e9692f'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_WEATHER_DETAIL = 'FETCH_WEATHER_DETAIL'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`
  const request = axios.get(url)
  console.log(request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function fetchWeatherDetail(id) {
  const url = `${ROOT_URL}&id=${id}`
  const request = axios.get(url)
  console.log(request)

  return {
    type: FETCH_WEATHER_DETAIL,
    payload: request
  }
}
