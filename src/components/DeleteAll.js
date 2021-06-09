import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

function DeleteAll({ DeleteCards }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger del-all"
        onClick={DeleteCards}
      >
        <ul className="delete-all">
          <BsFillTrashFill />
          &nbsp; delete all
        </ul>
      </button>
    </div>
  );
}

export default DeleteAll;
