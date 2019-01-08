import React, {Component} from 'react';

class SummaryBox extends Component {

    render() {
        return(
          <div className="summary-box">
              <div className="title">{this.props.title}</div>
                      <div className="value"><span bind="powerGenerated">{this.props.val}</span> MW</div>
          </div>
        )
    }
}

export default SummaryBox;
