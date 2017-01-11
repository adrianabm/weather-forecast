import React, { Component } from 'react'

// Components
import SearchBar from '../containers/searchbar'
import WeatherList from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
