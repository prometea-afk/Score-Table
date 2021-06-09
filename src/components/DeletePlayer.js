import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function DeletePlayer(props) {
  return (
    <div className="player-del">
      <button
        type="button"
        className="btn-btn-primary btn-sm delt"
        onClick={props.removePla}
      >
        <ul className="dlt-trashbin">
          <BsFillTrashFill />
          &nbsp; delete
        </ul>{" "}
      </button>
    </div>
  );
}

export default DeletePlayer;
