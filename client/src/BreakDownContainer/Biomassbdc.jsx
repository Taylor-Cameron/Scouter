import React, { Component } from 'react';

class Biomassbdc extends Component {
  render() {
    return (
      <tr id="BIOMASS" className="energy-source-breakdown-standard-cell" onClick={this.props.button}>
        <td className="energy-source-icon">
          <img src={require('../docs/bio.png')} alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
        </td>
        <td className="energy-source-title">
          <p>Biomass</p>
        </td>
        <td className="energy-source-values">
          <div className="bar-background">
            <div className="bar biofuel-bar" style={{ width: `${this.props.generation.breakdownContainer[0][4]['BIOMASS'] * 100}%` }} />
          </div>
          <div>
            <span bind="biofuelPercentage">{(this.props.generation.breakdownContainer[0][4]['BIOMASS'] * 100).toFixed(2)}</span>%
          </div>
          <div>
            <span bind="biofuelOutput">{this.props.generation.breakdownContainer[1][3]['BIOMASS AND OTHER']}</span> MW
          </div>
        </td>
        <td className="energy-source-disclosure">
          <img id="BIOFUEL" src={require('../docs/arrow.png')} alt="arrow" />
        </td>
      </tr>
    );
  }
}

export default Biomassbdc;
