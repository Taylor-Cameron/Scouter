import React, {Component} from 'react';

class PlantBreakdown extends Component {

    render() {
        console.log(this.props)
        const percentageObj = this.props.generation.breakdownContainer.find(type => type[this.props.energytype])
        let percentage = percentageObj ? percentageObj[this.props.energytype] : 0;
        percentage = (percentage * 100).toFixed(2)
        return(
            <div className="content-wrapper">
                <div className="plant-container">
                    <div className="block">
                    <div className="power-plant-breakdown-table-header">
                        <div className="breakdown-table-title">GENERATION - PLANT
                        </div>
                        <div className={`power-plant-breakdown-summary biofuel-bar ${this.props.energytype.toLowerCase()}-bar`}>
                        <div>
                                <div className="power-plant-breakdown-summary-title">{this.props.energytype}</div>
                        <div className="power-plant-breakdown-summary-bar-background">
                                    <div className="power-plant-breakdown-summary-bar" style={{width: `${percentage}%`}}></div>
                                </div>
                                <div className="power-plant-breakdown-summary-values">
                                    <div>
                                            <span className="power-plant-breakdown-summary-percentage">{percentage}</span>% (of total grid)</div>
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