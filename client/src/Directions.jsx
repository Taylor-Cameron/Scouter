import React, { PureComponent } from "react";
export default () => {
  return <div>
      <div className="modal-body" role="dialog" />

      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">About this Sunburst Graph</h2>
          </div>
          <div className="modal-info">
            <p>This sunburst graph displays the breakdown of total energy output in Alberta by resource and powerplant.<br></br><br></br>
              The interior layer is a breakdown of the different energy resources. <br></br>
              The next layer further breaksdown the resource, first by type (if there is one), then by powerplant. <br></br><br></br>
              To navigate, click on any layer of the graph to focus on that specific layer. To go back, simply click on the centre of the sunburst graph.<br></br><br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
}