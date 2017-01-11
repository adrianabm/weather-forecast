import { combineReducers } from 'redux'
import WeatherReducer from './reducer_weather'
import WeatherDetailReducer from './reducer_weather_detail'

const rootReducer = combineReducers({
  weather: WeatherReducer,
  weatherDetail: WeatherDetailReducer,
})

export default rootReducer
