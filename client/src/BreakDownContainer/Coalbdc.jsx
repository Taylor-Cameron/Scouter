import React, { Component } from 'react';

class Coalbdc extends Component {
  render() {
    return (
      <tr id="COAL" className="energy-source-breakdown-standard-cell" onClick={this.props.button}>
        <td className="energy-source-icon">
          <img src={require('../docs/coal.png')} alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
        </td>
        <td className="energy-source-title">
          <p>Coal</p>
        </td>
        <td className="energy-source-values">
          <div className="bar-background">
            <div className="bar coal-bar" style={{ width: `${this.props.generation.breakdownContainer[0][1].COAL * 100}%` }} />
          </div>
          <div>
            <span bind="coalPercentage">{(this.props.generation.breakdownContainer[0][1].COAL * 100).toFixed(2)}</span>%
          </div>
          <div>
            <span bind="coalOutput">{this.props.generation.breakdownContainer[1][1].COAL}</span> MW
          </div>
        </td>
        <td className="energy-source-disclosure">
          <img id="COAL" src={require('../docs/arrow.png')} alt="arrow" />
        </td>
      </tr>
    );
  }
}

export default Coalbdc;
