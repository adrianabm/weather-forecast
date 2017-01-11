import React, { Component } from 'react'
import { connect } from 'react-redux'


class WeatherList extends Component {

  renderWeather(cityData) {
    const city = cityData.name
    const country = cityData.sys.country
    const temp = cityData.main.temp
    const iconId = cityData.weather[0].id

    return (
      <tr key={ city }>
        <td>{ city }, { country }</td>
        <td>{ temp.toFixed(1) } °C </td>
        <td><i className={ "owf owf-" + iconId }></i></td>
        <td >{ iconId }</td>
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
