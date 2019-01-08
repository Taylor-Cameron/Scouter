import React, { Component } from 'react';
import EnegySourceBreakdown from './EnergySourceBreakdown'
class BreakdownContainer extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="breakdown-container">
          <div className="breakdown-table-title">GENERATION - FUEL TYPE</div>
          <EnegySourceBreakdown />
        </div>
      </div>
    );
  }
}

export default BreakdownContainer;
