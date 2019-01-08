import React, { Component } from 'react';
import Gasbdc from './Gasbdc';
import Hydrobdc from './Hydrobdc';
class EnergySourceBreakdown extends Component {
  render() {
    return (
      <table className="energy-source-breakdown-table">
        <tbody>
          <Hydrobdc />>
        </tbody>
      </table>
    );
  }
}

export default EnergySourceBreakdown;
