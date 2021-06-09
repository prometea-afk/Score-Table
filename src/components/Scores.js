import { React, useState } from "react";

function Scores({ score }) {
  return (
    <div>
      <h1 className="scores">{score}</h1>
    </div>
  );
}

export default Scores;
