import Square from "./Square"
import './Board.css';
import { useState } from "react";
import { Children } from "react";

const TURNS = {
  X : 'x',
  O : 'o'
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]
const Board = () => {
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  // null no hay ganador y false hay un empate
  const [winner, setWinner] = useState(null);
 
  const checkWinner = (boardToCheck) =>{
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo;
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }

  const updateBoard = (index) =>{
    //Verificamos si la posicio ya tiene algo
    if(board[index] || winner) return

    //Actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Calcular el nuevo turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  }

  return (
    <div className="container__tic">
      <h2 className="title_tic">Tic Tac Toe</h2>
      <div className="board">
        {
          board.map((_, index) =>{
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </div>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </div>
  )
}

export default Board