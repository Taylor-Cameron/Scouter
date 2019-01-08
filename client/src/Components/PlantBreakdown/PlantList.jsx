import React, { Component } from 'react';
const data = require('./plantinfo.json');

class PlantList extends Component {
  showDetail = (info) => (event) => {
    const plantDetails = data.find((detail) => {
      return info.includes(detail.name);
    });
    this.props.setModalData(plantDetails);
  };
  render() {
    return (
      <tr>
        <td>
          <a href="#_" onClick={this.showDetail(this.props.Asset)}>
            {this.props.Asset}
          </a>
        </td>
        <td>{this.props.Tng}</td>
        <td>{this.props.Mc}</td>
      </tr>
    );
  }
}

export default PlantList;
