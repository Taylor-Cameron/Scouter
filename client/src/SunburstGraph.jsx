import React, { PureComponent } from 'react';
import Sunburst from './SunBurst';
import Directions from './Directions';

const DIVERGING_COLOR_SCALE = ['#00939C', '#85C4C8', '#EC9370', '#C22E00'];
const data = {
    "name": "TOTAL", "children": [
        {
            "name": "COAL", "children": [
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 }
            ]
        },
        {
            "name": "Hydro", "children": [
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 }
            ]
        },
        {
            "name": "WIND", "children": [
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
            ]
        },
        {
            "name": "BIOMASS", "children": [
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
                { "name": "COAL", "size": 34 },
            ]
        },
        {
            "name": "GAS", "children": [
                {
                    "name": "TEST", "children": [
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                    ]
                },
                {
                    "name": "TEST2", "children": [
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                    ]
                },
                {
                    "name": "TEST3", "children": [
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                         { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 },
                        { "name": "COAL", "size": 34 }
                    ]
                }
            ]
        },


    ]
}
class SunBurstGraph extends PureComponent {
    showDirections = (event) => {
        this.props.setModalData(true)
    }
    render() {

        return (
            <div className="second-row'">
                <div className="sunburst-wrapper">
                        <div className="sunburst-title">
                            CURRENT ENERGY OUTPUT
                            <div className="directions">
                                    <img onClick={this.showDirections}
                                        src={require('./docs/logo.png')}
                                        alt="Icon made by http://www.freepik.com/ from https://www.flaticon.com"/>
                            </div>
                        </div>
                        <Sunburst
                            data={data}
                            colorType={'category'}
                            colorRange={DIVERGING_COLOR_SCALE}
                            style={{ stroke: '#fff' }}
                            onSelect={this.onSelect}
                            scale="linear"
                            tooltipContent={<div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />}
                            tooltip
                            tooltipPosition="right"
                            keyId="anagraph"
                            width="700"
                            height="600"
                        />
                    </div>
                </div>
        );
    }
}

export default SunBurstGraph;
