import React, { Component } from 'react';
import Gasbdc from './Gasbdc';
import Hydrobdc from './Hydrobdc';
class EnergySourceBreakdown extends Component {
  render() {
    // console.log(this.props.totalPercentBreakdown)
    return (
      <table className="energy-source-breakdown-table">
        <tbody>
          <Hydrobdc hydroPercentData={this.props.totalPercentBreakdown} hydroData={this.props.totalBreakdown}/>
        </tbody>
      </table>
    );
  }
}

export default EnergySourceBreakdown;
