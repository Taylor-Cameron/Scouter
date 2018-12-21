import React, {Component} from 'react';

class Legend extends Component {
  render() {
    return(
      <div className="second-row">
        <div className="legend-container">
            <div className="legend-title">LEGEND</div>
            <div className="classification">Gas</div>
                <img
                  className="legend-img"
                  src={ require('./docs/gas.png') }
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                <div className="classification">Coal</div>
                  <img
                    className="legend-img"
                    src={ require('./docs/coal.png') }
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                <div className="classification">Wind</div>
                  <img
                    className="legend-img"
                    src={ require('./docs/wind.png') }
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                <div className="classification">Hydro</div>
                  <img
                    className="legend-img"
                    src={ require('./docs/hydro.png') }
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                <div className="classification">Biofuel</div>
                <img
                  className="legend-img"
                  src={ require('./docs/bio.png') }
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
          </div>
        </div>    
    )
  }
}

export default Legend;
