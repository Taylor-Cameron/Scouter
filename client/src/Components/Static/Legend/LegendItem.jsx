

import React, {Component} from 'react';
class Legenditem extends Component {
  render() {
    return(
      <div>
      <div className="classification">{this.props.fuel}</div>
      <img 
      className="legend-img" 
      src={ require(`../../../docs/${this.props.fuel.toLowerCase()}.png`)} 
      alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com" 
      />
      </div>
    )
  }
}
export default Legenditem;
