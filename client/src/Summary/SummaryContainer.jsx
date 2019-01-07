import React, {Component} from 'react';

class SummaryContainer extends Component {

    render() {
        return(
        <div className="content-wrapper">
        <div className="summary-container" id="summary-container">
            <div className="summary-box">
                <div className="title">POWER GENERATED</div>
                        <div className="value"><span bind="powerGenerated">{this.props.summary[0]}</span> MW</div>
            </div>
            <div className="summary-box">
                <div className="title">ENERGY IMPORTED</div>
                        <div className="value"><span bind="powerGenerated">{this.props.summary[1]}</span> MW</div>
            </div>
            <div className="summary-box">
                <div className="title">ALBERTA'S DEMAND</div>
                        <div className="value"><span bind="albertaDemand">{this.props.summary[2]}</span> MW</div>
            </div>
            <div className="summary-box">
                <div className="title">NET TO GRID</div>
                        <div className="value"><span bind="powerGenerated">{this.props.summary[3]}</span> MW</div>
            </div>
        </div>
        </div>
        )
    }
}

export default SummaryContainer;
