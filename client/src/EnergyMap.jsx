import React, {Component} from 'react';

class EnergyMap extends Component {
  render() {
    return(
      <div className="second-row">
        <div className="map-container">
          <div className="block">
            <div className="map-title">
            PLANT MAP
            </div>
            <div className="map-content">
            <img
              className="map-pic"
              src={ require('./docs/fakemap.png') }
              alt='REPLACE THIS MAP'/>
              <div className="map-info">
                *Contents of this map are not exact.
              </div>
            </div>
          </div>
        </div>
      </div>        
    )
  }
}

export default EnergyMap;
