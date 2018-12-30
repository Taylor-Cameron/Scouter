import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 54.91142,
    lng: -114.528817
  },
  zoom: 5
};

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
            <div style={{ height: '550px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBd3oYQ2kl-BCQdt3MJANibAKu21Mbu0wg" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>

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
