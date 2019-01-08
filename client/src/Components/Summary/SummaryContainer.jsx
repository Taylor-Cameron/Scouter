import React, {Component} from 'react';
import SummaryBox from './SummaryBox';

class SummaryContainer extends Component {

    render() {
        const summaryStaticArr = ["POWER GENERATED", "ENERGY IMPORTED", "ALBERTA'S DEMAND", "NET TO GRID"];
        return(
        <div id="summary-container" className="content-wrapper summary-container">
          {this.props.summary.map((ele, index) => {
            return (
              <SummaryBox key={index} title={summaryStaticArr[index]} val={ele}/>
            );
          })}
        </div>
        )
    }
}

export default SummaryContainer;
