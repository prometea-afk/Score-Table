import React from "react";
import AddPlayerBtn from "./AddPlayerBtn";

function NoPlayer() {
  return (
    <div>
      <div className="container-fluid noplayer">
        <div className="row noplayer">
          <div className="col">
            <h2 className="noplayer">No players in list!</h2>

            <p className="noplayer">Click add player to add players</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoPlayer;
