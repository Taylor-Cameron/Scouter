import React, {Component} from 'react';

class Disclaimer extends Component {
  render() {
    return(
    <div className="second-row'">
      <div className="block">
        <div className="disclaimer-box">
          <p>The values will change throughout the day as data becomes available through AESO. The data shown on this page is provided for informational purposes only and is subject to a margin of error. AESO's raw data can be found <a href="http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet">here</a>
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default Disclaimer;