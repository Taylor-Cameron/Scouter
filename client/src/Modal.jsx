import React, { PureComponent } from "react";

export default ({ data, closeModal }) => {
  if (!data) return null;
  return <div>
      <div className="modal-body" role="dialog" onClick={closeModal} />

      <div className="modal-container">
        <div className="modal-header">
          <button type="button" className="close" onClick={closeModal}>
            &times;
          </button>
          <h2 className="modal-title">{data.name}</h2>
        </div>
        <div className="modal-info">
          <p><b>Location: </b>{data.location}</p>
          <p><b>About: </b>{data.info}</p>
          <p><b>Owner: </b> {data.owner}</p>
          <p><b>Website: </b><a target="_blank" href={`http://${data.website}`}>{data.website}
          </a></p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>;
}