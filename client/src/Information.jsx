import React, { PureComponent } from "react";
export default () => {
  return <div>
      <div className="modal-body" role="dialog" />

      <div className="modal-container">
        <div className="modal-content">
            <h2 className="modal-title">About Power Scouter</h2>
          <div className="modal-info">
            <p>Power Scouter is a data graphing app for power generation in Alberta made by Taylor Cameron, Alex Buck, and Katherine Connolly for Lighthouse Labs in Calgary.<br></br><br></br>
              Using data from <a href="http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet" target="_blank" rel="noopener noreferrer">AESO</a>, it maps the current output of all forms of energy and the powerplants that produce them.<br></br><br></br>
              This data can be used for informational purposes, but is subject to a margin of error.
            </p>
          </div>
        </div>
      </div>
    </div>
}