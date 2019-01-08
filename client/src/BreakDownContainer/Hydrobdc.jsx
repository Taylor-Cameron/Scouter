import React, { Component } from 'react';

class Hydrobdc extends Component {
  render() {
    return (
      <tr id="HYDRO" className="energy-source-breakdown-standard-cell" onClick={this.props.button}>
        <td className="energy-source-icon">
          <img src={require('../docs/hydro.png')} alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
        </td>
        <td className="energy-source-title">
          <p>Hydro</p>
        </td>
        <td className="energy-source-values">
          <div className="bar-background">
            <div className="bar hydro-bar" style={{ width: `${this.props.generation.breakdownContainer[0][3].HYDRO * 100}%` }} />
          </div>
          <div>
            <span bind="hydroPercentage">{(this.props.generation.breakdownContainer[0][3].HYDRO * 100).toFixed(2)}</span>%
          </div>
          <div>
            <span bind="hydroOutput">{this.props.generation.breakdownContainer[1][4].HYDRO}</span> MW
          </div>
        </td>
        <td className="energy-source-disclosure">
          <img id="HYDRO" src={require('../docs/arrow.png')} alt="arrow" />
        </td>
      </tr>
    );
  }
}

export default Hydrobdc;
