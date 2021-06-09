import React from "react";
import { BsArrowClockwise } from "react-icons/bs";

function ResetButton({ res }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-sm resbut"
        onClick={res}
      >
        <ul className="scores-reset">
          <BsArrowClockwise />
          &nbsp; reset
        </ul>
      </button>
    </div>
  );
}

export default ResetButton;
