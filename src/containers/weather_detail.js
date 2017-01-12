import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeatherDetail } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'


class WeatherDetail extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const cityId = this.props.params.cityId
    this.props.fetchWeatherDetail(cityId)
  }


  render() {
    const { city, list } = this.props.weatherDetail
    console.log([list])


    if (!city) {
      return <div>Loading...</div>
    }

    // TODO: refactoring this code...

    var bgColorClass = 'detail-weather-widget '
      // Set the background colour based on the temperature
      if (list[0].main.temp.toFixed(1) >= 30) {
          bgColorClass += 'very-warm';
      }
      else if (list[0].main.temp.toFixed(1) > 20 && list[0].main.temp.toFixed(1) < 30) {
          bgColorClass += 'warm';
      }
      else if (list[0].main.temp.toFixed(1) > 10 && list[0].main.temp.toFixed(1) < 20) {
          bgColorClass += 'normal';
      }
      else if (list[0].main.temp.toFixed(1) > 0 && list[0].main.temp.toFixed(1) < 10) {
          bgColorClass += 'cold';
      }
      else if (list[0].main.temp.toFixed(1) <= 0) {
          bgColorClass += 'very-cold';
    }

    return (
      <div className={ bgColorClass }>
        <Link to={`/`} className="button-back"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
        <div className="row">
          <div className="col-xs-12">
            <h2>{ city.name }, { city.country }</h2>
            <h1>{ list[0].main.temp.toFixed(1) } °C</h1>
            <div>
              <i className={ "detail-icon wi wi-owm-" + list[0].weather[0].id }></i>
              <h4>{ list[0].weather[0].description } </h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-6">
            <p><i className="wi wi-small-craft-advisory detail-icon-small"></i> { list[0].wind.speed } m/s </p>
          </div>
          <div className="col-xs-6">
            <p><i className="wi wi-raindrop detail-icon-small"></i> { list[0].main.humidity } % </p>
          </div>
        </div>

        {/* TODO forecast for the following days */}
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
