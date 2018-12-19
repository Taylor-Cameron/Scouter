import React, {Component} from 'react';

class PlantBreakdown extends Component {

    render() {
        console.log(this.props.powerPlants.plantBreakdown)
        return(
            <div className="content-wrapper">
                <div className="plant-container">
                    <div className="block">
                    <div className="power-plant-breakdown-table-header">
                        <div className="breakdown-table-title">GENERATION - PLANT
                        </div>
                        <div className="power-plant-breakdown-summary">
                        <div>
                                <div className="power-plant-breakdown-summary-title">coal</div>
                        <div className="power-plant-breakdown-summary-bar-background">
                                    <div className="power-plant-breakdown-summary-bar"></div>
                                </div>
                                <div className="power-plant-breakdown-summary-values">
                                    <div>
                                        <span className="power-plant-breakdown-summary-percentage">{this.props.generation.breakdownContainer[1].COAL * 100}</span>% (of total grid)</div>
                                        <div>
                                            <span className="power-plant-breakdown-summary-total">-- </span> MW
                                        </div>
                                    </div>
                                </div>
                                <div className="power-plant-column-header">
                                    <table>
                                        <tr>
                                            <td className="power-plant-name-data">
                                                POWER PLANT
                                            </td>
                                            <td className="power-plant-output-data">
                                                output
                                            </td>
                                            <td className="power-plant-capability-data">
                                                capability
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default PlantBreakdown;