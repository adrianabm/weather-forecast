import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeatherDetail } from '../actions/index'
import { bindActionCreators } from 'redux'

class WeatherDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const cityId = this.props.params.cityId
    this.props.fetchWeatherDetail(cityId)
  }


  render() {
    const { city } = this.props.weatherDetail
    const { list } = this.props.weatherDetail
    console.log(list)

    if (!city) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>{ city.name }, { city.country }</h2>
        <h1>{ list[0].main.temp.toFixed(1) } °C</h1>
        <i className={ " wi wi-owm-" + list[0].weather[0].id }></i>
      </div>
    )
  }
}

function mapStateToProps({ weatherDetail }) {
  return { weatherDetail }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeatherDetail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail)
