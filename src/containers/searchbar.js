import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <form className="search-input">
        <input />
        <span className="search-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

export default SearchBar
