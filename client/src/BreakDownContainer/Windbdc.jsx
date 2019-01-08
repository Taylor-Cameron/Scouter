import React, { Component } from 'react';

class Windbdc extends Component {
  render() {
    return (
      <tr id="WIND" className="energy-source-breakdown-standard-cell" onClick={this.props.button}>
        <td className="energy-source-icon">
          <img src={require('../docs/wind.png')} alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
        </td>
        <td className="energy-source-title">
          <p>Wind</p>
        </td>
        <td className="energy-source-values">
          <div className="bar-background">
            <div className="bar wind-bar" style={{ width: `${this.props.generation.breakdownContainer[0][2].WIND * 100}%` }} />
          </div>
          <div>
            <span bind="windPercentage">{(this.props.generation.breakdownContainer[0][2].WIND * 100).toFixed(2)}</span>%
          </div>
          <div>
            <span bind="windOutput">{this.props.generation.breakdownContainer[1][2].WIND}</span> MW
          </div>
        </td>
        <td className="energy-source-disclosure">
          <img id="WIND" src={require('../docs/arrow.png')} alt="arrow" />
        </td>
      </tr>
    );
  }
}

export default Windbdc;
