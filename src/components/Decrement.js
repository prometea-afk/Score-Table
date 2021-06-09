import React from "react";

function Decrement({ fnc }) {
  return (
    <div>
      <button type="button" className="btn btn-danger dec" onClick={fnc}>
        - Decrement
      </button>
    </div>
  );
}

export default Decrement;
