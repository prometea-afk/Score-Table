import { React, useState } from "react";
import Counter from "./Counter";

const TotalPlayers = (props) => {
  return <div>Total Players: {props.counter}</div>;
};

export default TotalPlayers;
