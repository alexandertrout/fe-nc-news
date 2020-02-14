import React from "react";
import { Context, SnakeGame } from "react-game-snake";
import { StyledContentArea } from "../styling/styled-components";

const ErrorPage = props => {
  if (!props.err) {
    return (
      <StyledContentArea colour={props.colour}>
        <h1>ERROR: 404</h1>
        <h2>Page does not exist, Play some Snake instead?</h2>
        <br />
        <h3> Sorry, this game is not for mobiles!</h3>
        <SnakeGame
          colors={{
            field: "#bdc3c7",
            food: "#9b59b6",
            snake: "#3498db"
          }}
          countOfHorizontalFields={20}
          countOfVerticalFields={20}
          fieldSize={20}
          loopTime={100}
          pauseAllowed={true}
          restartAllowed={false}
          onLoose={(context: Context) => console.log("Ding")}
          onPause={(context: Context) => alert("paused")}
          onRestart={(context: Context) => alert("restarted")}
          onResume={(context: Context) => alert("onResume")}
          onWin={(context: Context) =>
            alert(`You won with ${context.game.points} points.`)
          }
        />
      </StyledContentArea>
    );
  }
  return (
    <StyledContentArea colour={props.colour}>
      <h1>ERROR: {props.err.status}</h1>
      <h2>{props.err.data.msg}</h2>
    </StyledContentArea>
  );
};

export default ErrorPage;
