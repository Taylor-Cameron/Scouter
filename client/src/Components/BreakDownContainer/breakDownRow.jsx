import React, { Component } from 'react';

class BreakDownRow extends Component {

  render() {
    const lowerTitle = this.props.bdcData.Asset.toLowerCase();
    const firstCapital =  lowerTitle.charAt(0).toUpperCase() + lowerTitle.slice(1);
    return (
      <tr id={this.props.bdcData.Asset} className="energy-source-breakdown-standard-cell" onClick={this.props.clickHandle}>
        <td className="energy-source-icon">
          <img src={require(`../../docs/${(this.props.bdcData.Asset).toLowerCase()}.png`)} alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" />
        </td>
        <td className="energy-source-title">
          <p>{firstCapital}</p>
        </td>
        <td className="energy-source-values">
          <div className="bar-background">
            <div className={`bar ${lowerTitle}-bar`} style={{ width: `${this.props.bdcData.percentTng}%` }} />
          </div>
          <div>
            <span bind={`${lowerTitle}Percentage`}>{this.props.bdcData.percentTng}</span>%
          </div>
          <div>
            <span bind={`${lowerTitle}Output`}>{this.props.bdcData.Tng}</span> MW
          </div>
        </td>
        <td className="energy-source-disclosure">
          <img id={this.props.bdcData.Asset} src={require('../../docs/arrow.png')} alt="arrow" />
        </td>
      </tr>
    );
  }
}

export default BreakDownRow;
