import React, { Component } from 'react';

class Gasbdc extends Component {
  render() {
    return (
      <tr id="GAS" className="energy-source-breakdown-standard-cell" onClick={this.props.button}>
        <td className="energy-source-icon">
          <img src={require('../docs/gas.png')} alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
        </td>
        <td className="energy-source-title">
          <p>Gas</p>
        </td>
        <td className="energy-source-values">
          <div className="bar-background">
            <div className="bar gas-bar" style={{ width: `${this.props.generation.breakdownContainer[0][0].GAS * 100}%` }} />
          </div>
          <div>
            <span bind="gasPercentage">{(this.props.generation.breakdownContainer[0][0].GAS * 100).toFixed(2)}</span>%
          </div>
          <div>
            <span bind="gasOutput">{this.props.generation.breakdownContainer[1][0].GAS}</span> MW
          </div>
        </td>
        <td className="energy-source-disclosure">
          <img id="GAS" src={require('../docs/arrow.png')} alt="arrow" />
        </td>
      </tr>
    );
  }
}

export default Gasbdc;
