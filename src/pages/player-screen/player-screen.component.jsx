import React from "react";
import { Link, useParams } from "react-router-dom";

export const PlayerScreen = () => {

const{id} = useParams();
const{username} =useParams()

  return (
    <div>
      <h1>Friend or Foe</h1>
      <p>Welcome! You have been chosen by {username.toUpperCase()} to take there quiz.</p>
      <p>{username.toUpperCase()} has created a quiz about themselves to test how well you know them!</p>
      <p>Every question you get right you will receive 10 points and every question you get wrong 5 points will be deducted</p>
      <p>Click PLAY to get stated - GOOD LUCK!</p>

      <Link to={`/game/${id}/play`}>
        <button>PLAY</button>
      </Link>
    </div>
  );
};
