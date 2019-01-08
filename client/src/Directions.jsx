import React, { PureComponent } from "react";
export default () => {
  // if (!data) return null;
  return <div>
      {/* <div className="modal-body" role="dialog" onClick={closeModal} /> */}

      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            {/* <button type="button" className="close" onClick={closeModal}>
              &times;
            </button> */}
            <h2 className="modal-title">Energy Output Sunburst Graph</h2>
          </div>
          <div className="modal-info">
            <p>This is a sunburst graph that shows the total energy output of all form of energy production in Alberta at a given time.
              The interior layer is a breakdown of the different energy resources. 
              The next layer further breaksdown the resource, either by type or plant. 
              To navigate, click on any layer of the graph to see more information. To go back, simply click on the centre of the sunburst graph.
            </p>
          </div>
        </div>
      </div>
    </div>
}