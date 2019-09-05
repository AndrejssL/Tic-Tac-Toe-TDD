import { Game } from "./Game";

describe("Tic Tac Toe Board", () => {
  it("should have blank state", () => {
    const game = new Game();
    expect(game.getCells()).toEqual(Array(9).fill(""));
    expect(game.getWinner()).toBe("");
  });

  it("should have starting turn", () => {
    const game = new Game();
    expect(game.getTurn()).toEqual("X");
  });

  it("should be able to make move and change turn", () => {
    const game = new Game();
    game.makeMove(0);
    expect(game.getCells()).toEqual(["X", "", "", "", "", "", "", "", ""]);
    expect(game.getTurn()).toEqual("O");
  });

  it("should be able to move both players", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(1);
    expect(game.getCells()).toEqual(["X", "O", "", "", "", "", "", "", ""]);
    expect(game.getTurn()).toEqual("X");
  });

  it("should not allow to fill a cell in already filled cell", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(0);
    expect(game.getCells()).toEqual(["X", "", "", "", "", "", "", "", ""]);
  });

  it("should know active player", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(1);
    game.makeMove(2);
    game.makeMove(3);

    expect(game.getCells()).toEqual(["X", "O", "X", "O", "", "", "", "", ""]);
    expect(game.getTurn()).toEqual("X");
  });
});

describe("Win Moves", () => {
  it("should win if first row win by X", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(3);
    game.makeMove(1);
    game.makeMove(4);
    game.makeMove(2);

    expect(game.getCells()).toEqual(["X", "X", "X", "O", "O", "", "", "", ""]);
    expect(game.getWinner()).toBe("X");
  });

  it("should win if first row win by O", () => {
    const game = new Game();
    game.makeMove(3);
    game.makeMove(0);
    game.makeMove(4);
    game.makeMove(1);
    game.makeMove(8);
    game.makeMove(2);

    expect(game.getCells()).toEqual(["O", "O", "O", "X", "X", "", "", "", "X"]);
    expect(game.getWinner()).toBe("O");
  });

  it("should win if second row win by X", () => {
    const game = new Game();
    game.makeMove(3);
    game.makeMove(0);
    game.makeMove(4);
    game.makeMove(1);
    game.makeMove(5);

    expect(game.getCells()).toEqual(["O", "O", "", "X", "X", "X", "", "", ""]);
    expect(game.getWinner()).toBe("X");
  });

  it("should win if second row win by O", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(3);
    game.makeMove(1);
    game.makeMove(4);
    game.makeMove(8);
    game.makeMove(5);

    expect(game.getCells()).toEqual(["X", "X", "", "O", "O", "O", "", "", "X"]);
    expect(game.getWinner()).toBe("O");
  });

  it("should win if third row win by X", () => {
    const game = new Game();
    game.makeMove(6);
    game.makeMove(0);
    game.makeMove(7);
    game.makeMove(1);
    game.makeMove(8);

    expect(game.getCells()).toEqual(["O", "O", "", "", "", "", "X", "X", "X"]);
    expect(game.getWinner()).toBe("X");
  });

  it("should win if third row win by O", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(6);
    game.makeMove(1);
    game.makeMove(7);
    game.makeMove(3);
    game.makeMove(8);

    expect(game.getCells()).toEqual(["X", "X", "", "X", "", "", "O", "O", "O"]);
    expect(game.getWinner()).toBe("O");
  });

  it("should win if first column win by X", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(1);
    game.makeMove(3);
    game.makeMove(2);
    game.makeMove(6);

    expect(game.getCells()).toEqual(["X", "O", "O", "X", "", "", "X", "", ""]);
    expect(game.getWinner()).toBe("X");
  });

  it("should win if first column win by O", () => {
    const game = new Game();
    game.makeMove(1);
    game.makeMove(0);
    game.makeMove(4);
    game.makeMove(3);
    game.makeMove(5);
    game.makeMove(6);

    expect(game.getCells()).toEqual(["O", "X", "", "O", "X", "X", "O", "", ""]);
    expect(game.getWinner()).toBe("O");
  });

  it("should win if second column win by X", () => {
    const game = new Game();
    game.makeMove(1);
    game.makeMove(0);
    game.makeMove(4);
    game.makeMove(2);
    game.makeMove(7);

    expect(game.getCells()).toEqual(["O", "X", "O", "", "X", "", "", "X", ""]);
    expect(game.getWinner()).toBe("X");
  });

  it("should win if second column win by O", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(1);
    game.makeMove(5);
    game.makeMove(4);
    game.makeMove(6);
    game.makeMove(7);

    expect(game.getCells()).toEqual(["X", "O", "", "", "O", "X", "X", "O", ""]);
    expect(game.getWinner()).toBe("O");
  });

  it("should win if third column win by X", () => {
    const game = new Game();
    game.makeMove(2);
    game.makeMove(0);
    game.makeMove(5);
    game.makeMove(4);
    game.makeMove(8);

    expect(game.getCells()).toEqual(["O", "", "X", "", "O", "X", "", "", "X"]);
    expect(game.getWinner()).toBe("X");
  });

  it("should win if third column win by O", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(2);
    game.makeMove(4);
    game.makeMove(5);
    game.makeMove(6);
    game.makeMove(8);

    expect(game.getCells()).toEqual(["X", "", "O", "", "X", "O", "X", "", "O"]);
    expect(game.getWinner()).toBe("O");
  });

  it("should win if first diagonal win by X", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(2);
    game.makeMove(4);
    game.makeMove(5);
    game.makeMove(8);

    expect(game.getCells()).toEqual(["X", "", "O", "", "X", "O", "", "", "X"]);
    expect(game.getWinner()).toBe("X");
  });

  it("should win if first diagonal win by O", () => {
    const game = new Game();
    game.makeMove(2);
    game.makeMove(0);
    game.makeMove(5);
    game.makeMove(4);
    game.makeMove(6);
    game.makeMove(8);

    expect(game.getCells()).toEqual(["O", "", "X", "", "O", "X", "X", "", "O"]);
    expect(game.getWinner()).toBe("O");
  });

  it("should win if second diagonal win by X", () => {
    const game = new Game();
    game.makeMove(2);
    game.makeMove(0);
    game.makeMove(4);
    game.makeMove(5);
    game.makeMove(6);

    expect(game.getCells()).toEqual(["O", "", "X", "", "X", "O", "X", "", ""]);
    expect(game.getWinner()).toBe("X");
  });

  it("should win if second diagonal win by O", () => {
    const game = new Game();
    game.makeMove(0);
    game.makeMove(2);
    game.makeMove(5);
    game.makeMove(4);
    game.makeMove(8);
    game.makeMove(6);

    expect(game.getCells()).toEqual(["X", "", "O", "", "O", "X", "O", "", "X"]);
    expect(game.getWinner()).toBe("O");
  });

  it("should not win if draw", () => {
    const game = new Game();
    game.makeMove(1);
    game.makeMove(4);
    game.makeMove(3);
    game.makeMove(0);
    game.makeMove(6);
    game.makeMove(7);
    game.makeMove(5);
    game.makeMove(2);
    game.makeMove(8);

    expect(game.getCells()).toEqual([
      "O",
      "X",
      "O",
      "X",
      "O",
      "X",
      "X",
      "O",
      "X"
    ]);
    const result = game.gameEnd();
    expect(result).toBe(`Ohhh, it's a draw!`);
  });
});
