import React, { PureComponent } from "react";
export default ({closeModal}) => {
  return <div>
      <div className="modal-body" role="dialog" onClick={closeModal} />

      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">About This Sunburst Graph</h2>
          </div>
          <div className="modal-info">
            <p>
              This sunburst graph displays the breakdown of total energy output in Alberta by resource and powerplant.<br />
              <br />
              The interior layer is a breakdown of the different energy resources. <br />
              The next layer further breaksdown the resource, first by type (if there is one), then by powerplant. <br />
              <br />
              To navigate, click on any layer of the graph to focus on that specific layer. To go back, simply click on the centre of the sunburst graph.<br />
              <br />
            </p>
          <button type="button" className="btn btn-default" onClick={closeModal}>
            Close
          </button>
          </div>
        </div>
      </div>
    </div>;
}