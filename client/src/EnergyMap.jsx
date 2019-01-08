import React, {Component} from 'react';
import GoogleMapReact from "google-map-react";

const data = require('./PlantBreakdown/plantinfo.json');
const LatLngData = require('./locationLatLng.json')

const latArr = [];
const lngArr = [];
LatLngData.map((x) => {
  latArr.push(x.lat)
  lngArr.push(x.lng)
})

const defaultProps = {
  center: {
    lat: 54.91142,
    lng: -114.528817
  },
  zoom: 5
};

export default class EnergyMap extends Component {

  render() {
    return <div className="second-row">
        <div className="map-container">
          <div className="block">
            <div className="map-title">PLANT MAP</div>
            <div className="map-content">
              <div style={{ height: "550px", width: "100%" }}>
                <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBd3oYQ2kl-BCQdt3MJANibAKu21Mbu0wg", libraries: "visualization" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => {
                    let dataArr = [];
                    for (let i = 0; i < latArr.length; i++) {
                      dataArr.push(new maps.LatLng(latArr[i], lngArr[i]))
                    }
                    const heatmap = new maps.visualization.HeatmapLayer(
                      {
                        data: dataArr,
                        radius: 20,
                        maxIntensity: 6
                      }
                    );

                    heatmap.setMap(map);
                  }}>
                </GoogleMapReact>
              </div>

              <div className="map-info">
                *Contents of this map are not exact.
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

