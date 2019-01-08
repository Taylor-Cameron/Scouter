import React, { Component } from 'react';
import EnegySourceBreakdown from './EnergySourceBreakdown'
class BreakdownContainer extends Component {
  render() {
    console.log(this.props.totals[2].Tng)
    return (
      <div className="content-wrapper">
        <div className="breakdown-container">
          <div className="breakdown-table-title">GENERATION - FUEL TYPE</div>
          <EnegySourceBreakdown totalPercentBreakdown={this.props.totalPercent} totalBreakdown={this.props.totals[2].Tng}/>
        </div>
      </div>
    );
  }
}

export default BreakdownContainer;
