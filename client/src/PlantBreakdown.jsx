import React, {Component} from 'react';

function getAssets(type, plants) {
    const outputArr = [];
    if (type.toLowerCase() === "gas") {
        outputArr.push({ "subtitle": "cogeneration", "data": plants['Cogeneration']})
        outputArr.push({ "subtitle": "Combined Cycle", "data": plants['Combined Cycle'] })
        outputArr.push({ "subtitle": "Simple Cycle", "data": plants['Simple Cycle'] })
        return outputArr; // this is an object
    }
    return [{"data": plants[type]}]; // this is an array
}
class PlantBreakdown extends Component {

    render() {
        const { energytype, generation, powerPlants } = this.props;
        const percentageObj = generation.breakdownContainer.find(type => type[energytype])
        let percentage = percentageObj ? percentageObj[energytype] : 0;
        percentage = (percentage * 100).toFixed(2)
        const plants = powerPlants.plantBreakdown
        const assets = getAssets(energytype, plants);
        console.log("energytype on plant", energytype)
        console.log("this is for you", plants);
        console.log(assets)
        return(
            <div className="content-wrapper">
                <div className="plant-container">
                    <div className="block">
                    <div className="power-plant-breakdown-table-header">
                        <div className="breakdown-table-title">GENERATION - PLANT
                        </div>
                        <div className={`power-plant-breakdown-summary biofuel-bar ${energytype.toLowerCase()}-bar`}>
                        <div>
                                <div className="power-plant-breakdown-summary-title">{energytype}</div>
                        <div className="power-plant-breakdown-summary-bar-background">
                                    <div className="power-plant-breakdown-summary-bar" style={{width: `${percentage}%`}}></div>
                                </div>
                                <div className="power-plant-breakdown-summary-values">
                                    <div>
                                            <span className="power-plant-breakdown-summary-percentage">{percentage}</span>% (of total grid)</div>
                                        <div>
                                            {/* <div className="power-plant-breakdown-summary-total">-- </div> MW */}
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