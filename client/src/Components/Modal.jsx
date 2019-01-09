import React, { PureComponent } from "react";
import Directions from "../Directions.jsx";
import Information from "../Information.jsx";

export default ({ data, closeModal, directionsModal, informationModal}) => {
  if (directionsModal) return <Directions closeModal={closeModal} />;
  if (informationModal) return <Information closeModal={closeModal} />;
  if (!data) return null;

  return <div>
      <div className="modal-body" role="dialog" onClick={closeModal} />

      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{data.name}</h2>
        </div>
        <div className="modal-info">
          <p><b>Location: </b>{data.location}</p>
          <p><b>About: </b>{data.info}</p>
          <p><b>Owner: </b> {data.owner}</p>
        <p><b>Website: </b><a target="_blank" rel="noopener noreferrer" href={`http://${data.website}`}>{data.website}
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