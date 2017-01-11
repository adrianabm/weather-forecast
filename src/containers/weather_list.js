import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <tbody>
          <tr>
            <td>City</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
