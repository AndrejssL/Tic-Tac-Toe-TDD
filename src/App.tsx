import React, { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";

const game = new Game();

const App: React.FC = () => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function restart() {
    game.cells = Array(9).fill("");
    game.turn = "X";
    game.winner = "";
    forceUpdate();
  }

  function getClick(index: number) {
    return (
      <button
        disabled={game.gameEnd() !== ""}
        onClick={() => {
          game.makeMove(index);
          forceUpdate();
        }}
      >
        {game.cells[index]}
      </button>
    );
  }

  return (
    <div className="App">
      <div>
        <h1>Player Turn: {game.getTurn()}</h1>
        <table>
          <tbody>
            <tr>
              <td>{getClick(0)}</td>
              <td>{getClick(1)}</td>
              <td>{getClick(2)}</td>
            </tr>
            <tr>
              <td>{getClick(3)}</td>
              <td>{getClick(4)}</td>
              <td>{getClick(5)}</td>
            </tr>
            <tr>
              <td>{getClick(6)}</td>
              <td>{getClick(7)}</td>
              <td>{getClick(8)}</td>
            </tr>
          </tbody>
        </table>
        <h2>{game.gameEnd()}</h2>
        <button
          className="resetButton"
          disabled={game.gameEnd() === ""}
          onClick={restart}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default App;
