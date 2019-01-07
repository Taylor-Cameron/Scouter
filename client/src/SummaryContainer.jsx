import React, {Component} from 'react';

class SummaryContainer extends Component {

    render() {
        return(
        <div className="content-wrapper">
        <div className="summary-container" id="summary-container">
            <div className="summary-box">
                <div className="title">POWER GENERATED</div>
                        <div className="value"><span bind="powerGenerated">{this.props.summary.summaryContainer[0].VALUE}</span> MW</div>
            </div>
            <div className="summary-box">
                <div className="title">ENERGY IMPORTED</div>
                        <div className="value"><span bind="powerGenerated"></span> MW</div>
            </div>
            <div className="summary-box">
                <div className="title">ALBERTA'S DEMAND</div>
                        <div className="value"><span bind="albertaDemand">{this.props.summary.summaryContainer[1].VALUE}</span> MW</div>
            </div>
            <div className="summary-box">
                <div className="title">NET TO GRID</div>
                        <div className="value"><span bind="powerGenerated">{this.props.summary.summaryContainer[2].VALUE}</span> MW</div>
            </div>
        </div>
        </div>
        )
    }
}

export default SummaryContainer;
