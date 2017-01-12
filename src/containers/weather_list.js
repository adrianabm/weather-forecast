import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import SearchBar from './searchbar'


class WeatherList extends Component {

  renderWeather(cityData) {
    const city = cityData.name
    const country = cityData.sys.country
    const temp = cityData.main.temp
    const iconId = cityData.weather[0].id

    var bgColorClass = 'weather-widget '
      // Set the background colour based on the temperature
      if (temp >= 30) {
          bgColorClass += 'very-warm';
      }
      else if (temp > 20 && temp < 30) {
          bgColorClass += 'warm';
      }
      else if (temp > 10 && temp < 20) {
          bgColorClass += 'normal';
      }
      else if (temp > 0 && temp < 10) {
          bgColorClass += 'cold';
      }
      else if (temp <= 0) {
          bgColorClass += 'very-cold';
    }

    return (
      <Link to={`/${ cityData.id }`}
        key={ cityData.id }
        className="list-link">
        <div className={ bgColorClass }>
          <h2>{ city }, { country }</h2>
          <div>{ temp.toFixed(1) } °C </div>
          <div><i className={ "list-icon wi wi-owm-" + iconId }></i></div>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="table">
          { this.props.weather.map(this.renderWeather) }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
