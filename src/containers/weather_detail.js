import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeatherDetail } from '../actions/index'
import { bindActionCreators } from 'redux'

class WeatherDetail extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentDidMount() {
    const cityId = this.props.params.cityId
    this.props.fetchWeatherDetail(cityId)
  }


  render() {
    return (
      <div>
        { this.props.params.cityId }
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
