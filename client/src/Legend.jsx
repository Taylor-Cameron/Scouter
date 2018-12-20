import React, {Component} from 'react';

class Legend extends Component {
  render() {
    return(
      <div className="second-row">
        <div className="legend-container">
          <div className="legend-box">
            <div className="title">Gas</div>
                <img
                  src={ require('./docs/gas.png') }
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
              </div>
              <div className="legend-box">
                <div className="title">Coal</div>
                  <img
                    src={ require('./docs/coal.png') }
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                </div>
              <div className="legend-box">
                <div className="title">Wind</div>
                  <img
                    src={ require('./docs/wind.png') }
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                </div>
              <div className="legend-box">
                <div className="title">Hydro</div>
                  <img
                    src={ require('./docs/hydro.png') }
                    alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                </div>
              <div className="legend-box">
                <div className="title">Biofuel</div>
                <img
                  src={ require('./docs/bio.png') }
                  alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                </div>
          </div>
        </div>        
    )
  }
}

export default Legend;
