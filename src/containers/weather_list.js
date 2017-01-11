import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

  renderWeather(cityData) {
    return (
      <tr key={ cityData.city.id }>
        <td>{ cityData.city.name }, { cityData.city.country }</td>
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
