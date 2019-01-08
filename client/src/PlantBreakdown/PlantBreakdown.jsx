import React, { Component } from 'react';
import PlantList from './PlantList';
const data = require('./plantinfo.json');

class PlantBreakdown extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="plant-container">
          <div className="power-plant-breakdown-table-header">
            <div className="breakdown-table-title">GENERATION - PLANT</div>
            <div className={`power-plant-breakdown-summary biomass-bar ${this.props.energytype.toLowerCase()}-bar`}>
              <div className="power-plant-breakdown-summary-title">
                {this.props.energytype}
                <div className="power-plant-breakdown-summary-bar-background">
                  <div className="power-plant-breakdown-summary-bar" style={{ width: `${this.props.targetPercent}%` }} />
                </div>
                <div className="power-plant-breakdown-summary-values">
                  <div>
                    <span className="power-plant-breakdown-summary-percentage">{this.props.targetPercent}</span>% (of total grid)
                  </div>
                </div>
              </div>
              <div className="power-plant-column-header">
                <table className="power-plant-breakdown-table-div">
                  <thead>
                    <tr>
                      <th className="power-plant-name-data">POWER PLANT</th>
                      <th className="power-plant-output-data">output</th>
                      <th className="power-plant-capability-data">capability</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.plantArr.map(data => {
                    return (
                      <PlantList 
                      Asset={data.Asset}
                      Mc = {data.Mc}
                      Tng = {data.Tng}
                      />
                    );
                  })}
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantBreakdown;
