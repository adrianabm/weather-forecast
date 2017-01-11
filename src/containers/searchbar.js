import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <form className="search-input">
        <input
          placeholder="Find your city..."
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange.bind(this) }
        />
        <span className="search-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

export default SearchBar
