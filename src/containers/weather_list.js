import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import SearchBar from './searchbar'


class WeatherList extends Component {

  renderWeather(cityData) {
    const city = cityData.city.name
    const id = cityData.city.id
    const country = cityData.city.country
    const temp = cityData.list[0].main.temp
    const iconId = cityData.list[0].weather[0].id

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
      <Link to={`/${ id }`}
        key={ id }
        className="list-link">
        <div className={ bgColorClass + " row" }>
          <div className="col-xs-12 col-sm-6">
            <h5>{ city }, { country }</h5>
            <h2 className="margin-top">{ temp.toFixed(1) } °C </h2>
          </div>
          <div className="list-icon col-xs-12 col-sm-6">
            <i className={ " wi wi-owm-" + iconId }></i>
          </div>
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
