import React, { PureComponent } from "react";
export default ({closeModal}) => {
  return <div>
      <div className="modal-body" role="dialog" onClick={closeModal} />

      <div className="modal-container">
        <div className="modal-content">
          <h2 className="modal-title">About Power Scouter</h2>
          <div className="modal-info">
            <p>
              Power Scouter is a data graphing app for power generation in Alberta made by Taylor Cameron, Alex Buck, and Katherine Connolly for Lighthouse Labs in Calgary.<br />
              <br />
              Using data from <a href="http://ets.aeso.ca/ets_web/ip/Market/Reports/CSDReportServlet" target="_blank" rel="noopener noreferrer">
                AESO
              </a>, it maps the current output of all forms of energy and the powerplants that produce them.<br />
              <br />
              This data can be used for informational purposes, but is subject to a margin of error.
            </p>
          <button type="button" className="btn btn-default" onClick={closeModal}>
            Close
          </button>
          </div>
        </div>
      </div>
    </div>;
}
