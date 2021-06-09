import React from "react";

function AddPlayerBtn({ click }) {
  return (
    <div>
      <div className="container-fluid noplayer">
        <div className="row add-pla">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary noplayer"
              onClick={click}
            >
              + Add a player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPlayerBtn;
