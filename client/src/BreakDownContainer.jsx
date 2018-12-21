import React, {Component} from 'react';

class BreakdownContainer extends Component {



    render() {
      console.log(this.props)
        return(
          <div className="content-wrapper">
            <div className="breakdown-container">
              <div className="block">
                  <div className="breakdown-table-title">GENERATION - FUEL TYPE
                  </div>
                <table className="energy-source-breakdown-table">
              <tbody>
                  <tr id="GAS" className="energy-source-breakdown-standard-cell" onClick={this.props.button} >
                    <td className="energy-source-icon">
                      <img
                        src={require('./docs/gas.png')}
                        alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                      />
                    </td>
                    <td className="energy-source-title">
                      <p>Gas</p>
                    </td>
                    <td className="energy-source-values">
                      <div className="bar-background">
                          <div className="bar gas-bar" style={{ width: `${(this.props.generation.breakdownContainer[0].GAS * 100)}%` }}></div>
                      </div>
                      <div>
                        <span bind="gasPercentage">{(this.props.generation.breakdownContainer[0].GAS * 100).toFixed(2)}</span>%
                    </div>
                      <div><span bind="gasOutput">0</span> MW</div>
                    </td>
                    <td className="energy-source-disclosure">
                      <img
                        id="GAS"
                        src={require('./docs/arrow.png')}
                        alt="arrow"
                      />
                    </td>
                  </tr>
                    <tr id="COAL" className="energy-source-breakdown-standard-cell" onClick={this.props.button} >
                  <td className="energy-source-icon">
                    <img
                      src={ require('./docs/coal.png') }
                      alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                    />
                  </td>
                  <td className="energy-source-title">
                    <p>Coal</p>
                  </td>
                  <td className="energy-source-values">
                      <div className="bar-background">
                          <div className="bar coal-bar" style={{ width: `${(this.props.generation.breakdownContainer[1].COAL * 100)}%` }}></div>
                  </div>
                  <div>
                          <span bind="coalPercentage">{(this.props.generation.breakdownContainer[1].COAL * 100).toFixed(2)}</span>%
                  </div>
                  <div>
                      <span bind="coalOutput">0</span> MW
                  </div>
                  </td>
                  <td className="energy-source-disclosure">
                  <img
                    id="COAL"
                    src={ require('./docs/arrow.png') }
                    alt="arrow"
                  />
                  </td>
              </tr>
                    <tr id="WIND" className="energy-source-breakdown-standard-cell" onClick={this.props.button} >
                      <td className="energy-source-icon">
                        <img
                          src={require('./docs/wind.png')}
                          alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                        />
                      </td>
                      <td className="energy-source-title">
                        <p>Wind</p>
                      </td>
                      <td className="energy-source-values">
                        <div className="bar-background">
                          <div className="bar wind-bar" style={{ width: `${(this.props.generation.breakdownContainer[0][2].WIND * 100)}%` }}></div>
                        </div>
                        <div>
                          <span bind="windPercentage">{(this.props.generation.breakdownContainer[0][2].WIND * 100).toFixed(2)}</span>%
                    </div>
                        <div>
                          <span bind="windOutput">0</span> MW
                    </div>
                      </td>
                      <td className="energy-source-disclosure">
                        <img
                          id="WIND"
                          src={require('./docs/arrow.png')}
                          alt="arrow"
                        />
                      </td>
                    </tr>
                    <tr id="HYDRO" className="energy-source-breakdown-standard-cell" onClick={this.props.button} >
                  <td className="energy-source-icon">
                    <img
                      src={ require('./docs/hydro.png') }
                      alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                    />
                  </td>
                  <td className="energy-source-title">
                        <p>Hydro</p>
                  </td>
                  <td className="energy-source-values">
                    <div className="bar-background">
                          <div className="bar hydro-bar" style={{ width: `${(this.props.generation.breakdownContainer[0][3].HYDRO * 100)}%` }}></div>
                    </div>
                    <div>
                          <span bind="hydroPercentage">{(this.props.generation.breakdownContainer[0][3].HYDRO * 100).toFixed(2)}</span>%
                    </div>
                    <div>
                      <span bind="hydroOutput">0</span> MW
                    </div>
                  </td>
                      <td className="energy-source-disclosure">
                    <img
                      id="HYDRO"
                      src={ require('./docs/arrow.png') }
                      alt="arrow"
                    />
                  </td>
                </tr>

                <tr id="BIOMASS AND OTHER" className="energy-source-breakdown-standard-cell" onClick={this.props.button}>
                  <td className="energy-source-icon">
                    <img
                      src={ require('./docs/bio.png') }
                      alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                    />
                  </td>
                  <td className="energy-source-title">
                    <p>Biomass</p>
                  </td>
                  <td className="energy-source-values">
                    <div className="bar-background">
                          <div className="bar biofuel-bar" style={{ width: `${(this.props.generation.breakdownContainer[0][4]['BIOMASS AND OTHER'] * 100)}%` }}></div>
                    </div>
                    <div>
                      <span bind="biofuelPercentage">{(this.props.generation.breakdownContainer[0][4]['BIOMASS AND OTHER'] * 100).toFixed(2)}</span>%
                    </div>
                    <div>
                      <span bind="biofuelOutput">0</span> MW
                    </div>
                  </td>
                      <td className="energy-source-disclosure">
                    <img
                      id="BIOFUEL"
                      src={ require('./docs/arrow.png') }
                      alt="arrow"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default BreakdownContainer;