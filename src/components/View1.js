import { useState } from "react";
import React from "react";
import NoPlayer from "./NoPlayer";
import AddPlayerBtn from "./AddPlayerBtn";
import PlayerCard from "./PlayerCard";
import DeleteAll from "./DeleteAll";
import TotalPlayers from "./TotalPlayers";

const View1 = () => {
  const [players, setPlayers] = useState([]);
  const [counter, setCounter] = useState(0);

  const addPlayer = () => {
    let p = players;

    setPlayers([...p, {}]);
  };

  const DeleteAllFunc = () => {
    setPlayers([]);
  };

  const removePla = (index) => {
    const copyPlayers = [...players];
    copyPlayers.splice(index, 1);
    setPlayers(copyPlayers);
  };

  return (
    <div>
      {players.length === 0 ? (
        <NoPlayer />
      ) : (
        <div>
          <div className="row no1">
            <div className="col-md-6">
              <TotalPlayers
                counter={players.length}
                updateCounter={(count) => {
                  setCounter(count);
                }}
              />
            </div>
            <div className="col-md-6">
              <DeleteAll DeleteCards={DeleteAllFunc} />
            </div>
          </div>
          {players.map((u, v) => {
            return (
              <PlayerCard key={v} onClick={() => removePla(v)} index={v} />
            );
          })}
        </div>
      )}

      <AddPlayerBtn click={addPlayer} />
    </div>
  );
};

export default View1;
