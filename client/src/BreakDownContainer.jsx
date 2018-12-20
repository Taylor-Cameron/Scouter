import React, {Component} from 'react';

class BreakdownContainer extends Component {



    render() {
        return(
          <div className="content-wrapper">
            <div className="breakdown-container">
              <div className="block">
                  <div className="breakdown-table-title">GENERATION - FUEL TYPE
                  </div>
                <table className="energy-source-breakdown-table">
              <tbody>
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
                      <div className="bar" id="coal-bar"></div>
                  </div>
                  <div>
                          <span bind="coalPercentage">{this.props.generation.breakdownContainer[1].COAL * 100}</span>%
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
                      <div className="bar" id="hydro-bar"></div>
                    </div>
                    <div>
                          <span bind="hydroPercentage">{this.props.generation.breakdownContainer[3].HYDRO * 100}</span>%
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
                    <tr id="GAS" className="energy-source-breakdown-standard-cell" onClick={this.props.button} >
                  <td className="energy-source-icon">
                    <img
                      src={ require('./docs/gas.png') }
                      alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                    />
                  </td>
                  <td className="energy-source-title">
                    <p>Gas</p>
                  </td>
                  <td className="energy-source-values">
                    <div className="bar-background">
                      <div className="bar" id="gas-bar"></div>
                    </div>
                    <div>
                          <span bind="gasPercentage">{this.props.generation.breakdownContainer[0].GAS * 100}</span>%
                    </div>
                    <div><span bind="gasOutput">0</span> MW</div>
                  </td>
                      <td className="energy-source-disclosure">
                    <img
                      id="GAS"
                      src={ require('./docs/arrow.png') }
                      alt="arrow"
                    />
                  </td>
                </tr>
                    <tr id="WIND" className="energy-source-breakdown-standard-cell" onClick={this.props.button} >
                  <td className="energy-source-icon">
                    <img
                      src={ require('./docs/wind.png') }
                      alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                    />
                  </td>
                  <td className="energy-source-title">
                    <p>Wind</p>
                  </td>
                  <td className="energy-source-values">
                    <div className="bar-background">
                      <div className="bar" id="wind-bar"></div>
                    </div>
                    <div>
                          <span bind="windPercentage">{this.props.generation.breakdownContainer[2].WIND * 100}</span>%
                    </div>
                    <div>
                      <span bind="windOutput">0</span> MW
                    </div>
                  </td>
                      <td className="energy-source-disclosure">
                    <img
                      id="WIND"
                      src={ require('./docs/arrow.png') }
                      alt="arrow"
                    />
                  </td>
                </tr>

                <tr id="BIOFUEL" className="energy-source-breakdown-standard-cell" onClick={this.props.button}>
                  <td className="energy-source-icon">
                    <img
                      src={ require('./docs/bio.png') }
                      alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                    />
                  </td>
                  <td className="energy-source-title">
                    <p>Biofuel</p>
                  </td>
                  <td className="energy-source-values">
                    <div className="bar-background">
                      <div className="bar" id="biofuel-bar"></div>
                    </div>
                    <div>
                      {/* TODO change name for "biomass and .." to "BIOMASS" */}
                          <span bind="biofuelPercentage">{this.props.generation.breakdownContainer[4]['BIOMASS AND OTHER'] * 100}</span>%
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
                {/* <tr className="energy-source-breakdown-import-export-cell">
                  <td colSpan="2">
                    <img
                      className="import-export-icon"
                      src={ require('./docs/albertamap.png') }
                      alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"
                    />
                  </td>
                  <td>
                    <div>import</div>
                    <div className="imports"><span bind="imports">0</span> MW</div>
                    <br />
                    <div>export</div>
                    <div className="exports"><span bind="exports">0</span> MW</div>
                    <br />
                    <div>net</div>
                    <div className="netImportExports">
                      <span bind="netImportExports">0</span> MW
                    </div>
                  </td>
                  <td className="energy-source-disclosure">
                    <img
                      src={ require('./docs/arrow.png') }
                      alt="Import Export"
                    />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default BreakdownContainer;