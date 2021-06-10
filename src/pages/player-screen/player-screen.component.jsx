import React from "react";
import { Link, useParams } from "react-router-dom";

export const PlayerScreen = () => {

const{id} = useParams();

  return (
    <div>
      <h1>Friend or Foe</h1>
      <p>Welcome! You have been chosen by (username) to take there quiz.</p>
      <p>(username) has created a quiz about themselves to test how well you know them!</p>
      <p>Click PLAY to get stated - GOOD LUCK!</p>

      <Link to={`/game/${id}/play`}>
        <button>PLAY</button>
      </Link>
    </div>
  );
};
