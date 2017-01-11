import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

  renderWeather(cityData) {
    const city =cityData.city.name
    const country =cityData.city.country
    const temp_now = cityData.list[0].main.temp
    const icon = cityData.list[0].weather[0].icon

    return (
      <tr key={ city }>
        <td>{ city }, { country }</td>
        <td>{ parseInt(temp_now) } °C </td>
        <td>{ icon }</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
