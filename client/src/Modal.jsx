import React, { PureComponent } from "react";

export default ({ data, closeModal }) => {
  if (!data) return null;
  return (
    <div>
      <div className="modal-body" role="dialog"></div>

      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={closeModal}>&times;</button>
          <h4 className="modal-title">{data.name}</h4>
        </div>
        <div className="modal-info">
          <p>{data.location}</p>
          <p>{data.info}</p>
          <p>Owner: {data.owner}</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  )
}