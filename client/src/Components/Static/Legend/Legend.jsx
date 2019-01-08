import React, {Component} from 'react';
import Legenditem from './LegendItem';

class Legend extends Component {
  render() {
    const legendArr = ["Gas", "Coal", "Wind", "Hydro", "Biomass"];
    return(
      <div className="second-row legend-container">
            <div className="legend-title">LEGEND</div>
            {legendArr.map((ele, index) => {
              return (
                <Legenditem key={index} fuel={ele}/>
              );
            })}
      </div>    
    )
  }
}

export default Legend;
