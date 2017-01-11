import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

  renderWeather(cityData) {
    const city =cityData.city.name
    const country =cityData.city.country
    const temp_now = cityData.list[0].main.temp

    return (
      <tr key={ city }>
        <td>{ city }, { country }</td>
        <td>{ temp_now }</td>
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
