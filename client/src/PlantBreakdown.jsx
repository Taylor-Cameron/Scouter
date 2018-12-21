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
        const plantArr = assets.map(a => a.data.map((info) => {
            return <tr>
                        <td>{info.ASSET}</td>
                        <td>{info.TNG}</td>
                        <td>{info.MC}</td>
                    </tr>
        }))
        // const plantMCArr = assets.map(i => i.data.map(b => b.MC))
        // const plantTNGArr = assets.map(l => l.data.map(c => c.TNG))
        // const plantName = plantNameArr.map((name) => {
        //     return <tr>
        //             <td key={name}>{name}</td>
        //             </tr>
        // })
        // const plantOutput = plantTNGArr.map((TNG) => {
        //   return <tr>
        //             <td key={TNG}>{TNG}</td>;
        //         </tr>
        // })
        // const plantMaxOutput = plantMCArr.map((MC) => {
        //     return <tr>
        //             <td key={MC}>{MC}</td>;
        //         </tr>
        // })
        return <div className="content-wrapper">
            <div className="plant-container">
              <div className="block">
                <div className="power-plant-breakdown-table-header">
                  <div className="breakdown-table-title">
                    GENERATION - PLANT
                  </div>
                  <div className={`power-plant-breakdown-summary biofuel-bar ${energytype.toLowerCase()}-bar`}>
                    <div>
                      <div className="power-plant-breakdown-summary-title">
                        {energytype}
                      </div>
                      <div className="power-plant-breakdown-summary-bar-background">
                        <div className="power-plant-breakdown-summary-bar" style={{ width: `${percentage}%` }} />
                      </div>
                      <div className="power-plant-breakdown-summary-values">
                        <div>
                          <span className="power-plant-breakdown-summary-percentage">
                            {percentage}
                          </span>% (of total grid)
                        </div>
                      </div>
                    </div>
                    <div className="power-plant-column-header">
                        <table className="power-plant-breakdown-table-div">
                            <tbody>
                                <tr>
                                    <th className="power-plant-name-data">
                                        POWER PLANT
                                    </th>
                                    <th className="power-plant-output-data">
                                        output
                                    </th>
                                    <th className="power-plant-capability-data">
                                        capability
                                    </th>
                                </tr>
                                {plantArr}
                            </tbody>
                        </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default PlantBreakdown;