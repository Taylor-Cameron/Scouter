import React, { Component } from 'react';
import BreakDownRow from './breakDownRow';
import SubTitle from '../Titles/Subtitle';
class BreakdownContainer extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="breakdown-container">
          <SubTitle/>
            <table className="energy-source-breakdown-table">
              <tbody>
                {this.props.breakdownData.map(data => {
                  return (
                    <BreakDownRow key={data.Asset} clickHandle={this.props.clickHandle} bdcData={data}/>
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
