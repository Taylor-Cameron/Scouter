import React, { Component } from 'react';
import Hydrobdc from './Hydrobdc';

class BreakdownContainer extends Component {
  render() {
    console.log(this.props.breakdownData)
    return (
      <div className="content-wrapper">
        <div className="breakdown-container">
          <div className="breakdown-table-title">GENERATION - FUEL TYPE</div>
            <table className="energy-source-breakdown-table">
              <tbody>
                <Hydrobdc bdcData={this.props.breakdownData[2]}/>
                <Hydrobdc bdcData={this.props.breakdownData[0]}/>
                <Hydrobdc bdcData={this.props.breakdownData[1]}/>
                <Hydrobdc bdcData={this.props.breakdownData[3]}/>
                <Hydrobdc bdcData={this.props.breakdownData[4]}/>
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default BreakdownContainer;
