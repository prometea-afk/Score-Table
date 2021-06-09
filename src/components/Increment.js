import { React, useState } from "react";

function Increment({ fnc }) {
  return (
    <div>
      <button type="button" className="btn btn-success inc" onClick={fnc}>
        + Increment
      </button>
    </div>
  );
}

export default Increment;
