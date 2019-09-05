type XO = "X" | "O" | "";

export class Game {
  cells: XO[] = Array(9).fill("");
  turn: XO = "X";
  winner: XO = "";

  getCells(): Array<XO> {
    return this.cells;
  }

  getTurn() {
    return this.turn;
  }

  gameEnd() {
    if (this.getWinner() === "X" || this.getWinner() === "O") {
      return `Player ${this.getWinner()} Won!`;
    } else if (this.getWinner() === "draw") {
      return "Ohhh, it's a draw!";
    } return ""
  }

  makeMove(i: number) {
    if (this.cells[i] !== "") {
      return;
    }
    this.cells[i] = this.turn;
    this.turn = this.turn === "X" ? "O" : "X";
  }

  getRestart() {
    this.cells = Array(9).fill("");
    this.turn = "X";
    this.winner = "";
  }

  getWinner() {
    if (
      this.cells[0] === this.cells[1] &&
      this.cells[1] === this.cells[2] &&
      this.cells[2] !== ""
    ) {
      return this.cells[0];
    }

    if (
      this.cells[3] === this.cells[4] &&
      this.cells[4] === this.cells[5] &&
      this.cells[4] !== ""
    ) {
      return this.cells[3];
    }

    if (
      this.cells[6] === this.cells[7] &&
      this.cells[7] === this.cells[8] &&
      this.cells[8] !== ""
    ) {
      return this.cells[6];
    }

    if (
      this.cells[0] === this.cells[3] &&
      this.cells[3] === this.cells[6] &&
      this.cells[6] !== ""
    ) {
      return this.cells[0];
    }

    if (
      this.cells[1] === this.cells[4] &&
      this.cells[4] === this.cells[7] &&
      this.cells[7] !== ""
    ) {
      return this.cells[1];
    }

    if (
      this.cells[2] === this.cells[5] &&
      this.cells[5] === this.cells[8] &&
      this.cells[8] !== ""
    ) {
      return this.cells[2];
    }

    if (
      this.cells[0] === this.cells[4] &&
      this.cells[4] === this.cells[8] &&
      this.cells[8] !== ""
    ) {
      return this.cells[0];
    }

    if (
      this.cells[2] === this.cells[6] &&
      this.cells[6] === this.cells[4] &&
      this.cells[4] !== ""
    ) {
      return this.cells[2];
    }

    if (
      this.cells[0] !== "" &&
      this.cells[1] !== "" &&
      this.cells[2] !== "" &&
      this.cells[3] !== "" &&
      this.cells[4] !== "" &&
      this.cells[5] !== "" &&
      this.cells[6] !== "" &&
      this.cells[7] !== "" &&
      this.cells[8] !== ""
    ) {
      return `draw`;
    }
    return "";
  }
}
