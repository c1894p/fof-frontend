import React from "react";
import { Link, useParams } from "react-router-dom";

import "../player-screen/player-screen.styles.css"

export const PlayerScreen = () => {

const{id} = useParams();
const{username} =useParams()

  return (
    <div className="player-screen-container">
      <h1 className="player-screen-header">Friend or Foe</h1>
      <h2 className="player-screen-subhead">Welcome! You have been chosen by {username.toUpperCase()} to take there quiz</h2>
      <h2 className="player-screen-subhead">{username.toUpperCase()} has created a quiz about themselves to test how well you know them!</h2>
      <h2 className="player-screen-subhead">Click PLAY to get started - GOOD LUCK!</h2>

      <Link to={`/game/${id}/play`}>
        <button className="play-btn">PLAY</button>
      </Link>
    </div>
  );
};
