import { React, useState } from "react";
import PlayerName from "./PlayerName";
import Scores from "./Scores";
import ResetButton from "./ResetButton";
import DeletePlayer from "./DeletePlayer";
import AvatarImg from "./AvatarImg";
import Decrement from "./Decrement";
import Increment from "./Increment";

function PlayerCard({ onClick, props }) {
  const [score, setScore] = useState(0);
  const [players, setPlayers] = useState([]);

  const incScore = () => {
    setScore(score + 1);
  };

  const decScore = () => {
    setScore(score - 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div>
      <div className="container playercard">
        <div className="row playercard">
          <div className="col-md-4 playercard">
            <AvatarImg />
          </div>
          <div className="col-md-8 playercard">
            <DeletePlayer removePla={onClick} />
            <PlayerName />
            <div className="row scores-each">
              <div className="col-md-6 ">
                <div className="row">
                  <div className="col-md-12">
                    <Scores score={score} />
                  </div>
                  <div className="col-md-12 resb">
                    <ResetButton res={resetScore} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="row inc-dec">
                  <div className="col-md-12">
                    <Increment fnc={incScore} />
                  </div>
                  <div className="col-md-12">
                    <Decrement fnc={decScore} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
