import React, {Component} from 'react';
import GoogleMapReact from "google-map-react";
import Geocode from 'react-geocode';

const data = require("./plantinfo.json");

function geoLocation(data) {
  const geoLocation = [];
  data.forEach((x) => {
    Geocode.fromAddress(x.location)
      .then(
        response => {
          const { lat, lng } = response.results[0].geometry.location
          geoLocation.push({lat, lng});
        }
      )
  })
  return geoLocation
}

Geocode.setApiKey("AIzaSyBd3oYQ2kl-BCQdt3MJANibAKu21Mbu0wg");

const defaultProps = {
  center: {
    lat: 54.91142,
    lng: -114.528817
  },
  zoom: 5
};

export default class EnergyMap extends Component {

  render() {
    Geocode.enableDebug();
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
                    const locations = [];
                    const points = geoLocation(data);
                    const heatLocations = points.map(x => {
                      locations.push(new maps.LatLng(x.lat, x.lng))
                    })
                    console.log("SDFSDFASD", heatLocations);
                    const heatmap = new maps.visualization.HeatmapLayer({
                      data: [new maps.LatLng(54.91141, -114.528817)]
                    });

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

