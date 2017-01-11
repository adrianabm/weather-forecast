import { FETCH_WEATHER_DETAIL } from '../actions/index'

export default function(state = {}, action ) {
  switch (action.type) {
    case FETCH_WEATHER_DETAIL:
    console.log(action.payload.data)

      return action.payload.data
    }
  return state
}
