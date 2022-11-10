import React, { Component } from "react";
import execute, { getPossibleClick } from "./utils";
import minimax from "./minimax";
import Piece from "./piece";
import "./board.css";

export default class Board extends Component {
  state = {
    board: [
      [
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
      ],
      [
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
      ],
      [
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
        new Piece("0"),
        new Piece("M"),
      ],
      [
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
      ],
      [
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
        new Piece("0"),
      ],
      [
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
      ],
      [
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
      ],
      [
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
        new Piece("B"),
        new Piece("0"),
      ],
    ],
    turn: 1,
    possibleMove: [],
    possibleJumpMove: [],
    clickedBefore: [],
    clickedNow: [],
    piecePlayerBlue: 12,
    piecePlayerRed: 12,
    winner: "",
    player: null,
    level: null,
    player1Name: "",
    player2Name: "",
  };

  handleClick = async (row, column) => {
    await this.setState({
      clickedNow: [row, column],
    });

    this.boardExecute();
  };

  boardExecute = async () => {
    let newState = execute(this.state);
    await this.setState({ ...newState });

    if (await this.checkWin()) {
      return;
    }

    if (this.state.player === 2) {
      return;
    }

    while (this.state.turn === 2) {
      const nextState = minimax(this.state);

      await this.setState({ ...nextState });

      if (await this.checkWin()) {
        return;
      }
    }

    if (await this.checkWin()) {
      return;
    }
  };

  boardSave = () => {
    console.log(this.state);
    localStorage.setItem(`${this.state.player1Name} vs ${this.state.player2Name}`, JSON.stringify(this.state));
    window.alert("Game saved!");
    window.location.reload();
  };

  boardLoad = () => {
    this.state.player1Name = prompt("Enter player 1 name: ");
    this.state.player2Name = prompt("Enter player 2 name: ");
    if (!localStorage.getItem(`${this.state.player1Name} vs ${this.state.player2Name}`)) return;
    const boardState = JSON.parse(
      localStorage.getItem(
        `${this.state.player1Name} vs ${this.state.player2Name}`
      )
    );
    this.setState(() => boardState);
  };

  checkWin = async () => {
    const { piecePlayerBlue, piecePlayerRed, turn } = this.state;
    const possibleClick = getPossibleClick(
      turn === 1 ? "B" : "M",
      this.state.board
    );

    if (piecePlayerBlue === 0) {
      await this.setState({ winner: "Player 2" });
      return true;
    } else if (piecePlayerRed === 0) {
      await this.setState({ winner: "Player 1" });
      return true;
    } else if (possibleClick.length === 0) {
      await this.setState({ winner: turn === 1 ? "Player 2" : "Player 1" });
      return true;
    }
    return false;
  };

  renderBoard = (board) => {
    return board.map((row, rowIdx) => (
      <div className="row" key={`row${rowIdx}`}>
        {row.map((column, columnIdx) => (
          <div
            className="column"
            onClick={() => {
              if (this.state.clickedBefore.length > 0 && this.state.possibleJumpMove.length > 0) {
                window.alert("Jump move possible!");
              }
              this.handleClick(rowIdx, columnIdx);
            }
          }
            key={`column${columnIdx}`}
          >
            {column.color === "M" && (
              <div className="red piece">
                {column.isKing && <div className="king" />}
              </div>
            )}
            {column.color === "B" && (
              <div className="blue piece">
                {column.isKing && <div className="king" />}
              </div>
            )}
          </div>
        ))}
      </div>
    ));
  };

  changeNumberOfPlayer = (number) => {
    this.setState({ player: number });
  };

  changeLevel = (level) => {
    this.setState({ level: level });
  };

  render() {
    if (this.state.player === null) {
      return (
        <div className="choose">
          <h1>Checkers Board Game</h1>
          <div className="button">
            <button className="onep" onClick={() => this.changeNumberOfPlayer(1)}>
              1 Player
            </button>
            <button className="twop" onClick={() => {
              while (true) {
                this.state.player1Name = prompt("Enter Player 1 name: ");
                if (this.state.player1Name !== "") break;
                else window.alert("Please enter player 1 name!")
              }
              while (true) {
                this.state.player2Name = prompt("Enter Player 2 name: ");
                if (this.state.player2Name !== "") break;
                else window.alert("Please enter player 2 name!")
              }

              if (this.state.player1Name === null || this.state.player2Name === null) {
                window.alert("Please enter player names!");
                window.reload()
              };
              this.changeNumberOfPlayer(2);
            }}>
              2 Player
            </button>
            <button className="lg" onClick={() => this.boardLoad()}>
              Load Game
            </button>
          </div>
        </div>
      );
    }

    if (this.state.player === 1 && this.state.level === null) {
      return (
        // <div className="sickAI">
        //   <div>Sorry, AI is sick!</div>
        //   Try playing with a friend for now.
        //   <div>
        //     <button className="mm" onClick={() => window.location.reload()}>
        //       Main Menu
        //     </button>
        //   </div>
        // </div>
        <div className="choose">
          <h1>Select Level</h1>
          <div className="button">
            <button
              onClick={() => {
                this.state.player1Name = prompt("Enter your name: ");
                this.state.player2Name = "AI";
                this.changeLevel("easy");
              }}
            >
              Easy
            </button>
            <button
              onClick={() => {
                this.state.player1Name = prompt("Enter your name: ");
                this.state.player2Name = "AI";
                this.changeLevel("hard");
              }}
            >
              Hard
            </button>
          </div>
        </div>
      );
    }

    console.log(this.state);

    return (
      <>
        <div className="player-turn">
          <h1 className="vs-piece">
            <span className="blue">{this.state.piecePlayerBlue}</span>
            <span className="vs"> VS </span>
            <span className="red">{this.state.piecePlayerRed}</span>
          </h1>
          <h1 className={`player-${this.state.turn}`}>
            {this.state.winner
              ? `${this.state.winner} Win`
              : `${this.state.player === 1 ? this.state.player1Name : this.state.turn === 1 ? this.state.player1Name : this.state.player2Name}'s Turn`}
          </h1>
          <h1
            onClick={() => {
              this.boardSave();
            }}
            className="new-game"
          >
            Save Game
          </h1>
        </div>
        <div className="board">{this.renderBoard(this.state.board)}</div>
      </>
    );
  }
}