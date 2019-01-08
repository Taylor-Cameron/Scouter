import React, { Component } from 'react';
import BreakDownRow from './breakDownRow';
import SubTitle from '../Titles/Subtitle';
class BreakdownContainer extends Component {
  render() {
    console.log(this.props.breakdownData)
    return (
      <div className="content-wrapper">
        <div className="breakdown-container">
          <SubTitle/>
            <table className="energy-source-breakdown-table">
              <tbody>
                {this.props.breakdownData.map(data => {
                  return (
                    <BreakDownRow bdcData={data}/>
                  );
                })}
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default BreakdownContainer;
